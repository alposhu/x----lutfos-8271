/* =====================================================================
   script.js  –  All logic & configuration for Lütfoş's app
   ---------------------------------------------------------------------
   ✏️  Edit anything inside `CONFIG` if you want to tweak texts or timings.
   ===================================================================== */

const CONFIG = {
  herName: "Lütfoş",
  myName:  "Alper",
  pinCode: "2211",

  /* ------------------------------------------------------------------
     1) ASSET PATHS
     ------------------------------------------------------------------ */
  assets: {
    couplePhoto:    "assets/us.jpeg",
    jumpscareImage: "assets/sounds/sfx/special/SuoMBz.png",
    doorSound:      "assets/sounds/sfx/special/door.mp3",
    jumpscareSound: "assets/sounds/sfx/special/jump.mp3",
    keyboardSound:  "assets/sounds/sfx/Keyboard.mp3",
    // Uses the fast 2.3 MB mp3 encoded from music.wav, with music.wav as fallback
    songMp3:        "assets/sounds/music/music.mp3",
    songWav:        "assets/sounds/music/music.wav",
    sfx: {
      rizz:   "assets/sounds/sfx/rizz-sound-effect.mp3",
      yippee: "assets/sounds/sfx/yippeeeeeeeeeeeeee.mp3",
      fah:    "assets/sounds/sfx/original-fah.mp3",
      fail:   "assets/sounds/sfx/spongebob-fail.mp3",
      fart:   "assets/sounds/sfx/perfect-fart.mp3",
      reverb: "assets/sounds/sfx/fart-with-extra-reverb.mp3",
    },
  },

  /* ------------------------------------------------------------------
     2) BOOT SCREEN (fake hacker terminal)
     ------------------------------------------------------------------ */
  bootLines: [
    "> Accessing restricted files...",
    "> Bypassing anger firewall...  [##########] 100%",
    "> Decrypting love protocols...",
    "> WARNING: cuteness levels critical",
    "> Access granted. Welcome Lütfoş."
  ],
  bootTypeSpeedMs: 34,
  bootLinePauseMs: 420,

  /* ------------------------------------------------------------------
     3) FOX INTRO SCENE (grammar-fixed lines + fox anim + speech bubble)
     ------------------------------------------------------------------ */
  foxDialogues: [
    {
      text:   "I feel like somebody's heart is broken...",
      anim:   "idle",
      emote:  "assets/img/fox/04.png",
      bubble: "assets/ui/bubble-3-0.png", // "..." bubble
      sfx:    null
    },
    {
      text:   "*sniff sniff*",
      anim:   "sniff",
      emote:  "assets/img/fox/01.png",
      bubble: "assets/ui/bubble-4-0.png",
      sfx:    null
    },
    {
      text:   "Oh, found ya...",
      anim:   "catch",
      emote:  "assets/img/fox/13.png",
      bubble: "assets/ui/bubble-2-0.png", // "!" bubble
      sfx:    null
    },
    {
      text:   "Let's bring your energy up a little bit, but first you must answer some questions.",
      anim:   "happy",
      emote:  "assets/img/fox/03.png",
      bubble: "assets/ui/bubble-0-0.png", // heart bubble
      sfx:    null
    }
  ],
  goButtonText: "Let's Go!",

  /* ------------------------------------------------------------------
     4) PHOTO PUZZLE (3x2 = 6 tiles for 6 questions; 4/3 matches us.jpeg)
     ------------------------------------------------------------------ */
  puzzle: { cols: 3, rows: 2, aspectRatio: "4 / 3" },
  tileEmotes: [
    "assets/img/bunny/08.png",
    "assets/img/fox/03.png",
    "assets/img/bunny/19.png",
    "assets/img/fox/07.png",
    "assets/img/bunny/23.png",
    "assets/img/fox/15.png"
  ],

  /* ------------------------------------------------------------------
     5) THE QUIZ QUESTIONS
     ------------------------------------------------------------------ */
  questions: [
    {
      question: "Where was our first kiss?",
      options:  ["At the cinema", "Burger King", "A walk by the sea", "In the car"],
      correct:  1,
      emote:    "assets/img/fox/13.png",
      right:    "Burger King royalty! Look how far we've come.",
      wrong:    "How could you forget Burger King?!"
    },
    {
      question: "Who said \"I love you\" first?",
      options:  ["Me", "You", "We said it at the same time"],
      correct:  0,
      emote:    "assets/img/bunny/23.png",
      right:    "Correct! And I'd say it again right now."
    },
    {
      question: "What is my most annoying habit?",
      options:  ["Leaving socks everywhere", "Being late", "My obstinacy", "Stealing your fries"],
      correct:  2,
      emote:    "assets/img/fox/04.png",
      right:    "Guilty... I know I'm stubborn sometimes."
    },
    {
      question: "What is my favourite thing about you?",
      options:  ["Your smile", "Your laugh", "Your fatass", "Your big ass boobs", "All of it"],
      correct:  4,
      emote:    "assets/img/fox/07.png",
      right:    "Every single bit of you (yes, including those)."
    },
    {
      question: "What's the name of the song that reminds me of your beauty?",
      options:  ["JANE", "YOL GÖZÜMÜ DAĞLIYOR", "SOMETHING ABOUT YOU"],
      correct:  2,
      emote:    "assets/img/bunny/19.png",
      playMusicOnCorrect: true,
      right:    "Listen... there really is something about you."
    },
    {
      question: "How many times will I say sorry in this app?",
      options:  ["Once", "A few", "A million", "Until you smile"],
      correct:  3,
      emote:    "assets/img/bunny/02.png",
      right:    "Until I see that beautiful smile again."
    }
  ],

  correctMessages: ["Correct!", "You know me so well!", "Yesss!", "Perfect!"],
  wrongMessages:   ["Nice try! Pick again...", "Ouch! Try another one!", "Think harder, Lütfoş!"],

  puzzleCompleteText: "BİZİKOOOOOOO",
  continueButton:     "Read My Note",

  /* ------------------------------------------------------------------
     6) WRONG ANSWER: HACK BREACH -> SKULL -> DOOR -> JUMPSCARE
     ------------------------------------------------------------------ */
  hackBreachLines: [
    "[!] WRONG ANSWER DETECTED",
    "[!] SECURITY BREACH: INTRUDER IN SYSTEM",
    "> Deploying firewall... FAILED",
    "> Isolating love_core.sys... ACCESS DENIED",
    "> Fighting back [###.......] 32% ... OVERRIDDEN",
    "> Counter-hack aborted. Control lost.",
    "[!] CRITICAL FAILURE"
  ],
  skullText:       "YOU ARE DONE",
  blackoutBeforeDoorMs: 2500, // 2-3 seconds of pitch black before door.mp3
  waitAfterDoorMs:      2000, // 2 seconds after door.mp3 finishes before jumpscare
  jumpscareDurationMs:  1600,

  /* ------------------------------------------------------------------
     7) THE APOLOGY NOTE (poem removed, Turkish note only)
     ------------------------------------------------------------------ */
  apologyNote:
    "Seni üzdüğüm için çok özür dilerim Lütfoşum. Benim için çok değerlisin ve seni asla incitmek istemem. " +
    "Sen benim için dünyalara bedelsin. Daha iyi dinlemeye, daha çok sevmeye ve hak ettiğin kişi olmaya söz veriyorum.",
  noteTypeSpeedMs: 36,
  nextButtonText:  "Continue",

  apologyQuestion: "Beni affeder misin Lütfoşum?",
  noTaunts: [
    "Nice try!",
    "Too slow!",
    "That button doesn't want to be clicked!",
    "Are you sure? Look at the Yes button...",
    "Almost! ...not really",
    "It's literally running away from you!",
    "Hadi ama Lütfoşum, Yes'e bas!"
  ],
  finalText: "Seni çok seviyorum Lütfoşum!\nİyi ki varsın.",
};


