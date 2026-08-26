const legacyQuestions = [
  {
    symbol: "⭐",
    title: "What does this word mean to you?",
    note: "ARCHIVE ENTRY 01 · THE STAR YOU CARRIED",
    primary: "⭐  [SPORTS VALUE]",
    answers: [
      ["Staying grounded when things become difficult.", "ursa"],
      [
        "Continuing forward, even when I do not know where I will end up.",
        "pegasus",
      ],
      ["Becoming stronger through what I experience.", "phoenix"],
      ["Helping myself and others keep going.", "delphinus"],
    ],
    followup:
      "If this value could guide one part of your life, where would you want it to lead you?",
    followupNote: "ARCHIVE ENTRY 02 · THE MEANING BEHIND YOUR STAR",
    followups: [
      ["Towards something I have never discovered before.", "vulpecula"],
      ["Towards the person I hope to become.", "phoenix"],
      ["Towards people and experiences that matter to me.", "delphinus"],
      ["Towards a place where I feel grounded and certain.", "ursa"],
    ],
  },
  {
    symbol: "✦",
    title: "Why does that direction matter to you?",
    note: "Your guiding star is choosing a direction.",
    primary: "[SPORTS VALUE]",
    answers: [
      ["I want to keep discovering.", "vulpecula"],
      ["I want to keep growing.", "phoenix"],
      ["I want to build meaningful connections.", "delphinus"],
      ["I want to know what I can rely on.", "ursa"],
    ],
    followup: null,
    followupNote: "",
    followups: [],
  },
  {
    symbol: "✨",
    title: "What does this symbol mean to you?",
    note: "ARCHIVE ENTRY 03 · WHAT WAS HIDDEN",
    primary: "✨  [HIDDEN SYMBOL]",
    answers: [
      ["Knowing what matters to me.", "ursa"],
      ["Being open to changing direction.", "vulpecula"],
      ["Having something to guide my choices.", "draco"],
      ["Finding my own way.", "pegasus"],
    ],
    followup:
      "If this symbol represented something within you, what would it be?",
    followupNote: "ARCHIVE ENTRY 04 · BENEATH THE SURFACE",
    followups: [
      ["Something I am still discovering.", "vulpecula"],
      ["Something I already know about myself.", "ursa"],
      ["Something I want to develop.", "phoenix"],
      ["Something other people have helped me discover.", "delphinus"],
    ],
  },
  {
    symbol: "✧",
    title: "What kind of melody draws you in?",
    note: "ARCHIVE ENTRY 05 · THE MELODY YOU CHOSE",
    primary: "🎼  YOUR INNER COMPASS",
    answers: [
      ["It felt peaceful and familiar.", "cetus"],
      ["It made me feel hopeful.", "phoenix"],
      ["It felt strong and grounded.", "ursa"],
      ["It made me curious.", "vulpecula"],
    ],
    followup: "What does the feeling you chose mean to you?",
    followupNote: "ARCHIVE ENTRY 06 · WHAT THE MELODY AWAKENED",
    followups: [
      ["I value having space to reflect.", "cetus"],
      ["I like having something to look forward to.", "phoenix"],
      ["I feel strongest when I have something to hold onto.", "ursa"],
      ["I feel most alive when I am discovering something new.", "vulpecula"],
    ],
  },
  {
    symbol: "✦",
    title: "What do you think connects these three pieces?",
    note: "ARCHIVE ENTRY 07 · THREE PIECES OF YOUR SKY",
    primary: "⭐  [SPORTS VALUE]  ·  ✨  [HIDDEN SYMBOL]  ·  🎼  [ARTS PIECE]",
    answers: [
      ["The courage to keep moving forward.", "draco"],
      ["The desire to keep discovering.", "vulpecula"],
      ["The strength to keep becoming.", "phoenix"],
      ["The people and experiences that shape the journey.", "delphinus"],
    ],
    followup: "Which part feels most like you?",
    followupNote: "Three pieces. Three different experiences. One sky.",
    followups: [
      ["Moving forward.", "draco"],
      ["Discovering.", "vulpecula"],
      ["Becoming.", "phoenix"],
      ["Connecting.", "delphinus"],
    ],
  },
  {
    symbol: "🌱",
    title: "Which page calls to you?",
    note: "ARCHIVE ENTRY 08 · THE PAGE YOU WOULD OPEN",
    primary: "The Archive contains four unopened pages.",
    answers: [
      ["🌱  New Beginnings", "phoenix"],
      ["🌊  Endless Horizons", "vulpecula"],
      ["🔥  Trials & Triumphs", "draco"],
      ["🌌  Quiet Wisdom", "corvus"],
    ],
    followup: "What draws you towards this page?",
    followupNote:
      "Every page reveals something about the way you see the journey.",
    followups: [
      ["I am ready to begin something new.", "phoenix"],
      ["I do not want to stop exploring.", "vulpecula"],
      ["I have learned from difficult experiences.", "draco"],
      ["I value understanding before acting.", "corvus"],
    ],
  },
  {
    symbol: "✨",
    title: "If you could add one more star, what would it represent?",
    note: "ARCHIVE ENTRY 09 · THE STAR YOU HAVE YET TO FIND",
    primary: "Your sky is never complete.",
    answers: [
      ["✨  Wonder", "vulpecula"],
      ["🔥  Courage", "draco"],
      ["🌿  Connection", "delphinus"],
      ["🌱  Growth", "phoenix"],
    ],
    followup: "Why would you choose this star?",
    followupNote: "There is always room for another star.",
    followups: [
      ["I want to see beyond what I already know.", "vulpecula"],
      ["I want to become braver in my choices.", "draco"],
      ["I want to build deeper relationships.", "delphinus"],
      ["I want to keep evolving.", "phoenix"],
    ],
  },
  {
    symbol: "☼",
    title:
      "What message would you want your constellation to show another person?",
    note: "ARCHIVE ENTRY 10 · THE LIGHT YOU LEAVE",
    primary: "Every constellation tells a story.",
    answers: [
      ["☼  There is always another beginning.", "phoenix"],
      ["🧭  You do not need to know the whole path.", "ursa"],
      ["🤝  You do not have to walk alone.", "delphinus"],
      ["🔥  You are capable of more than you think.", "draco"],
    ],
    followup: "Why would you want your constellation to shine this message?",
    followupNote: "The light you leave says something about your journey.",
    followups: [
      ["Hope has helped me move forward.", "phoenix"],
      ["Finding direction is not always easy.", "ursa"],
      ["Other people have shaped my journey.", "delphinus"],
      ["Challenges have shown me what I am capable of.", "draco"],
    ],
  },
  {
    symbol: "✧",
    title: "Which word would you place at the centre of your constellation?",
    note: "FINAL ENTRY · THE CENTRE OF YOUR CONSTELLATION",
    primary: "Look at everything you have collected.",
    answers: [
      ["WONDER", "vulpecula"],
      ["COURAGE", "draco"],
      ["CONNECTION", "delphinus"],
      ["GROWTH", "phoenix"],
    ],
    followup: "What makes this worth carrying forward?",
    followupNote: "Your final star completes the archive.",
    followups: [
      ["It reminds me to stay curious.", "vulpecula"],
      ["It reminds me to keep moving.", "draco"],
      ["It reminds me of the people around me.", "delphinus"],
      ["It reminds me that I can change.", "phoenix"],
    ],
  },
];
const questions = window.archiveQuestions;
const constellations = {
  ursa: [
    "Ursa Major",
    "The Anchor",
    "Stability, resilience, and reliability.",
    "🐻",
  ],
  pegasus: [
    "Pegasus",
    "The Horizon",
    "Vision, imagination, and possibility.",
    "🪽",
  ],
  delphinus: [
    "Delphinus",
    "The Ripple",
    "Kindness, connection, and uplifting others.",
    "🐬",
  ],
  corvus: ["Corvus", "The Observer", "Reflection, wisdom, and insight.", "🐦"],
  draco: ["Draco", "The Flame", "Courage, purpose, and leadership.", "🐉"],
  aquila: [
    "Aquila",
    "The Summit",
    "Aspiration, determination, and excellence.",
    "🦅",
  ],
  vulpecula: [
    "Vulpecula",
    "The Pathfinder",
    "Curiosity, adaptability, and exploration.",
    "🦊",
  ],
  lynx: [
    "Lynx",
    "The Quiet Light",
    "Authenticity, intuition, and awareness.",
    "🐈",
  ],
  cetus: [
    "Cetus",
    "The Deep Guardian",
    "Calmness, empathy, and emotional strength.",
    "🐋",
  ],
  phoenix: ["Phoenix", "The Dawn", "Growth, resilience, and renewal.", "🔥"],
};
const questionImages = [
  [
    "assets/artists-highlights-pin.png",
    "An illustrated artist scrapbook and scissors",
  ],
  ["assets/moon-sticker.png", "A playful star wearing a wizard hat"],
  [
    "assets/star-cat.png",
    "A sleeping cat curled beneath golden stars",
  ],
  [
    "assets/lantern-archive.jpeg",
    "A glowing illustrated lantern surrounded by stars",
  ],
  [
    "assets/tia-moon-stars.png",
    "A blue crescent moon surrounded by illustrated stars",
  ],
  [
    "assets/tia-reading-bear.png",
    "A teddy bear reading on a yellow moon chair",
  ],
  [
    "assets/tia-tail-water.jpg",
    "A striped tail dipping into blue illustrated water",
  ],
  [
    "assets/archive-entry-10-book.jpg",
    "An illustrated music book surrounded by flowers, stars, and birds",
  ],
  [
    "assets/tia-night-window.png",
    "An oval night sky window filled with stars",
  ],
];
let current = 0,
  phase = 0,
  scores = {},
  chosen = [],
  stationValues = {
    sports: "Perseverance",
    hidden: "The Compass",
    arts: "The melody you chose",
  };
