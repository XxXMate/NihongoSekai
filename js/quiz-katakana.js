
(() => {

const katakanaQuizData = [
  // HURUF DASAR (46)
  ["ア", "a"], ["イ", "i"], ["ウ", "u"], ["エ", "e"], ["オ", "o"],
  ["カ", "ka"], ["キ", "ki"], ["ク", "ku"], ["ケ", "ke"], ["コ", "ko"],
  ["サ", "sa"], ["シ", "shi"], ["ス", "su"], ["セ", "se"], ["ソ", "so"],
  ["タ", "ta"], ["チ", "chi"], ["ツ", "tsu"], ["テ", "te"], ["ト", "to"],
  ["ナ", "na"], ["ニ", "ni"], ["ヌ", "nu"], ["ネ", "ne"], ["ノ", "no"],
  ["ハ", "ha"], ["ヒ", "hi"], ["フ", "fu"], ["ヘ", "he"], ["ホ", "ho"],
  ["マ", "ma"], ["ミ", "mi"], ["ム", "mu"], ["メ", "me"], ["モ", "mo"],
  ["ヤ", "ya"], ["ユ", "yu"], ["ヨ", "yo"],
  ["ラ", "ra"], ["リ", "ri"], ["ル", "ru"], ["レ", "re"], ["ロ", "ro"],
  ["ワ", "wa"], ["ヲ", "wo"], ["ン", "n"],

  // DAKUTEN (20)
  ["ガ", "ga"], ["ギ", "gi"], ["グ", "gu"], ["ゲ", "ge"], ["ゴ", "go"],
  ["ザ", "za"], ["ジ", "ji"], ["ズ", "zu"], ["ゼ", "ze"], ["ゾ", "zo"],
  ["ダ", "da"], ["ヂ", "ji"], ["ヅ", "zu"], ["デ", "de"], ["ド", "do"],
  ["バ", "ba"], ["ビ", "bi"], ["ブ", "bu"], ["ベ", "be"], ["ボ", "bo"],

  // HANDAKUTEN (5)
  ["パ", "pa"], ["ピ", "pi"], ["プ", "pu"], ["ペ", "pe"], ["ポ", "po"],

  // YOUON (33)
  ["キャ", "kya"], ["キュ", "kyu"], ["キョ", "kyo"],
  ["シャ", "sha"], ["シュ", "shu"], ["ショ", "sho"],
  ["チャ", "cha"], ["チュ", "chu"], ["チョ", "cho"],
  ["ニャ", "nya"], ["ニュ", "nyu"], ["ニョ", "nyo"],
  ["ヒャ", "hya"], ["ヒュ", "hyu"], ["ヒョ", "hyo"],
  ["ミャ", "mya"], ["ミュ", "myu"], ["ミョ", "myo"],
  ["リャ", "rya"], ["リュ", "ryu"], ["リョ", "ryo"],
  ["ギャ", "gya"], ["ギュ", "gyu"], ["ギョ", "gyo"],
  ["ジャ", "ja"], ["ジュ", "ju"], ["ジョ", "jo"],
  ["ビャ", "bya"], ["ビュ", "byu"], ["ビョ", "byo"],
  ["ピャ", "pya"], ["ピュ", "pyu"], ["ピョ", "pyo"]
];

const katakanaQuizSetup = document.getElementById("katakanaQuizSetup");
const katakanaQuizContent = document.getElementById("katakanaQuizContent");
const katakanaQuestionCountOptions = document.getElementById("katakanaQuestionCountOptions");
const katakanaQuizTitle = document.getElementById("katakanaQuizTitle");
const katakanaQuizModeDescription = document.getElementById("katakanaQuizModeDescription");

if (
  !katakanaQuizSetup ||
  !katakanaQuizContent ||
  !katakanaQuestionCountOptions ||
  !katakanaQuizTitle ||
  !katakanaQuizModeDescription
) {
  return;
}

const katakanaQuizUrlParams = new URLSearchParams(window.location.search);

const katakanaQuizMode = katakanaQuizUrlParams.get("mode") === "challenge"
  ? "challenge"
  : "relaxed";

const katakanaQuizModeName = katakanaQuizMode === "challenge"
  ? "Mode Tantangan"
  : "Mode Santai";

katakanaQuizTitle.textContent = katakanaQuizModeName;

katakanaQuizModeDescription.textContent =
  katakanaQuizMode === "challenge"
    ? "Jawab setiap pertanyaan dalam waktu 5 detik!"
    : "Kerjakan latihan dengan santai tanpa batas waktu.";

let katakanaQuizQuestions = [];
let katakanaQuizIndex = 0;
let katakanaQuizScore = 0;
let katakanaSelectedQuizCount = 10;
let katakanaQuizAnswered = false;
let katakanaQuizTimerInterval = null;
let katakanaQuizTimeLeft = 5;

function shuffleKatakanaQuiz(items) {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function stopKatakanaQuizTimer() {
  if (katakanaQuizTimerInterval) {
    clearInterval(katakanaQuizTimerInterval);
    katakanaQuizTimerInterval = null;
  }
}

function beginKatakanaQuiz(count) {
  stopKatakanaQuizTimer();

  katakanaSelectedQuizCount = count;
  katakanaQuizQuestions = shuffleKatakanaQuiz(katakanaQuizData).slice(0, count);

  katakanaQuizIndex = 0;
  katakanaQuizScore = 0;

  katakanaQuizSetup.hidden = true;
  katakanaQuizContent.hidden = false;

  renderKatakanaQuizQuestion();
}

function renderKatakanaQuizQuestion() {
  katakanaQuizAnswered = false;
  stopKatakanaQuizTimer();

  const [kana, correct] = katakanaQuizQuestions[katakanaQuizIndex];

  const wrongChoices = [
    ...new Set(katakanaQuizData.map(item => item[1]))
  ].filter(romaji => romaji !== correct);

  const choices = shuffleKatakanaQuiz([
    correct,
    ...shuffleKatakanaQuiz(wrongChoices).slice(0, 3)
  ]);

  katakanaQuizContent.innerHTML = `
    <div class="quiz-question">

      <div class="quiz-progress">
        Soal ${katakanaQuizIndex + 1} dari ${katakanaQuizQuestions.length}
        · Skor ${katakanaQuizScore}
      </div>

      ${katakanaQuizMode === "challenge" ? `
        <div class="quiz-timer">
          Waktu: <strong id="katakanaQuizTimer">5</strong> detik
        </div>
      ` : ""}

      <div class="quiz-kana">${kana}</div>

      <p class="quiz-prompt">
        Apa romaji dari huruf ini?
      </p>

      <div class="quiz-options"></div>

      <p class="quiz-feedback" aria-live="polite"></p>

      <button class="quiz-next" type="button" hidden>
        Soal Berikutnya →
      </button>

    </div>
  `;

  const options = katakanaQuizContent.querySelector(".quiz-options");

  choices.forEach(choice => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "quiz-option";
    button.textContent = choice;

    button.addEventListener("click", () => {
      answerKatakanaQuiz(button, choice, correct);
    });

    options.appendChild(button);
  });

  katakanaQuizContent.querySelector(".quiz-next")
    .addEventListener("click", () => {
      katakanaQuizIndex++;

      if (katakanaQuizIndex < katakanaQuizQuestions.length) {
        renderKatakanaQuizQuestion();
      } else {
        showKatakanaQuizResult();
      }
    });

  // Timer Mode Tantangan
  if (katakanaQuizMode === "challenge") {
    startKatakanaQuizTimer(correct);
  }
}

function startKatakanaQuizTimer(correct) {
  katakanaQuizTimeLeft = 5;

  const timerDisplay = document.getElementById("katakanaQuizTimer");

  katakanaQuizTimerInterval = setInterval(() => {
    katakanaQuizTimeLeft--;

    if (timerDisplay) {
      timerDisplay.textContent = katakanaQuizTimeLeft;
    }

    if (katakanaQuizTimeLeft <= 0) {
      stopKatakanaQuizTimer();

      const correctButton = [
        ...katakanaQuizContent.querySelectorAll(".quiz-option")
      ].find(button => button.textContent === correct);

      answerKatakanaQuiz(correctButton, null, correct, true);
    }
  }, 1000);
}

function answerKatakanaQuiz(button, choice, correct, timedOut = false) {
  if (katakanaQuizAnswered) return;

  katakanaQuizAnswered = true;
  stopKatakanaQuizTimer();

  const buttons = katakanaQuizContent.querySelectorAll(".quiz-option");

  buttons.forEach(option => {
    option.disabled = true;

    if (option.textContent === correct) {
      option.classList.add("correct");
    }
  });

  const feedback = katakanaQuizContent.querySelector(".quiz-feedback");

  if (timedOut) {
    feedback.textContent =
      `Waktu habis! Jawaban yang benar: ${correct}.`;
  } else if (choice === correct) {
    katakanaQuizScore++;

    feedback.textContent =
      "Benar! Bagus, teruskan! 🌸";
  } else {
    if (button) {
      button.classList.add("wrong");
    }

    feedback.textContent =
      `Belum tepat. Jawaban yang benar: ${correct}.`;
  }

  const nextButton = katakanaQuizContent.querySelector(".quiz-next");

  nextButton.hidden = false;

  nextButton.textContent =
    katakanaQuizIndex === katakanaQuizQuestions.length - 1
      ? "Lihat Hasil →"
      : "Soal Berikutnya →";
}

function showKatakanaQuizResult() {
  stopKatakanaQuizTimer();

  const total = katakanaQuizQuestions.length;
  const percentage = Math.round((katakanaQuizScore / total) * 100);

  let message;

  if (katakanaQuizScore === total) {
    message = "すばらしい！ Sempurna!";
  } else if (percentage >= 75) {
    message = "よくできました！ Kerja bagus!";
  } else if (percentage >= 50) {
    message = "いいですね！ Terus tingkatkan!";
  } else {
    message = "Terus berlatih, kamu pasti bisa!";
  }

  katakanaQuizContent.innerHTML = `
    <div class="quiz-result">

      <div class="quiz-result-score">
        ${katakanaQuizScore} / ${total}
      </div>

      <strong>${message}</strong>

      <p>Nilai kamu: ${percentage}%</p>

      <p>
        Kamu sudah menyelesaikan ${total} soal Katakana.
      </p>

      <button type="button" id="katakanaRetryQuiz">
        Coba Lagi ↻
      </button>

      <button type="button" id="katakanaChangeQuizCount">
        Pilih Jumlah Soal
      </button>

    </div>
  `;

  document.getElementById("katakanaRetryQuiz")
    .addEventListener("click", () => {
      beginKatakanaQuiz(katakanaSelectedQuizCount);
    });

  document.getElementById("katakanaChangeQuizCount")
    .addEventListener("click", () => {
      katakanaQuizContent.hidden = true;
      katakanaQuizSetup.hidden = false;
    });
}

katakanaQuestionCountOptions.querySelectorAll("[data-count]")
  .forEach(button => {
    button.addEventListener("click", () => {
      const count = Number(button.dataset.count);

      beginKatakanaQuiz(count);
    });
  });

window.addEventListener("pagehide", () => {
  stopKatakanaQuizTimer();
});

})();