/* =====================================================================
   ⚙️  ENGINE
   ===================================================================== */

const $ = (id) => document.getElementById(id);
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

/* ------------------------------ Audio Manager ------------------------------ */
const sfxPool = {};
for (const [k, src] of Object.entries(CONFIG.assets.sfx)) {
  const a = new Audio(src);
  a.preload = "auto";
  sfxPool[k] = a;
}
const doorAudio = new Audio(CONFIG.assets.doorSound);
doorAudio.preload = "auto";
const jumpAudio = new Audio(CONFIG.assets.jumpscareSound);
jumpAudio.preload = "auto";
const keyboardAudio = new Audio(CONFIG.assets.keyboardSound);
keyboardAudio.loop = true;
keyboardAudio.preload = "auto";
let keyboardActive = false;

function startKeyboardSound() {
  keyboardActive = true;
  try {
    keyboardAudio.currentTime = 0;
    keyboardAudio.volume = 0.9;
    const p = keyboardAudio.play();
    if (p && p.catch) p.catch(() => {});
  } catch (e) { /* ignore */ }
}

function stopKeyboardSound() {
  keyboardActive = false;
  try {
    keyboardAudio.pause();
    keyboardAudio.currentTime = 0;
  } catch (e) { /* ignore */ }
}

// Song with automatic fallback from mp3 to wav
const song = new Audio(CONFIG.assets.songMp3);
song.loop = true;
song.preload = "auto";
song.addEventListener("error", () => {
  if (!song.src.endsWith("music.wav")) {
    song.src = CONFIG.assets.songWav;
  }
}, { once: true });

let audioCtx = null;
let audioUnlocked = false;
let musicPlaying = false;

function ensureAudioCtx() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (Ctx && !audioCtx) audioCtx = new Ctx();
    if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
  } catch (e) { /* ignore */ }
}

function unlockAudio() {
  ensureAudioCtx();
  // If the boot hacking animation is currently typing when the user first taps/clicks, start the keyboard audio immediately
  if (keyboardActive && keyboardAudio.paused) {
    keyboardAudio.play().catch(() => {});
  }
  if (audioUnlocked) return;
  audioUnlocked = true;
  // Prime only the delayed horror audio (door & jump) muted so mobile browsers allow them after a long sleep
  for (const a of [doorAudio, jumpAudio]) {
    a.muted = true;
    const p = a.play();
    if (p && p.then) {
      p.then(() => { a.pause(); a.currentTime = 0; a.muted = false; })
       .catch(() => { a.muted = false; });
    } else {
      a.muted = false;
    }
  }
}

document.addEventListener("pointerdown", unlockAudio);
document.addEventListener("keydown", unlockAudio);

function playSfx(name, vol = 0.85) {
  const a = sfxPool[name];
  if (!a) return;
  try {
    a.currentTime = 0;
    a.volume = vol;
    const p = a.play();
    if (p && p.catch) p.catch(() => {});
  } catch (e) { /* ignore */ }
}

/** Tiny retro beep for typing / UI ticks via WebAudio */
function beep(freq = 520, dur = 0.03, type = "square", gainVal = 0.035) {
  if (!audioCtx || audioCtx.state !== "running") return;
  try {
    const t = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(gainVal, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    osc.connect(g);
    g.connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + dur);
  } catch (e) { /* ignore */ }
}

function startBeautySong() {
  if (musicPlaying) return;
  musicPlaying = true;
  song.volume = 0.75;
  const p = song.play();
  if (p && p.catch) p.catch(() => { musicPlaying = false; });
}

/** Play an HTMLAudioElement once and resolve when it ends (with a safety timeout). */
function playAndWait(audioEl, fallbackMs = 4000) {
  return new Promise((resolve) => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      audioEl.removeEventListener("ended", finish);
      audioEl.removeEventListener("error", finish);
      clearTimeout(timer);
      resolve();
    };
    const timer = setTimeout(finish, fallbackMs);
    audioEl.addEventListener("ended", finish, { once: true });
    audioEl.addEventListener("error", finish, { once: true });
    try {
      audioEl.currentTime = 0;
      audioEl.volume = 1;
      const p = audioEl.play();
      if (p && p.then) {
        p.then(() => {
          if (isFinite(audioEl.duration) && audioEl.duration > 0) {
            clearTimeout(timer);
            setTimeout(finish, (audioEl.duration + 0.25) * 1000);
          }
        }).catch(finish);
      }
    } catch (e) {
      finish();
    }
  });
}

/* ------------------------------ Screen Helper ------------------------------ */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo(0, 0);
}

/* ------------------------------ Floating Emotes Background ------------------------------ */
function initFloaters() {
  const emoteList = [
    "assets/img/bunny/03.png", "assets/img/bunny/04.png", "assets/img/bunny/08.png",
    "assets/img/bunny/19.png", "assets/img/bunny/23.png", "assets/img/fox/03.png",
    "assets/img/fox/07.png",   "assets/img/fox/12.png",   "assets/img/fox/15.png"
  ];
  document.querySelectorAll(".floaters").forEach((box) => {
    for (let i = 0; i < 12; i++) {
      const img = document.createElement("img");
      img.className = "floater";
      img.src = emoteList[i % emoteList.length];
      img.alt = "";
      img.style.left = Math.random() * 96 + "%";
      img.style.animationDuration = 10 + Math.random() * 12 + "s";
      img.style.animationDelay = -Math.random() * 20 + "s";
      box.appendChild(img);
    }
  });
}