const $ = (id) => document.getElementById(id);
let participantName = "";
function stopAllAudio() {
  document.querySelectorAll("audio").forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}
function show(id) {
  stopAllAudio();
  document.querySelectorAll(".screen").forEach((s) => {
    s.classList.remove("active");
    s.style.display = "none";
  });
  const screen = $(id);
  if (!screen) return;
  screen.classList.add("active");
  screen.style.display =
    id === "archive-intro" || id === "name-intro" || id === "station-intro" ? "flex" : "block";
  window.scrollTo(0, 0);
}
function personalize(text) {
  return text
    .replaceAll("[SPORTS VALUE]", stationValues.sports)
    .replaceAll("[HIDDEN SYMBOL]", stationValues.hidden)
    .replaceAll("[ARTS PIECE]", stationValues.arts);
}
function render() {
  const q = questions[current];
  const image = questionImages[current];
  const answers = phase === 0 ? q.answers : q.followups || [];
  document.body.dataset.question = current;
  document.body.classList.toggle("lantern-page", current === 3);
  $("entry-number").textContent = String(current + 1).padStart(2, "0");
  $("progress-label").textContent = String(current + 1).padStart(2, "0");
  $("question-title").textContent = personalize(
    phase === 0 ? q.title : q.followup,
  );
  $("question-note").textContent = personalize(
    phase === 0 ? `${q.note} · ${q.primary}` : q.followupNote,
  );
  $("question-symbol").textContent = q.symbol;
  $("question-image").classList.toggle("visible", Boolean(image));
  if (image) {
    $("question-image").src = image[0];
    $("question-image").alt = image[1];
  }
  $("question-symbol").classList.toggle("hidden", Boolean(image));
  $("progress-dots").innerHTML = questions
    .map(
      (_, i) =>
        `<i class="${i === current ? "on" : ""} ${i < current ? "done" : ""}"></i>`,
    )
    .join("");
  $("answers").innerHTML = answers
    .map(
      (a, i) => {
        const audio = a[2] || "";
        const detail = a[3] || a[1];
        if (audio) {
          return `<div class="answer audio-answer" role="button" tabindex="0" data-index="${i}"><span class="answer-number">${String(i + 1).padStart(2, "0")}</span><span><b>${a[0]}</b><small>${detail}</small><audio controls preload="none" src="${audio}" aria-label="Listen to ${a[0]}"></audio><button type="button" class="choose-audio" data-index="${i}">Choose this melody ↗</button></span></div>`;
        }
        return `<button class="answer" data-index="${i}"><span class="answer-number">${String(i + 1).padStart(2, "0")}</span><span class="answer-icon">${a[0]}</span><span><b>${a[0]}</b><small>${detail}</small></span><strong>↗</strong></button>`;
      },
    )
    .join("");
  document
    .querySelectorAll(".answer")
    .forEach((b) => {
      b.onclick = () => select(+b.dataset.index);
      b.onkeydown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          select(+b.dataset.index);
        }
      };
    });
  document
    .querySelectorAll(".answer audio")
    .forEach((audio) => {
      audio.onclick = (event) => event.stopPropagation();
      audio.onplay = () => {
        document.querySelectorAll(".answer audio").forEach((otherAudio) => {
          if (otherAudio !== audio) otherAudio.pause();
        });
      };
    });
  document
    .querySelectorAll(".choose-audio")
    .forEach((button) => {
      button.onclick = (event) => {
        event.stopPropagation();
        select(+button.dataset.index);
      };
    });
}
function turnPage(direction) {
  stopAllAudio();
  const book = document.querySelector(".flipbook");
  book.classList.remove("turn-next", "turn-prev");
  void book.offsetWidth;
  book.classList.add(direction > 0 ? "turn-next" : "turn-prev");
  setTimeout(() => {
    current += direction;
    render();
  }, 260);
  setTimeout(() => book.classList.remove("turn-next", "turn-prev"), 620);
}
function select(i) {
  const answers =
    phase === 0 ? questions[current].answers : questions[current].followups || [];
  const a = answers[i];
  if (!a) return;
  scores[a[1]] = (scores[a[1]] || 0) + 1;
  chosen.push(a[0]);
  if (current === questions.length - 1) {
    stationValues.arts = a[0];
    reveal();
  } else if (phase === 0 && (questions[current].followups || []).length) {
    phase = 1;
    render();
  } else if (current < questions.length - 1) {
    phase = 0;
    turnPage(1);
  } else reveal();
}
function reveal() {
  const key =
    Object.keys(scores).sort((a, b) => scores[b] - scores[a])[0] || "pegasus";
  const c = constellations[key] || constellations.pegasus;
  const resultCopy = `Like ${c[0]}, you are guided by ${c[2].toLowerCase()} Your constellation is a reflection of the values shaping your journey today.`;
  const selectedWords = makeTinWords(c);
  $("result-kicker").textContent = participantName ? `${participantName}, your guiding constellation is` : "Your guiding constellation is";
  $("result-symbol").textContent = c[3];
  $("result-name").textContent = c[0];
  $("result-title").textContent = c[1];
  $("result-copy").textContent = resultCopy;
  $("tin-person-name").textContent = participantName || "Archive Keeper";
  $("tin-constellation-label").textContent = `${c[0]} · ${c[1]}`;
  $("map-star").textContent = stationValues.sports;
  $("map-compass").textContent = stationValues.arts;
  $("map-entry").textContent = stationValues.hidden;
  setTinWords(selectedWords);
  show("result");
  saveCurrentBadge(c, selectedWords, resultCopy);
}
function startArchive() {
  current = 0;
  phase = 0;
  scores = {};
  chosen = [];
  participantName = "";
  stationValues = {
    sports: "Perseverance",
    hidden: "The Compass",
    arts: "The melody you chose",
  };
  show("archive-intro");
}
function goHome() {
  current = 0;
  phase = 0;
  scores = {};
  chosen = [];
  participantName = "";
  show("intro");
}
function beginQuestions() {
  $("participant-name").value = "";
  show("name-intro");
}
function continueName() {
  participantName = titleCaseName($("participant-name").value.trim()) || "Archive keeper";
  $("station-name").textContent = participantName;
  $("sports-value").value = "";
  $("hidden-symbol").value = "";
  show("station-intro");
}
function titleCaseName(value) {
  return value.replace(/\S+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}
function cleanChoiceText(text) {
  return text
    .replace(/[⭐✨🎼🌱🌊🔥🌌☼🧭🤝]/g, "")
    .replace(/\s+/g, " ")
    .replace(/[.?!]+$/g, "")
    .trim();
}
function makeTinWords(constellation) {
  const words = chosen
    .map(cleanChoiceText)
    .filter(Boolean)
    .filter((word, index, list) => list.indexOf(word) === index);
  return [
    stationValues.sports,
    stationValues.hidden,
    constellation[1],
    ...words,
  ].slice(0, 5);
}
function setTinWords(words) {
  const fallbackWords = ["wonder", "courage", "growth", "connection", "direction"];
  [...fallbackWords].forEach((word, index) => {
    const label = $(`tin-word-${["one", "two", "three", "four", "five"][index]}`);
    if (label) label.textContent = words[index] || word;
  });
}
function renderBadgeRecord(badge) {
  const name = badge.participant_name || "Archive Keeper";
  const resultCopy = badge.result_copy || "";
  $("result-kicker").textContent = `${name}, your guiding constellation is`;
  $("result-symbol").textContent = badge.constellation_symbol || "✦";
  $("result-name").textContent = badge.constellation_name || "Your Constellation";
  $("result-title").textContent = badge.constellation_title || "The Archive";
  $("result-copy").textContent = resultCopy;
  $("tin-person-name").textContent = name;
  $("tin-constellation-label").textContent = `${badge.constellation_name} · ${badge.constellation_title}`;
  $("map-star").textContent = badge.sports_value || "—";
  $("map-compass").textContent = badge.melody || "—";
  $("map-entry").textContent = badge.hidden_symbol || "—";
  $("claim-code-output").textContent = badge.claim_code || "Not saved";
  $("save-status").textContent = badge.claim_code
    ? "Save this code to retrieve your constellation badge later."
    : "This badge was retrieved locally.";
  setTinWords(badge.selected_words || []);
  show("result");
}
async function saveCurrentBadge(constellation, selectedWords, resultCopy) {
  $("claim-code-output").textContent = "Saving…";
  $("save-status").textContent = "Writing your constellation into the archive.";

  try {
    const badge = await saveBadgeRecord({
      participant_name: participantName || "Archive Keeper",
      constellation_name: constellation[0],
      constellation_title: constellation[1],
      constellation_symbol: constellation[3],
      result_copy: resultCopy,
      sports_value: stationValues.sports,
      hidden_symbol: stationValues.hidden,
      melody: stationValues.arts,
      selected_words: selectedWords,
      selected_answers: chosen.map(cleanChoiceText).filter(Boolean),
    });
    $("claim-code-output").textContent = badge.claim_code;
    $("save-status").textContent = hasSupabaseConfig()
      ? "Saved to the archive. Use this code to retrieve the badge later."
      : "Saved on this browser for testing. Add Supabase keys to retrieve from any device.";
  } catch (error) {
    $("claim-code-output").textContent = "Could not save";
    $("save-status").textContent = "The badge is visible, but the archive database could not be reached.";
  }
}
async function retrieveBadge(event) {
  event.preventDefault();
  const message = $("retrieve-message");
  const claimCode = $("claim-code").value.trim().toUpperCase();
  if (!claimCode) {
    message.textContent = "Enter your claim code first.";
    return;
  }

  message.textContent = "Searching the archive…";
  try {
    const badge = await findBadgeRecord(claimCode);
    if (!badge) {
      message.textContent = "No badge found for that code.";
      return;
    }
    message.textContent = "";
    renderBadgeRecord(badge);
  } catch (error) {
    message.textContent = "The archive could not be reached. Check your database setup.";
  }
}
function startQuiz() {
  stationValues = {
    sports: $("sports-value").value || "Perseverance",
    hidden: $("hidden-symbol").value || "The Compass",
    arts: "The melody you chose",
  };
  chosen = [stationValues.sports, stationValues.hidden];
  render();
  show("quiz");
}
$("begin").addEventListener("click", startArchive);
$("enter-archive").addEventListener("click", beginQuestions);
$("continue-name").addEventListener("click", continueName);
$("participant-name").addEventListener("input", (event) => {
  const input = event.currentTarget;
  const cursor = input.selectionStart;
  input.value = titleCaseName(input.value);
  input.setSelectionRange(cursor, cursor);
});
$("start-archive").addEventListener("click", startQuiz);
$("back").addEventListener("click", () => {
  if (phase === 1) {
    phase = 0;
    render();
  } else if (current > 0) {
    phase = 1;
    turnPage(-1);
  }
});
$("restart").addEventListener("click", startArchive);
$("home-redirect").addEventListener("click", goHome);
$("retrieve-form").addEventListener("submit", retrieveBadge);
$("copy-claim-code").addEventListener("click", async () => {
  const code = $("claim-code-output").textContent;
  if (!code || code === "Saving…" || code === "Could not save") return;
  await navigator.clipboard.writeText(code);
  $("save-status").textContent = "Claim code copied.";
});
