const ARCHIVE_TABLE = "constellation_badges";
const LOCAL_BADGE_KEY = "constellation_badges";

function getArchiveConfig() {
  return window.archiveConfig || {};
}

function hasSupabaseConfig() {
  const config = getArchiveConfig();
  return Boolean(config.supabaseUrl && config.supabaseAnonKey);
}

function makeClaimCode(name, constellation) {
  const namePart = (name || "STAR")
    .replace(/[^a-z0-9]/gi, "")
    .slice(0, 4)
    .toUpperCase()
    .padEnd(4, "X");
  const constellationPart = (constellation || "SKY").slice(0, 3).toUpperCase();
  const randomPart = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `${namePart}-${constellationPart}-${randomPart}`;
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

async function supabaseRequest(path, options = {}) {
  const config = getArchiveConfig();
  const response = await fetch(`${config.supabaseUrl}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: config.supabaseAnonKey,
      Authorization: `Bearer ${config.supabaseAnonKey}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Archive database request failed: ${response.status}`);
  }

  if (response.status === 204) return null;
  return response.json();
}

async function saveBadgeRecord(payload) {
  const badge = {
    claim_code: makeClaimCode(payload.participant_name, payload.constellation_name),
    participant_name: payload.participant_name,
    constellation_name: payload.constellation_name,
    constellation_title: payload.constellation_title,
    constellation_symbol: payload.constellation_symbol,
    result_copy: payload.result_copy,
    sports_value: payload.sports_value,
    hidden_symbol: payload.hidden_symbol,
    melody: payload.melody,
    selected_words: payload.selected_words,
    selected_answers: payload.selected_answers,
    created_at: new Date().toISOString(),
  };

  if (!hasSupabaseConfig()) {
    return saveLocalBadge(badge);
  }

  const [savedBadge] = await supabaseRequest(ARCHIVE_TABLE, {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify(badge),
  });
  return savedBadge;
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