/* =====================================================================
   1) BOOT SCREEN
   ===================================================================== */
let bootDone = false;

async function runBoot() {
  const out = $("boot-text");
  startKeyboardSound();
  for (const line of CONFIG.bootLines) {
    for (const ch of line) {
      if (bootDone) return;
      out.textContent += ch;
      await sleep(CONFIG.bootTypeSpeedMs);
    }
    out.textContent += "\n";
    await sleep(CONFIG.bootLinePauseMs);
  }
  stopKeyboardSound();
  await sleep(550);
  finishBoot();
}

async function finishBoot() {
  if (bootDone) return;
  bootDone = true;
  stopKeyboardSound();
  unlockAudio();
  $("boot-skip").classList.add("hidden");

  // White up the screen, then reveal the fox scene
  const w = $("whiteout");
  w.classList.add("flash");
  await sleep(700);

  document.body.classList.remove("dark");
  document.body.classList.add("white");
  showScreen("fox-scene");

  await sleep(150);
  w.classList.remove("flash");
  startFoxScene();
}

/* =====================================================================
   2) FOX SPRITE SHEET ANIMATOR & INTRO DIALOGUE
   ---------------------------------------------------------------------
   Fox Sprite Sheet.png has 32x32 cells (scaled 4x in CSS -> 128x128):
     Row 0 (5 frames): idle look
     Row 1 (14 frames): head tilt / sniff / look around
     Row 2 (8 frames): run / walk
     Row 3 (11 frames): pounce / catch
     Row 4 (5 frames): tail wag / happy
   ===================================================================== */
const FOX_ANIMS = {
  idle:  { row: 0, frames: [0, 1, 2, 3, 4],                   fps: 6  },
  sniff: { row: 1, frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], fps: 9 },
  walk:  { row: 2, frames: [0, 1, 2, 3, 4, 5, 6, 7],          fps: 11 },
  catch: { row: 3, frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], fps: 10 },
  happy: { row: 4, frames: [0, 1, 2, 3, 4],                   fps: 7  },
};

let foxTimer = null;
function setFoxAnim(name) {
  const spec = FOX_ANIMS[name] || FOX_ANIMS.idle;
  const el = $("fox");
  if (foxTimer) clearInterval(foxTimer);
  let idx = 0;
  const step = () => {
    const col = spec.frames[idx % spec.frames.length];
    el.style.backgroundPosition = `${-col * 128}px ${-spec.row * 128}px`;
    idx++;
  };
  step();
  foxTimer = setInterval(step, Math.round(1000 / spec.fps));
}

let dlgIndex = 0;
let dlgTyping = false;
let dlgSkipLine = false;

async function startFoxScene() {
  const fox = $("fox");
  setFoxAnim("walk");
  // Trigger walk-in to center
  void fox.offsetWidth;
  fox.classList.add("walk-in");
  await sleep(2150);

  setFoxAnim("idle");
  $("dialogue").classList.remove("hidden");
  $("go-btn").textContent = CONFIG.goButtonText;

  dlgIndex = 0;
  await playFoxDialogue(dlgIndex);
}

async function playFoxDialogue(i) {
  const d = CONFIG.foxDialogues[i];
  dlgTyping = true;
  dlgSkipLine = false;

  setFoxAnim(d.anim);
  $("dlg-emote").src = d.emote;

  const bub = $("fox-bubble");
  if (d.bubble) {
    bub.src = d.bubble;
    bub.classList.remove("hidden");
  } else {
    bub.classList.add("hidden");
  }

  if (d.sfx) playSfx(d.sfx, 0.8);

  const txtEl = $("dlg-text");
  txtEl.textContent = "";
  $("dlg-next").classList.add("hidden");

  for (const ch of d.text) {
    if (dlgSkipLine) {
      txtEl.textContent = d.text;
      break;
    }
    txtEl.textContent += ch;
    beep(620 + (ch.charCodeAt(0) % 7) * 35, 0.022, "triangle", 0.03);
    await sleep(32);
  }

  dlgTyping = false;
  if (i < CONFIG.foxDialogues.length - 1) {
    $("dlg-next").classList.remove("hidden");
  } else {
    // Last line finished -> show the button to enter the quiz
    $("go-btn").classList.remove("hidden");
  }
}

function setupFoxControls() {
  $("dialogue").addEventListener("click", () => {
    unlockAudio();
    if (dlgTyping) {
      dlgSkipLine = true;
      return;
    }
    if (dlgIndex < CONFIG.foxDialogues.length - 1) {
      dlgIndex++;
      playFoxDialogue(dlgIndex);
    }
  });

  $("go-btn").addEventListener("click", () => {
    unlockAudio();
    if (foxTimer) clearInterval(foxTimer);
    startQuiz();
  });
}

/* =====================================================================
   3) QUIZ + PHOTO PUZZLE
   ===================================================================== */
const quiz = {
  index: 0,
  correctCount: 0,
  locked: false,
  revealedTiles: 0,
  tileOrder: [],
};

function setupPuzzle() {
  const { cols, rows, aspectRatio } = CONFIG.puzzle;
  const board = $("puzzle");
  board.style.aspectRatio = aspectRatio;

  // Couple photo underneath
  const photo = $("puzzle-photo");
  photo.style.backgroundImage = `url("${CONFIG.assets.couplePhoto}")`;

  // Cover tiles with bunny & fox emotes
  const tiles = $("puzzle-tiles");
  tiles.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  tiles.style.gridTemplateRows    = `repeat(${rows}, 1fr)`;
  tiles.innerHTML = "";
  const total = cols * rows;
  for (let i = 0; i < total; i++) {
    const t = document.createElement("div");
    t.className = "tile";
    const im = document.createElement("img");
    im.src = CONFIG.tileEmotes[i % CONFIG.tileEmotes.length];
    im.alt = "";
    t.appendChild(im);
    tiles.appendChild(t);
  }

  // Progress row of little bunny/fox icons
  const pIcons = $("progress-icons");
  pIcons.innerHTML = "";
  for (let i = 0; i < CONFIG.questions.length; i++) {
    const im = document.createElement("img");
    im.src = CONFIG.tileEmotes[i % CONFIG.tileEmotes.length];
    im.alt = "";
    pIcons.appendChild(im);
  }

  // Random tile reveal order
  quiz.tileOrder = [...Array(total).keys()];
  for (let i = quiz.tileOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quiz.tileOrder[i], quiz.tileOrder[j]] = [quiz.tileOrder[j], quiz.tileOrder[i]];
  }
}

