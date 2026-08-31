const ARCHIVE_TABLE = "constellation_badges";
const PHOTO_BUCKET = "constellation-photos";
const LOCAL_BADGE_KEY = "constellation_badges";
const LOCAL_DRAFT_KEY = "constellation_quiz_draft";

function getArchiveConfig() {
  return window.archiveConfig || {};
}

function hasSupabaseConfig() {
  const config = getArchiveConfig();
  return Boolean(config.supabaseUrl && config.supabaseAnonKey);
}

function getSupabaseHeaders(extraHeaders = {}) {
  const config = getArchiveConfig();
  const headers = {
    apikey: config.supabaseAnonKey,
    ...extraHeaders,
  };

  // New sb_publishable keys are API keys, not JWTs, so they must not be sent
  // as a Bearer token. Keep the legacy anon-key path working as well.
  if (!config.supabaseAnonKey.startsWith("sb_")) {
    headers.Authorization = `Bearer ${config.supabaseAnonKey}`;
  }
  return headers;
}

function makeClaimCode(constellation) {
  const constellationPart = (constellation || "SKY").slice(0, 3).toUpperCase();
  const randomPart = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `NTS-${constellationPart}-${randomPart}`;
}

function getLocalBadges() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_BADGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveLocalBadge(badge) {
  const badges = getLocalBadges();
  badges[badge.claim_code] = badge;
  localStorage.setItem(LOCAL_BADGE_KEY, JSON.stringify(badges));
  return badge;
}

function findLocalBadge(claimCode) {
  const badges = getLocalBadges();
  return badges[claimCode] || null;
}

function saveQuizDraft(draft) {
  localStorage.setItem(
    LOCAL_DRAFT_KEY,
    JSON.stringify({
      ...draft,
      updated_at: new Date().toISOString(),
    }),
  );
}

function loadQuizDraft() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_DRAFT_KEY)) || null;
  } catch {
    return null;
  }
}

function clearQuizDraft() {
  localStorage.removeItem(LOCAL_DRAFT_KEY);
}

async function supabaseRequest(path, options = {}) {
  const config = getArchiveConfig();
  const response = await fetch(`${config.supabaseUrl}/rest/v1/${path}`, {
    ...options,
    headers: {
      ...getSupabaseHeaders({ "Content-Type": "application/json" }),
      ...options.headers,
    },
  });

  if (!response.ok) {
    const responseText = await response.text();
    let errorBody = {};
    try {
      errorBody = JSON.parse(responseText);
    } catch {
      // Keep the HTTP error useful even when the API does not return JSON.
    }
    const error = new Error(
      errorBody.message || `Archive database request failed: ${response.status}`,
    );
    error.code = errorBody.code || "";
    error.status = response.status;
    throw error;
  }

  if (response.status === 204) return null;
  return response.json();
}

function encodeStoragePath(path) {
  return path.split("/").map((part) => encodeURIComponent(part)).join("/");
}

function getPublicPhotoUrl(photoPath) {
  const config = getArchiveConfig();
  if (!config.supabaseUrl || !photoPath) return "";
  return `${config.supabaseUrl}/storage/v1/object/public/${PHOTO_BUCKET}/${encodeStoragePath(photoPath)}`;
}

function dataUrlToBlob(dataUrl) {
  const [metadata, encodedData] = String(dataUrl).split(",", 2);
  if (!metadata?.startsWith("data:") || !encodedData) {
    throw new Error("The captured photo has an invalid data format.");
  }

  const mimeType = metadata.match(/^data:([^;,]+)/i)?.[1] || "image/jpeg";
  const binary = atob(encodedData);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return new Blob([bytes], { type: mimeType });
}

async function uploadBadgePhoto(dataUrl, claimCode) {
  if (!dataUrl) return "";

  const config = getArchiveConfig();
  const photoPath = `portraits/${claimCode}.jpg`;
  const response = await fetch(
    `${config.supabaseUrl}/storage/v1/object/${PHOTO_BUCKET}/${encodeStoragePath(photoPath)}`,
    {
      method: "POST",
      headers: getSupabaseHeaders({
        "Content-Type": "image/jpeg",
        "x-upsert": "false",
      }),
      body: dataUrlToBlob(dataUrl),
    },
  );

  if (!response.ok) {
    throw new Error(`Photo upload failed: ${response.status}`);
  }
  return photoPath;
}

function getBadgePhotoUrl(badge) {
  return badge.photo_url || getPublicPhotoUrl(badge.photo_path) || badge.photo_data || "";
}

async function saveBadgeRecord(payload) {
  const badge = {
    claim_code: makeClaimCode(payload.constellation_name),
    participant_name: payload.participant_name,
    participant_dob: payload.participant_dob || null,
    constellation_name: payload.constellation_name,
    constellation_title: payload.constellation_title,
    constellation_symbol: payload.constellation_symbol,
    card_color: payload.card_color || "pink",
    result_copy: payload.result_copy,
    sports_value: payload.sports_value,
    hidden_symbol: payload.hidden_symbol,
    melody: payload.melody,
    signature_data: payload.signature_data || "",
    photo_path: "",
    selected_words: payload.selected_words,
    selected_answers: payload.selected_answers,
    created_at: new Date().toISOString(),
  };

  if (!hasSupabaseConfig()) {
    return {
      badge: saveLocalBadge({ ...badge, photo_data: payload.photo_data || "" }),
      photoError: "",
    };
  }

  let photoError = "";
  if (payload.photo_data) {
    try {
      badge.photo_path = await uploadBadgePhoto(payload.photo_data, badge.claim_code);
    } catch (error) {
      photoError = error?.message || "Photo upload failed.";
    }
  }

  const [savedBadge] = await supabaseRequest(ARCHIVE_TABLE, {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify(badge),
  });
  return { badge: savedBadge, photoError };
}

async function findBadgeRecord(claimCode) {
  const normalizedCode = claimCode.trim().toUpperCase();

  if (!hasSupabaseConfig()) {
    return findLocalBadge(normalizedCode);
  }

  const records = await supabaseRequest(
    `${ARCHIVE_TABLE}?claim_code=eq.${encodeURIComponent(normalizedCode)}&select=*`,
  );
  return records[0] || null;
}
