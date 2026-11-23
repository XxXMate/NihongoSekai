(() => {

const katakana = [
  ["ア", "a", "Vokal a.", "アイス", "Es krim"],
  ["イ", "i", "Vokal i.", "イカ", "Cumi-cumi"],
  ["ウ", "u", "Vokal u.", "ウサギ", "Kelinci"],
  ["エ", "e", "Vokal e.", "エビ", "Udang"],
  ["オ", "o", "Vokal o.", "オレンジ", "Jeruk"],

  ["カ", "ka", "Dibaca ka.", "カメラ", "Kamera"],
  ["キ", "ki", "Dibaca ki.", "キス", "Ciuman"],
  ["ク", "ku", "Dibaca ku.", "クラス", "Kelas"],
  ["ケ", "ke", "Dibaca ke.", "ケーキ", "Kue"],
  ["コ", "ko", "Dibaca ko.", "コーヒー", "Kopi"],

  ["サ", "sa", "Dibaca sa.", "サラダ", "Salad"],
  ["シ", "shi", "Dibaca shi.", "シール", "Stiker"],
  ["ス", "su", "Dibaca su.", "スープ", "Sup"],
  ["セ", "se", "Dibaca se.", "セーター", "Sweter"],
  ["ソ", "so", "Dibaca so.", "ソファ", "Sofa"],

  ["タ", "ta", "Dibaca ta.", "タクシー", "Taksi"],
  ["チ", "chi", "Dibaca chi.", "チーズ", "Keju"],
  ["ツ", "tsu", "Dibaca tsu.", "ツアー", "Tur"],
  ["テ", "te", "Dibaca te.", "テレビ", "Televisi"],
  ["ト", "to", "Dibaca to.", "トマト", "Tomat"],

  ["ナ", "na", "Dibaca na.", "ナイフ", "Pisau"],
  ["ニ", "ni", "Dibaca ni.", "ニュース", "Berita"],
  ["ヌ", "nu", "Dibaca nu.", "ヌードル", "Mi"],
  ["ネ", "ne", "Dibaca ne.", "ネクタイ", "Dasi"],
  ["ノ", "no", "Dibaca no.", "ノート", "Buku catatan"],

  ["ハ", "ha", "Dibaca ha.", "ハンバーガー", "Hamburger"],
  ["ヒ", "hi", "Dibaca hi.", "ヒーロー", "Pahlawan"],
  ["フ", "fu", "Dibaca fu.", "フォーク", "Garpu"],
  ["ヘ", "he", "Dibaca he.", "ヘリコプター", "Helikopter"],
  ["ホ", "ho", "Dibaca ho.", "ホテル", "Hotel"],

  ["マ", "ma", "Dibaca ma.", "マスク", "Masker"],
  ["ミ", "mi", "Dibaca mi.", "ミルク", "Susu"],
  ["ム", "mu", "Dibaca mu.", "ムード", "Suasana"],
  ["メ", "me", "Dibaca me.", "メニュー", "Menu"],
  ["モ", "mo", "Dibaca mo.", "モデル", "Model"],

  ["ヤ", "ya", "Dibaca ya.", "ヤード", "Yard"],
  ["ユ", "yu", "Dibaca yu.", "ユーロ", "Euro"],
  ["ヨ", "yo", "Dibaca yo.", "ヨーグルト", "Yoghurt"],

  ["ラ", "ra", "Dibaca ra.", "ラジオ", "Radio"],
  ["リ", "ri", "Dibaca ri.", "リモコン", "Remote control"],
  ["ル", "ru", "Dibaca ru.", "ルール", "Aturan"],
  ["レ", "re", "Dibaca re.", "レモン", "Lemon"],
  ["ロ", "ro", "Dibaca ro.", "ロボット", "Robot"],

  ["ワ", "wa", "Dibaca wa.", "ワイン", "Anggur"],
  ["ヲ", "wo", "Huruf wo, umumnya digunakan sebagai partikel.", "ヲ", "Partikel"],
  ["ン", "n", "Dibaca n.", "パン", "Roti"]
];

const katakanaDakuten = [
  ["ガ", "ga", "Dibaca ga.", "ガス", "Gas"],
  ["ギ", "gi", "Dibaca gi.", "ギター", "Gitar"],
  ["グ", "gu", "Dibaca gu.", "グラス", "Gelas"],
  ["ゲ", "ge", "Dibaca ge.", "ゲーム", "Permainan"],
  ["ゴ", "go", "Dibaca go.", "ゴルフ", "Golf"],

  ["ザ", "za", "Dibaca za.", "ザル", "Saringan"],
  ["ジ", "ji", "Dibaca ji.", "ジュース", "Jus"],
  ["ズ", "zu", "Dibaca zu.", "チーズ", "Keju"],
  ["ゼ", "ze", "Dibaca ze.", "ゼロ", "Nol"],
  ["ゾ", "zo", "Dibaca zo.", "ゾーン", "Zona"],

  ["ダ", "da", "Dibaca da.", "ダンス", "Tarian"],
  ["ヂ", "ji", "Bunyi ji, jarang digunakan.", "ヂ", "Huruf langka"],
  ["ヅ", "zu", "Bunyi zu, jarang digunakan.", "ヅ", "Huruf langka"],
  ["デ", "de", "Dibaca de.", "デザイン", "Desain"],
  ["ド", "do", "Dibaca do.", "ドア", "Pintu"],

  ["バ", "ba", "Dibaca ba.", "バナナ", "Pisang"],
  ["ビ", "bi", "Dibaca bi.", "ビール", "Bir"],
  ["ブ", "bu", "Dibaca bu.", "ブーツ", "Sepatu bot"],
  ["ベ", "be", "Dibaca be.", "ベッド", "Tempat tidur"],
  ["ボ", "bo", "Dibaca bo.", "ボール", "Bola"]
];

const katakanaHandakuten = [
  ["パ", "pa", "Dibaca pa.", "パン", "Roti"],
  ["ピ", "pi", "Dibaca pi.", "ピアノ", "Piano"],
  ["プ", "pu", "Dibaca pu.", "プール", "Kolam renang"],
  ["ペ", "pe", "Dibaca pe.", "ペン", "Pulpen"],
  ["ポ", "po", "Dibaca po.", "ポスト", "Kotak surat"]
];

const katakanaYouon = [
  ["キャ", "kya", "Gabungan ki dan ya kecil.", "キャベツ", "Kubis"],
  ["キュ", "kyu", "Gabungan ki dan yu kecil.", "キュウリ", "Mentimun"],
  ["キョ", "kyo", "Gabungan ki dan yo kecil.", "キョウト", "Kyoto"],

  ["シャ", "sha", "Gabungan shi dan ya kecil.", "シャツ", "Kemeja"],
  ["シュ", "shu", "Gabungan shi dan yu kecil.", "シューズ", "Sepatu"],
  ["ショ", "sho", "Gabungan shi dan yo kecil.", "ショッピング", "Belanja"],

  ["チャ", "cha", "Gabungan chi dan ya kecil.", "チャット", "Obrolan"],
  ["チュ", "chu", "Gabungan chi dan yu kecil.", "チューブ", "Tabung"],
  ["チョ", "cho", "Gabungan chi dan yo kecil.", "チョコ", "Cokelat"],

  ["ニャ", "nya", "Gabungan ni dan ya kecil.", "ニャー", "Suara kucing"],
  ["ニュ", "nyu", "Gabungan ni dan yu kecil.", "ニュース", "Berita"],
  ["ニョ", "nyo", "Gabungan ni dan yo kecil.", "ニョロニョロ", "Meliuk-liuk"],

  ["ヒャ", "hya", "Gabungan hi dan ya kecil.", "ヒャク", "Seratus"],
  ["ヒュ", "hyu", "Gabungan hi dan yu kecil.", "ヒューマン", "Manusia"],
  ["ヒョ", "hyo", "Gabungan hi dan yo kecil.", "ヒョウ", "Macan tutul"],

  ["ミャ", "mya", "Gabungan mi dan ya kecil.", "ミャンマー", "Myanmar"],
  ["ミュ", "myu", "Gabungan mi dan yu kecil.", "ミュージック", "Musik"],
  ["ミョ", "myo", "Gabungan mi dan yo kecil.", "ミョウガ", "Myoga"],

  ["リャ", "rya", "Gabungan ri dan ya kecil.", "リャマ", "Llama"],
  ["リュ", "ryu", "Gabungan ri dan yu kecil.", "リュック", "Ransel"],
  ["リョ", "ryo", "Gabungan ri dan yo kecil.", "リョコウ", "Perjalanan"],

  ["ギャ", "gya", "Gabungan gi dan ya kecil.", "ギャグ", "Lelucon"],
  ["ギュ", "gyu", "Gabungan gi dan yu kecil.", "ギュウニュウ", "Susu sapi"],
  ["ギョ", "gyo", "Gabungan gi dan yo kecil.", "ギョウザ", "Gyoza"],

  ["ジャ", "ja", "Gabungan ji dan ya kecil.", "ジャム", "Selai"],
  ["ジュ", "ju", "Gabungan ji dan yu kecil.", "ジュース", "Jus"],
  ["ジョ", "jo", "Gabungan ji dan yo kecil.", "ジョギング", "Joging"],

  ["ビャ", "bya", "Gabungan bi dan ya kecil.", "ビャクダン", "Cendana"],
  ["ビュ", "byu", "Gabungan bi dan yu kecil.", "ビュー", "Pemandangan"],
  ["ビョ", "byo", "Gabungan bi dan yo kecil.", "ビョウイン", "Rumah sakit"],

  ["ピャ", "pya", "Gabungan pi dan ya kecil.", "ピャッ", "Bunyi ekspresif"],
  ["ピュ", "pyu", "Gabungan pi dan yu kecil.", "ピュア", "Murni"],
  ["ピョ", "pyo", "Gabungan pi dan yo kecil.", "ピョン", "Melompat"]
];

const katakanaCategories = {
  basic: katakana,
  dakuten: katakanaDakuten,
  handakuten: katakanaHandakuten,
  youon: katakanaYouon
};

const kanaTabs = document.querySelectorAll(".kana-tab");
const kanaGrid = document.getElementById("kanaGrid");
const kanaDetail = document.getElementById("kanaDetail");
const detailKana = document.getElementById("detailKana");
const detailRomaji = document.getElementById("detailRomaji");
const detailDescription = document.getElementById("detailDescription");
const detailWord = document.getElementById("detailWord");
const detailMeaning = document.getElementById("detailMeaning");

let activeCategory = null;

function showKatakanaDetail(item) {

  if (
    !kanaDetail ||
    !detailKana ||
    !detailRomaji ||
    !detailDescription ||
    !detailWord ||
    !detailMeaning
  ) return;

  detailKana.textContent = item[0];
  detailRomaji.textContent = item[1];
  detailDescription.textContent = item[2];
  detailWord.textContent = item[3];
  detailMeaning.textContent = item[4];

  kanaDetail.hidden = false;
  kanaDetail.classList.add("active");

  kanaDetail.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
}

function renderKatakana(category) {

  if (!kanaGrid) return;

  const selectedKana = katakanaCategories[category];

  if (!selectedKana) return;

  kanaGrid.innerHTML = "";

  kanaGrid.classList.toggle("youon-layout", category === "youon");

  selectedKana.forEach((item) => {
    const card = document.createElement("button");

    card.className = "kana-card";
    card.type = "button";

    card.innerHTML = `
      <span class="kana-character">${item[0]}</span>
      <span class="kana-romaji">${item[1]}</span>
    `;

    card.addEventListener("click", () => {
      showKatakanaDetail(item);
    });

    kanaGrid.appendChild(card);
  });

  kanaGrid.classList.add("active");
}

activeCategory = null;

if (kanaGrid) {
  kanaGrid.innerHTML = "";
  kanaGrid.classList.remove("active", "youon-layout");
}

if (kanaDetail) {
  kanaDetail.classList.remove("active");
  kanaDetail.hidden = true;
}

kanaTabs.forEach((tab) => {
  tab.classList.remove("active");
  tab.setAttribute("aria-pressed", "false");
});

kanaTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const category = tab.dataset.category;

    if (!katakanaCategories[category]) return;

  if (activeCategory === category) {
  activeCategory = null;

  if (kanaGrid) {
    kanaGrid.innerHTML = "";
    kanaGrid.classList.remove("active", "youon-layout");
  }

  if (kanaDetail) {
    kanaDetail.classList.remove("active");
    kanaDetail.hidden = true;
  }

  tab.classList.remove("active");
  tab.setAttribute("aria-pressed", "false");
  return;
}

    activeCategory = category;

    kanaTabs.forEach((otherTab) => {
      otherTab.classList.remove("active");
      otherTab.setAttribute("aria-pressed", "false");
    });

    tab.classList.add("active");
    tab.setAttribute("aria-pressed", "true");

    // KATAKANA BARU — TUTUP DETAIL HURUF
    if (kanaDetail) {
      kanaDetail.classList.remove("active");
    }

    renderKatakana(category);
  });
});

const startRelaxedKatakana =
  document.getElementById("startRelaxedKatakana");

const startChallengeKatakana =
  document.getElementById("startChallengeKatakana");

if (startRelaxedKatakana) {
  startRelaxedKatakana.addEventListener("click", function () {
    window.location.href = "quiz-katakana.html?mode=relaxed";
  });
}
  
if (startChallengeKatakana) {
  startChallengeKatakana.addEventListener("click", function () {
    window.location.href = "quiz-katakana.html?mode=challenge";
  });
}
  
})();