function revealTiles() {
  const total = CONFIG.puzzle.cols * CONFIG.puzzle.rows;
  const target = Math.round((quiz.correctCount / CONFIG.questions.length) * total);
  const tileEls = $("puzzle-tiles").children;
  while (quiz.revealedTiles < target) {
    const el = tileEls[quiz.tileOrder[quiz.revealedTiles]];
    el.classList.add("revealed");
    quiz.revealedTiles++;
  }
  const icons = $("progress-icons").children;
  for (let i = 0; i < quiz.correctCount && i < icons.length; i++) {
    icons[i].classList.add("done");
  }
}

function startQuiz() {
  quiz.index = 0;
  quiz.correctCount = 0;
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const q = CONFIG.questions[quiz.index];
  const total = CONFIG.questions.length;

  $("progress-label").textContent = `Question ${quiz.index + 1} / ${total}`;
  $("mood-img").src = q.emote || "assets/img/fox/01.png";
  $("question-text").textContent = q.question;

  $("feedback").className = "feedback";
  $("fb-emote").classList.add("hidden");
  $("fb-text").textContent = "";

  const box = $("options");
  box.innerHTML = "";
  q.options.forEach((text, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "option";
    b.textContent = text;
    b.addEventListener("click", () => handleAnswer(i, b));
    box.appendChild(b);
  });
  quiz.locked = false;
}

function showFeedback(text, isGood) {
  const fb = $("feedback");
  const em = $("fb-emote");
  fb.className = "feedback " + (isGood ? "good" : "bad");
  em.src = isGood ? "assets/img/fox/14.png" : "assets/img/bunny/06.png";
  em.classList.remove("hidden");
  $("fb-text").textContent = text;
}

function handleAnswer(choice, btn) {
  if (quiz.locked) return;
  unlockAudio();
  const q = CONFIG.questions[quiz.index];
  quiz.locked = true;

  if (choice === q.correct) {
    // ✅ CORRECT
    btn.classList.add("correct");
    document.querySelectorAll(".option").forEach((o) => (o.disabled = true));
    quiz.correctCount++;
    revealTiles();

    if (q.playMusicOnCorrect) {
      startBeautySong();
    } else {
      playSfx("rizz", 0.8);
    }

    $("mood-img").src = "assets/img/bunny/05.png";
    showFeedback(q.right || pick(CONFIG.correctMessages), true);

    setTimeout(() => {
      quiz.index++;
      if (quiz.index < CONFIG.questions.length) renderQuestion();
      else completePuzzle();
    }, 1900);
  } else {
    // ❌ WRONG -> run the full hacker breach + skull + door + jumpscare sequence
    btn.classList.add("wrong");
    btn.disabled = true;
    $("mood-img").src = "assets/img/fox/09.png";

    runWrongAnswerSequence().then(() => {
      showFeedback(q.wrong || pick(CONFIG.wrongMessages), false);
      quiz.locked = false;
    });
  }
}

function completePuzzle() {
  playSfx("yippee", 0.9);
  $("question-card").classList.add("hidden");
  $("progress-label").textContent = "Unlocked!";
  $("puzzle").classList.add("complete");
  $("complete-text").textContent = CONFIG.puzzleCompleteText;
  $("continue-btn").textContent = CONFIG.continueButton;
  $("complete-box").classList.remove("hidden");
  $("complete-box").scrollIntoView({ behavior: "smooth", block: "center" });
}

/* =====================================================================
   WRONG ANSWER SEQUENCE:
   1. Blackout screen -> hacker breach vs failed defense
   2. Pixel skull appears ("YOU ARE DONE") and rushes close immediately
   3. Sudden pitch-black screen for 2.5s
   4. Play door.mp3 once and wait until it ends
   5. Wait 2 seconds in pitch black
   6. Flash SuoMBz.png + play jump.mp3
   ===================================================================== */
function drawPixelSkull() {
  const c = $("skull");
  const ctx = c.getContext("2d");
  const grid = [
    "....XXXXXXXX....",
    "..XXXXXXXXXXXX..",
    ".XXXXXXXXXXXXXX.",
    ".XXXXXXXXXXXXXX.",
    "XXXX...XX...XXXX",
    "XXX....XX....XXX",
    "XXX....XX....XXX",
    "XXXX...XX...XXXX",
    ".XXXXXX..XXXXXX.",
    ".XXXXXXXXXXXXXX.",
    "..XXXXXXXXXXXX..",
    "...XX.XXXX.XX...",
    "...X.X.XX.X.X...",
    "....X..XX..X....",
    "................",
    "................"
  ];
  ctx.clearRect(0, 0, 16, 16);
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      if (grid[y][x] === "X") {
        ctx.fillStyle = (y < 3) ? "#ffe5e5" : "#ff2a2a";
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }
}

function setupJumpscare() {
  drawPixelSkull();
  $("jumpscare-img").src = CONFIG.assets.jumpscareImage;
}

async function runWrongAnswerSequence() {
  // Pause music during the horror sequence so door.mp3 & jump.mp3 hit in dead silence
  const wasMusicPlaying = !song.paused;
  if (wasMusicPlaying) song.pause();

  const hack = $("hack");
  const log = $("hack-log");
  const skullBox = $("skull-box");
  const js = $("jumpscare");

  log.textContent = "";
  skullBox.className = "skull-box";
  hack.className = "hack active";
  hack.setAttribute("aria-hidden", "false");

  // 1) Hacker breach lines typing out rapidly with Keyboard.mp3
  startKeyboardSound();
  for (const line of CONFIG.hackBreachLines) {
    for (const ch of line) {
      log.textContent += ch;
      await sleep(16);
    }
    log.textContent += "\n";
    await sleep(210);
  }
  stopKeyboardSound();

  // 2) Pixel skull appears and says "YOU ARE DONE", then rushes at the camera
  $("skull-text").textContent = CONFIG.skullText;
  skullBox.classList.add("show");
  playSfx("reverb", 0.9);
  await sleep(650);

  skullBox.classList.add("rush");
  await sleep(520);

  // 3) Suddenly pitch black for 2-3 seconds
  hack.classList.add("pitch-black");
  await sleep(CONFIG.blackoutBeforeDoorMs);

  // 4) Play door.mp3 once and wait for it to finish
  await playAndWait(doorAudio, 6500);

  // 5) Wait 2 seconds after door.mp3 is over
  await sleep(CONFIG.waitAfterDoorMs);

  // 6) Sudden jumpscare with SuoMBz.png and jump.mp3
  js.classList.add("show");
  js.setAttribute("aria-hidden", "false");
  jumpAudio.currentTime = 0;
  jumpAudio.volume = 1;
  const p = jumpAudio.play();
  if (p && p.catch) p.catch(() => {});
  if (navigator.vibrate) navigator.vibrate([250, 70, 250, 70, 350]);

  await sleep(CONFIG.jumpscareDurationMs);

  // Clean up overlays & resume music if it had already been unlocked
  js.classList.remove("show");
  js.setAttribute("aria-hidden", "true");
  jumpAudio.pause();
  jumpAudio.currentTime = 0;

  hack.className = "hack";
  hack.setAttribute("aria-hidden", "true");

  if (wasMusicPlaying) {
    song.play().catch(() => {});
  }
}

/* =====================================================================
   4) GRAND FINALE (Paper UI Note Appear Animation + Apology Note)
   ===================================================================== */
let skipNoteTyping = false;
let apologyActive = false;

function setupFinale() {
  $("continue-btn").addEventListener("click", () => {
    unlockAudio();
    openFinale();
  });
  $("skip-note").addEventListener("click", () => {
    skipNoteTyping = true;
  });
  $("next-btn").textContent = CONFIG.nextButtonText;
  $("next-btn").addEventListener("click", showQuestionPage);

  $("ask-emote").src = "assets/img/fox/03.png";
  $("apology-question").textContent = CONFIG.apologyQuestion;

  setupRunawayButton();
  $("yes-btn").addEventListener("click", onYes);
}

/** Plays the 36-frame Paper UI appear sprite sheet (6x6 grid). */
function playNoteAppearAnimation() {
  return new Promise((resolve) => {
    const anim = $("note-anim");
    const totalFrames = 36;
    const cols = 6;
    let f = 0;
    const timer = setInterval(() => {
      const col = f % cols;
      const row = Math.floor(f / cols);
      anim.style.backgroundPosition = `${(col / (cols - 1)) * 100}% ${(row / (cols - 1)) * 100}%`;
      f++;
      if (f >= totalFrames) {
        clearInterval(timer);
        $("note-wrap").classList.add("ready");
        resolve();
      }
    }, 28);
  });
}

async function openFinale() {
  showScreen("finale");
  startBeautySong();

  await playNoteAppearAnimation();
  await typeNote();

  $("skip-note").classList.add("hidden");
  $("next-btn").classList.remove("hidden");
}

async function typeNote() {
  const el = $("note-text");
  el.textContent = "";
  const textNode = document.createTextNode("");
  const cursor = document.createElement("span");
  cursor.className = "type-cursor";
  el.append(textNode, cursor);

  const full = CONFIG.apologyNote;
  for (let i = 0; i < full.length; i++) {
    if (skipNoteTyping) {
      textNode.data = full;
      break;
    }
    const ch = full[i];
    textNode.data += ch;
    let delay = CONFIG.noteTypeSpeedMs;
    if (",.!?".includes(ch)) delay = CONFIG.noteTypeSpeedMs * 5;
    await sleep(delay);
  }
  cursor.remove();
}

function showQuestionPage() {
  playSfx("fah", 0.7);
  $("next-btn").classList.add("hidden");
  $("note-page1").classList.add("hidden");
  $("note-page2").classList.remove("hidden");
  $("answer-row").classList.remove("hidden");
  apologyActive = true;
}

/* ------------------------------ Runaway "No" Button ------------------------------ */
let noDodges = 0;
let lastPointer = { x: -999, y: -999 };

function setupRunawayButton() {
  const no = $("no-btn");

  const dodge = (e) => {
    if (!apologyActive) return;
    if (e && e.cancelable) e.preventDefault();
    updatePointer(e);
    moveNoButton();
  };

  no.addEventListener("pointerenter", dodge);
  no.addEventListener("pointerdown", dodge);
  no.addEventListener("touchstart", dodge, { passive: false });
  no.addEventListener("mouseover", dodge);
  no.addEventListener("focus", (e) => { dodge(e); no.blur(); });
  no.addEventListener("click", dodge);

  document.addEventListener("pointermove", (e) => {
    lastPointer = { x: e.clientX, y: e.clientY };
    if (!apologyActive || !no.classList.contains("escaping")) return;
    const r = no.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    if (Math.hypot(e.clientX - cx, e.clientY - cy) < Math.max(r.width, 90)) moveNoButton();
  });
}

function updatePointer(e) {
  if (!e) return;
  const t = e.touches && e.touches[0];
  if (t) lastPointer = { x: t.clientX, y: t.clientY };
  else if (typeof e.clientX === "number") lastPointer = { x: e.clientX, y: e.clientY };
}

function moveNoButton() {
  const no = $("no-btn");
  const yes = $("yes-btn");

  playSfx("fart", 0.75);

  if (!no.classList.contains("escaping")) {
    const r = no.getBoundingClientRect();
    no.classList.add("escaping");
    no.style.left = r.left + "px";
    no.style.top = r.top + "px";
    document.body.appendChild(no);
    void no.offsetWidth;
  }

  const margin = 14;
  const w = no.offsetWidth, h = no.offsetHeight;
  const maxX = Math.max(margin, window.innerWidth - w - margin);
  const maxY = Math.max(margin, window.innerHeight - h - margin);
  const yr = yes.getBoundingClientRect();
  const minDist = Math.min(220, Math.min(window.innerWidth, window.innerHeight) * 0.4);

  let best = null, bestDist = -1;
  for (let i = 0; i < 40; i++) {
    const x = margin + Math.random() * (maxX - margin);
    const y = margin + Math.random() * (maxY - margin);
    const cx = x + w / 2, cy = y + h / 2;
    const dist = Math.hypot(cx - lastPointer.x, cy - lastPointer.y);
    const overlapsYes = x < yr.right + 12 && x + w > yr.left - 12 && y < yr.bottom + 12 && y + h > yr.top - 12;
    if (overlapsYes) continue;
    if (dist > bestDist) { best = { x, y }; bestDist = dist; }
    if (dist >= minDist) break;
  }
  if (!best) best = { x: margin, y: margin };

  no.style.left = best.x + "px";
  no.style.top = best.y + "px";

  noDodges++;
  $("no-taunt").textContent = CONFIG.noTaunts[(noDodges - 1) % CONFIG.noTaunts.length];
  $("ask-emote").src = (noDodges % 2 === 0) ? "assets/img/bunny/24.png" : "assets/img/fox/04.png";
  const scale = Math.min(1 + noDodges * 0.07, 1.55);
  yes.style.transform = `scale(${scale})`;
}

/* ------------------------------ "Yes" Celebration ------------------------------ */
function onYes() {
  if (!apologyActive) return;
  apologyActive = false;

  const no = $("no-btn");
  if (no) no.remove();

  $("answer-row").classList.add("hidden");
  $("note-page2").classList.add("hidden");

  $("final-emote").src = "assets/img/fox/07.png";
  $("final-text").textContent = CONFIG.finalText;
  $("note-page3").classList.remove("hidden");

  playSfx("yippee", 1.0);
  startBeautySong();

  confettiBurst(180);
  setTimeout(() => confettiBurst(130), 700);
  setTimeout(() => confettiBurst(130), 1500);
  setTimeout(() => confettiBurst(100), 2600);
}

/* =====================================================================
   CONFETTI (draws pixel confetti + bunny/fox emote sprites, no Unicode emojis)
   ===================================================================== */
const confetti = {
  canvas: null,
  ctx: null,
  particles: [],
  sprites: [],
  running: false,
  dpr: window.devicePixelRatio || 1,
};

function setupConfetti() {
  confetti.canvas = $("confetti");
  confetti.ctx = confetti.canvas.getContext("2d");

  const spritePaths = [
    "assets/img/bunny/05.png", "assets/img/bunny/08.png", "assets/img/bunny/19.png",
    "assets/img/fox/03.png",   "assets/img/fox/07.png",   "assets/img/fox/14.png"
  ];
  spritePaths.forEach((src) => {
    const im = new Image();
    im.src = src;
    confetti.sprites.push(im);
  });

  const resize = () => {
    confetti.dpr = window.devicePixelRatio || 1;
    confetti.canvas.width = window.innerWidth * confetti.dpr;
    confetti.canvas.height = window.innerHeight * confetti.dpr;
  };
  resize();
  window.addEventListener("resize", resize);
}

function confettiBurst(count) {
  const W = window.innerWidth, H = window.innerHeight;
  const colors = ["#ff6b9a", "#ffd166", "#2fbf71", "#ecddc0", "#ff8fb1", "#ffffff", "#e84a7f"];

  for (let i = 0; i < count; i++) {
    const fromLeft = Math.random() < 0.5;
    const origin = i % 3 === 0
      ? { x: W / 2, y: H * 0.45, angle: Math.random() * Math.PI * 2, speed: 4 + Math.random() * 10 }
      : { x: fromLeft ? 0 : W, y: H, angle: -Math.PI / 2 + (fromLeft ? 1 : -1) * Math.random() * 0.7, speed: 12 + Math.random() * 14 };

    const useSprite = Math.random() < 0.16 && confetti.sprites.length > 0;
    confetti.particles.push({
      x: origin.x,
      y: origin.y,
      vx: Math.cos(origin.angle) * origin.speed,
      vy: Math.sin(origin.angle) * origin.speed,
      size: 7 + Math.random() * 8,
      color: pick(colors),
      sprite: useSprite ? pick(confetti.sprites) : null,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.25,
      life: 0,
      maxLife: 160 + Math.random() * 120,
    });
  }
  if (!confetti.running) {
    confetti.running = true;
    requestAnimationFrame(confettiFrame);
  }
}

function confettiFrame() {
  const { ctx, canvas, particles, dpr } = confetti;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.scale(dpr, dpr);

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.life++;
    p.vy += 0.28;
    p.vx *= 0.99;
    p.vy *= 0.99;
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.vr;

    if (p.life > p.maxLife || p.y > window.innerHeight + 50) {
      particles.splice(i, 1);
      continue;
    }

    ctx.save();
    ctx.globalAlpha = Math.min(1, (p.maxLife - p.life) / 40);
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    if (p.sprite && p.sprite.complete && p.sprite.naturalWidth > 0) {
      const s = p.size * 2.6;
      ctx.drawImage(p.sprite, -s / 2, -s / 2, s, s);
    } else {
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
    }
    ctx.restore();
  }

  if (particles.length) {
    requestAnimationFrame(confettiFrame);
  } else {
    confetti.running = false;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

/* =====================================================================
   0A) BACKGROUND ASSET PRELOADER (runs while PIN is being entered)
   ===================================================================== */
const preloader = {
  total: 0,
  loaded: 0,
  done: false,
  promises: [],
  dioramaImages: {},
};

function startBackgroundPreload() {
  const imageUrls = [
    CONFIG.assets.couplePhoto,
    CONFIG.assets.jumpscareImage,
    "assets/img/fox-sprites.png",
    "assets/ui/paper-card.png",
    "assets/ui/paper-card-tan.png",
    "assets/ui/ribbon-green.png",
    "assets/ui/ribbon-red.png",
    "assets/ui/ribbon-tan.png",
    "assets/ui/header-ribbon.png",
    "assets/ui/desk.png",
    "assets/ui/desk-dark.png",
    "assets/ui/note-paper.png",
    "assets/ui/note-appear.png",
    "assets/ui/lock.png",
    "assets/ui/sky-sheet.png",
    "assets/ui/shop-bg.png",
    "assets/ui/moon.png",
    "assets/ui/cloud-cream.png",
    "assets/ui/cloud-gold.png",
    "assets/ui/bubble-0-0.png",
    "assets/ui/bubble-2-0.png",
    "assets/ui/bubble-3-0.png",
    "assets/ui/bubble-4-0.png",
    "assets/img/fox/01.png",
    "assets/img/fox/03.png",
    "assets/img/fox/04.png",
    "assets/img/fox/07.png",
    "assets/img/fox/09.png",
    "assets/img/fox/12.png",
    "assets/img/fox/13.png",
    "assets/img/fox/14.png",
    "assets/img/fox/15.png",
    "assets/img/bunny/02.png",
    "assets/img/bunny/03.png",
    "assets/img/bunny/04.png",
    "assets/img/bunny/05.png",
    "assets/img/bunny/06.png",
    "assets/img/bunny/08.png",
    "assets/img/bunny/19.png",
    "assets/img/bunny/20.png",
    "assets/img/bunny/23.png",
    "assets/img/bunny/24.png",
  ];

  const uniqueImgs = [...new Set(imageUrls)];
  const audioElements = [
    keyboardAudio,
    doorAudio,
    jumpAudio,
    song,
    ...Object.values(sfxPool),
  ];

  preloader.total = uniqueImgs.length + audioElements.length + 1; // +1 for fonts
  const updatePill = () => {
    const txt = $("bg-preload-text");
    const dot = $("preload-dot");
    if (!txt) return;
    if (preloader.loaded >= preloader.total) {
      preloader.done = true;
      txt.textContent = `All assets ready (${preloader.total}/${preloader.total})`;
      if (dot) dot.classList.add("ready");
    } else {
      txt.textContent = `Loading assets in background... ${preloader.loaded}/${preloader.total}`;
    }
  };

  const markOne = () => {
    preloader.loaded = Math.min(preloader.total, preloader.loaded + 1);
    updatePill();
  };

  // 1) Preload all images & store key diorama sprites for the pixel canvas
  uniqueImgs.forEach((url) => {
    const p = new Promise((resolve) => {
      const im = new Image();
      const finish = () => { markOne(); resolve(im); };
      im.onload = finish;
      im.onerror = finish;
      im.src = url;
      if (url.endsWith("shop-bg.png"))     preloader.dioramaImages.shop = im;
      if (url.endsWith("moon.png"))        preloader.dioramaImages.moon = im;
      if (url.endsWith("cloud-cream.png")) preloader.dioramaImages.cloud1 = im;
      if (url.endsWith("cloud-gold.png"))  preloader.dioramaImages.cloud2 = im;
    });
    preloader.promises.push(p);
  });

  // 2) Preload audio metadata/buffers
  audioElements.forEach((a) => {
    const p = new Promise((resolve) => {
      let settled = false;
      const finish = () => {
        if (settled) return;
        settled = true;
        markOne();
        resolve();
      };
      if (a.readyState >= 2) {
        finish();
        return;
      }
      a.addEventListener("canplaythrough", finish, { once: true });
      a.addEventListener("loadeddata", finish, { once: true });
      a.addEventListener("error", finish, { once: true });
      setTimeout(finish, 4500);
      try { a.load(); } catch (e) { finish(); }
    });
    preloader.promises.push(p);
  });

  // 3) Preload custom pixel fonts
  const fontPromise = (document.fonts && document.fonts.ready)
    ? document.fonts.ready.then(markOne).catch(markOne)
    : Promise.resolve().then(markOne);
  preloader.promises.push(fontPromise);
}

/* =====================================================================
   0B) PIN CODE SCREEN ("2211")
   ===================================================================== */
let pinBuffer = "";
let pinLocked = false;

function setupPinScreen() {
  const dots = document.querySelectorAll("#pin-dots .pin-dot");
  const sub = $("pin-subtitle");
  const emote = $("pin-emote");
  const card = $("pin-card");

  const watchEmotes = [
    "assets/img/fox/01.png",
    "assets/img/bunny/20.png",
    "assets/img/fox/13.png",
    "assets/img/bunny/03.png",
  ];

  const renderDots = (state = "") => {
    dots.forEach((d, idx) => {
      d.className = "pin-dot";
      if (idx < pinBuffer.length) d.classList.add("filled");
      if (state === "success") d.classList.add("success");
    });
  };

  const handleKey = async (key) => {
    if (pinLocked) return;
    unlockAudio();

    if (key === "CLR") {
      pinBuffer = "";
      beep(300, 0.04, "square", 0.035);
      emote.src = "assets/img/fox/01.png";
      renderDots();
      return;
    }
    if (key === "DEL") {
      pinBuffer = pinBuffer.slice(0, -1);
      beep(360, 0.035, "square", 0.035);
      renderDots();
      return;
    }
    if (!/^\d$/.test(key) || pinBuffer.length >= 4) return;

    pinBuffer += key;
    beep(520 + pinBuffer.length * 90, 0.04, "square", 0.04);
    emote.src = watchEmotes[(pinBuffer.length - 1) % watchEmotes.length];
    renderDots();

    if (pinBuffer.length === 4) {
      pinLocked = true;
      if (pinBuffer === CONFIG.pinCode) {
        // Correct PIN!
        renderDots("success");
        sub.textContent = "PIN Accepted! Welcome Lütfoş";
        sub.className = "pin-subtitle ok";
        emote.src = "assets/img/fox/14.png";
        beep(660, 0.07, "triangle", 0.05);
        setTimeout(() => beep(880, 0.11, "triangle", 0.05), 85);

        await sleep(550);
        await runPixelLoadingScreen();
      } else {
        // Wrong PIN
        sub.textContent = "Wrong PIN! Try again";
        sub.className = "pin-subtitle error";
        emote.src = "assets/img/bunny/06.png";
        card.classList.remove("shake");
        void card.offsetWidth;
        card.classList.add("shake");
        beep(180, 0.14, "sawtooth", 0.05);

        await sleep(600);
        pinBuffer = "";
        renderDots();
        pinLocked = false;
      }
    }
  };

  document.querySelectorAll(".pin-key").forEach((btn) => {
    btn.addEventListener("click", () => handleKey(btn.dataset.key));
  });

  window.addEventListener("keydown", (e) => {
    if (!$("pin-screen").classList.contains("active")) return;
    if (e.key >= "0" && e.key <= "9") handleKey(e.key);
    else if (e.key === "Backspace") handleKey("DEL");
    else if (e.key === "Escape" || e.key === "Delete") handleKey("CLR");
  });
}

/* =====================================================================
   0C) DETAILED ANIMATED PIXEL-ART LOADING SCREEN
   ===================================================================== */
async function runPixelLoadingScreen() {
  showScreen("loading-screen");

  const arch = $("sky-arch");
  const foxEl = $("loader-fox");
  const bubEl = $("loader-bubble");
  const fillEl = $("loader-bar-fill");
  const runnerEl = $("loader-runner-icon");
  const stageEl = $("loader-stage-text");
  const pctEl = $("loader-percent");
  const canvas = $("loader-canvas");
  const ctx = canvas.getContext("2d");

  const bubbles = [
    "assets/ui/bubble-0-0.png",
    "assets/ui/bubble-2-0.png",
    "assets/ui/bubble-3-0.png",
    "assets/ui/bubble-4-0.png",
  ];
  const stageLabels = [
    "Loading pixel art sprites...",
    "Tuning sound effects & music...",
    "Warming up fox paws...",
    "Preparing Lütfoş's surprises...",
    "Ready!"
  ];

  // 1) Animate the 40-frame Day & Night Sky Arch + Running Fox Sprite
  let skyFrame = 0;
  let foxFrame = 0;
  const spriteTimer = setInterval(() => {
    const sc = skyFrame % 10;
    const sr = Math.floor(skyFrame / 10) % 4;
    arch.style.backgroundPosition = `${-sc * 192}px ${-sr * 112}px`;
    skyFrame = (skyFrame + 1) % 40;

    // Row 2 of fox-sprites.png = 8-frame run cycle (scaled 3x -> 96px cells)
    const fc = foxFrame % 8;
    foxEl.style.backgroundPosition = `${-fc * 96}px ${-2 * 96}px`;
    foxFrame++;

    if (foxFrame % 10 === 0) {
      bubEl.src = bubbles[(foxFrame / 10) % bubbles.length];
    }
  }, 85);

  // 2) Live 60fps Pixel-Art Canvas Diorama (stars, moon, parallax clouds, pixel shop street, dust & hearts)
  const stars = Array.from({ length: 28 }, () => ({
    x: Math.floor(Math.random() * 320),
    y: Math.floor(Math.random() * 75),
    phase: Math.random() * Math.PI * 2,
    size: Math.random() < 0.3 ? 2 : 1,
  }));
  const dust = [];
  const hearts = Array.from({ length: 6 }, (_, i) => ({
    x: 60 + i * 52,
    y: 78 + (i % 3) * 10,
    phase: i * 1.1,
  }));

  let animRunning = true;
  let scrollX = 0;
  let tick = 0;

  function drawPixelHeart(px, py) {
    const pattern = [
      ".XX.XX.",
      "XXXXXXX",
      "XXXXXXX",
      ".XXXXX.",
      "..XXX..",
      "...X..."
    ];
    ctx.fillStyle = "#ff5c8a";
    for (let r = 0; r < pattern.length; r++) {
      for (let c = 0; c < pattern[r].length; c++) {
        if (pattern[r][c] === "X") ctx.fillRect(Math.round(px + c), Math.round(py + r), 1, 1);
      }
    }
  }

  function renderDiorama() {
    if (!animRunning) return;
    tick++;
    scrollX = (scrollX + 1.4) % 320;

    // Twilight pixel sky bands
    const bands = ["#16142b", "#211d3a", "#33264a", "#4d3156", "#73425c", "#a35c63", "#d4846a"];
    const bh = Math.ceil(118 / bands.length);
    bands.forEach((col, idx) => {
      ctx.fillStyle = col;
      ctx.fillRect(0, idx * bh, 320, bh);
    });

    // Twinkling pixel stars
    stars.forEach((st) => {
      const blinkOn = Math.sin(tick * 0.08 + st.phase) > -0.2;
      if (blinkOn) {
        ctx.fillStyle = st.size === 2 ? "#fff6cc" : "#ffffff";
        ctx.fillRect(st.x, st.y, st.size, st.size);
      }
    });

    // Pixel crescent moon from Paper UI System
    const { moon, cloud1, cloud2, shop } = preloader.dioramaImages;
    if (moon && moon.complete && moon.naturalWidth) {
      ctx.drawImage(moon, 232, 6, 64, 38);
    }

    // Parallax drifting pixel clouds
    if (cloud1 && cloud1.complete && cloud1.naturalWidth) {
      const cx1 = 320 - ((tick * 0.35) % 400);
      ctx.drawImage(cloud1, Math.round(cx1), 22, 80, 48);
    }
    if (cloud2 && cloud2.complete && cloud2.naturalWidth) {
      const cx2 = 320 - ((tick * 0.55 + 190) % 400);
      ctx.drawImage(cloud2, Math.round(cx2), 34, 80, 48);
    }

    // Parallax pixel town/shop silhouette & street
    if (shop && shop.complete && shop.naturalWidth) {
      const sx = -Math.round(scrollX);
      ctx.globalAlpha = 0.88;
      ctx.drawImage(shop, sx, -24, 320, 164);
      ctx.drawImage(shop, sx + 320, -24, 320, 164);
      ctx.globalAlpha = 1;
    }

    // Cobblestone pixel ground strip
    ctx.fillStyle = "#3d2516";
    ctx.fillRect(0, 122, 320, 18);
    ctx.fillStyle = "#cfa97e";
    ctx.fillRect(0, 122, 320, 3);
    for (let gx = -Math.round((scrollX * 2) % 16); gx < 320; gx += 16) {
      ctx.fillStyle = "#8c5a3c";
      ctx.fillRect(gx, 127, 10, 4);
      ctx.fillRect(gx + 6, 133, 10, 4);
    }

    // Spawn & draw pixel dust puffs behind the running fox's paws
    if (tick % 4 === 0) {
      dust.push({ x: 142, y: 118 + (Math.random() * 4 - 2), vx: -2.2 - Math.random(), vy: -0.4 - Math.random() * 0.5, life: 18 });
    }
    for (let i = dust.length - 1; i >= 0; i--) {
      const d = dust[i];
      d.x += d.vx;
      d.y += d.vy;
      d.life--;
      if (d.life <= 0) { dust.splice(i, 1); continue; }
      ctx.fillStyle = d.life > 9 ? "#fff1d0" : "#d3be9a";
      const sz = d.life > 12 ? 3 : 2;
      ctx.fillRect(Math.round(d.x), Math.round(d.y), sz, sz);
    }

    // Floating pixel hearts drifting left toward the fox
    hearts.forEach((h) => {
      h.x -= 1.2;
      if (h.x < -12) h.x = 332;
      const hy = h.y + Math.sin(tick * 0.1 + h.phase) * 5;
      drawPixelHeart(h.x, hy);
    });

    requestAnimationFrame(renderDiorama);
  }
  requestAnimationFrame(renderDiorama);

  // 3) Smoothly advance progress bar while waiting for any remaining assets
  const minDurationMs = 2300;
  const startTime = performance.now();
  let displayedPct = 0;

  while (displayedPct < 100) {
    const elapsed = performance.now() - startTime;
    const timeRatio = Math.min(1, elapsed / minDurationMs);
    const assetRatio = preloader.total > 0 ? (preloader.loaded / preloader.total) : 1;

    // Wait for both real asset loading AND the minimum showcase animation
    const targetPct = Math.floor(Math.min(timeRatio, Math.max(0.15, assetRatio)) * 100);
    displayedPct = Math.max(displayedPct, targetPct);

    // If minimum duration has passed and assets are done (or 4s safety cap), reach 100%
    if (elapsed >= minDurationMs && (preloader.done || elapsed >= 4200)) {
      displayedPct = 100;
    }

    fillEl.style.width = `${displayedPct}%`;
    runnerEl.style.left = `${Math.max(4, Math.min(96, displayedPct))}%`;
    pctEl.textContent = `${displayedPct}%`;

    const stageIdx = Math.min(
      stageLabels.length - 1,
      Math.floor((displayedPct / 100) * (stageLabels.length - 1))
    );
    stageEl.textContent = stageLabels[stageIdx];

    await sleep(35);
  }

  await sleep(320);
  animRunning = false;
  clearInterval(spriteTimer);

  // Launch the hacker boot screen!
  showScreen("boot");
  runBoot();
}

/* =====================================================================
   INIT
   ===================================================================== */
window.addEventListener("DOMContentLoaded", () => {
  startBackgroundPreload();
  setupPinScreen();
  initFloaters();
  setupFoxControls();
  setupPuzzle();
  setupJumpscare();
  setupFinale();
  setupConfetti();

  $("boot-skip").addEventListener("click", finishBoot);
});
