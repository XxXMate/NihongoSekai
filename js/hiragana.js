(function () {
  
const hinaBasic = [
  ["あ","a","Bunyinya seperti 'a' pada kata anak.","あさ · asa","pagi"],
  ["い","i","Bunyinya seperti 'i' pada kata ikan.","いぬ · inu","anjing"],
  ["う","u","Bunyinya seperti 'u' pada kata ular.","うみ · umi","laut"],
  ["え","e","Bunyinya seperti 'e' pada kata enak.","えき · eki","stasiun"],
  ["お","o","Bunyinya seperti 'o' pada kata obat.","おに · oni","raksasa/oni"],
  ["か","ka","Gabungan bunyi k dan a.","かさ · kasa","payung"],
  ["き","ki","Gabungan bunyi k dan i.","き · ki","pohon"],
  ["く","ku","Gabungan bunyi k dan u.","くつ · kutsu","sepatu"],
  ["け","ke","Gabungan bunyi k dan e.","けさ · kesa","pagi ini"],
  ["こ","ko","Gabungan bunyi k dan o.","こえ · koe","suara"],
  ["さ","sa","Gabungan bunyi s dan a.","さかな · sakana","ikan"],
  ["し","shi","Dibaca 'shi', bukan 'si'.","しま · shima","pulau"],
  ["す","su","Gabungan bunyi s dan u.","すし · sushi","sushi"],
  ["せ","se","Gabungan bunyi s dan e.","せかい · sekai","dunia"],
  ["そ","so","Gabungan bunyi s dan o.","そら · sora","langit"],
  ["た","ta","Gabungan bunyi t dan a.","たこ · tako","gurita"],
  ["ち","chi","Dibaca 'chi', bukan 'ti'.","ちず · chizu","peta"],
  ["つ","tsu","Bunyinya 'tsu', seperti akhir kata 'cats' dalam bahasa Inggris.","つき · tsuki","bulan"],
  ["て","te","Gabungan bunyi t dan e.","て · te","tangan"],
  ["と","to","Gabungan bunyi t dan o.","とり · tori","burung"],
  ["な","na","Gabungan bunyi n dan a.","なつ · natsu","musim panas"],
  ["に","ni","Gabungan bunyi n dan i.","にく · niku","daging"],
  ["ぬ","nu","Gabungan bunyi n dan u.","いぬ · inu","anjing"],
  ["ね","ne","Gabungan bunyi n dan e.","ねこ · neko","kucing"],
  ["の","no","Gabungan bunyi n dan o.","のみもの · nomimono","minuman"],
  ["は","ha","Gabungan bunyi h dan a. Sebagai partikel, は dibaca 'wa'.","はな · hana","bunga"],
  ["ひ","hi","Gabungan bunyi h dan i.","ひ · hi","api/matahari"],
  ["ふ","fu","Bunyinya di antara 'fu' dan 'hu'.","ふね · fune","kapal"],
  ["へ","he","Gabungan bunyi h dan e. Sebagai partikel, へ dibaca 'e'.","へや · heya","kamar"],
  ["ほ","ho","Gabungan bunyi h dan o.","ほし · hoshi","bintang"],
  ["ま","ma","Gabungan bunyi m dan a.","まち · machi","kota"],
  ["み","mi","Gabungan bunyi m dan i.","みず · mizu","air"],
  ["む","mu","Gabungan bunyi m dan u.","むし · mushi","serangga"],
  ["め","me","Gabungan bunyi m dan e.","め · me","mata"],
  ["も","mo","Gabungan bunyi m dan o.","もも · momo","buah persik"],
  ["や","ya","Gabungan bunyi y dan a.","やま · yama","gunung"],
  ["ゆ","yu","Gabungan bunyi y dan u.","ゆき · yuki","salju"],
  ["よ","yo","Gabungan bunyi y dan o.","よる · yoru","malam"],
  ["ら","ra","Bunyi r Jepang ringan, dengan sentuhan lidah singkat.","さくら · sakura","bunga sakura"],
  ["り","ri","Bunyi r Jepang ringan, dengan sentuhan lidah singkat.","とり · tori","burung"],
  ["る","ru","Bunyi r Jepang ringan, dengan sentuhan lidah singkat.","はる · haru","musim semi"],
  ["れ","re","Bunyi r Jepang ringan, dengan sentuhan lidah singkat.","れい · rei","contoh bunyi/nama Rei"],
  ["ろ","ro","Bunyi r Jepang ringan, dengan sentuhan lidah singkat.","くろ · kuro","hitam"],
  ["わ","wa","Gabungan bunyi w dan a.","わたし · watashi","saya"],
  ["を","wo","Umumnya dibaca 'o' saat menjadi partikel objek.","みずを · mizu o","air (sebagai objek)"],
  ["ん","n","Bunyi nasal 'n'. Dapat terdengar sedikit berbeda sesuai bunyi setelahnya.","ほん · hon","buku"]
];


const hinaDakuten = [
  ["が","ga","Bunyi g dan a.","がっこう · gakkou","sekolah"],
  ["ぎ","gi","Bunyi g dan i.","ぎんこう · ginkou","bank"],
  ["ぐ","gu","Bunyi g dan u.","ぐんて · gunte","sarung tangan"],
  ["げ","ge","Bunyi g dan e.","げんき · genki","sehat/semangat"],
  ["ご","go","Bunyi g dan o.","ごはん · gohan","nasi/makanan"],
  ["ざ","za","Bunyi z dan a.","ざっし · zasshi","majalah"],
  ["じ","ji","Bunyi ji.","じかん · jikan","waktu"],
  ["ず","zu","Bunyi z dan u.","みず · mizu","air"],
  ["ぜ","ze","Bunyi z dan e.","ぜんぶ · zenbu","semua"],
  ["ぞ","zo","Bunyi z dan o.","ぞう · zou","gajah"],
  ["だ","da","Bunyi d dan a.","だいがく · daigaku","universitas"],
  ["ぢ","ji","Bunyi ji, jarang digunakan.","はなぢ · hanaji","mimisan"],
  ["づ","zu","Bunyi zu, jarang digunakan.","つづく · tsuzuku","berlanjut"],
  ["で","de","Bunyi d dan e.","でんわ · denwa","telepon"],
  ["ど","do","Bunyi d dan o.","どあ · doa","pintu"],
  ["ば","ba","Bunyi b dan a.","ばら · bara","mawar"],
  ["び","bi","Bunyi b dan i.","びょういん · byouin","rumah sakit"],
  ["ぶ","bu","Bunyi b dan u.","ぶた · buta","babi"],
  ["べ","be","Bunyi b dan e.","べんきょう · benkyou","belajar"],
  ["ぼ","bo","Bunyi b dan o.","ぼうし · boushi","topi"]
];

const hinaHandakuten = [
  ["ぱ","pa","Bunyi p dan a.","ぱん · pan","roti"],
  ["ぴ","pi","Bunyi p dan i.","ぴざ · piza","pizza"],
  ["ぷ","pu","Bunyi p dan u.","ぷりん · purin","puding"],
  ["ぺ","pe","Bunyi p dan e.","ぺん · pen","pulpen"],
  ["ぽ","po","Bunyi p dan o.","ぽすと · posuto","kotak pos"]
];

const hinaYouon = [
  ["きゃ","kya","Gabungan き dan ゃ kecil.","きゃく · kyaku","tamu/pelanggan"],
  ["きゅ","kyu","Gabungan き dan ゅ kecil.","きゅうり · kyuuri","mentimun"],
  ["きょ","kyo","Gabungan き dan ょ kecil.","きょう · kyou","hari ini"],
  ["しゃ","sha","Gabungan し dan ゃ kecil.","しゃしん · shashin","foto"],
  ["しゅ","shu","Gabungan し dan ゅ kecil.","しゅみ · shumi","hobi"],
  ["しょ","sho","Gabungan し dan ょ kecil.","しょくどう · shokudou","kantin"],
  ["ちゃ","cha","Gabungan ち dan ゃ kecil.","ちゃ · cha","teh"],
  ["ちゅ","chu","Gabungan ち dan ゅ kecil.","ちゅうい · chuui","perhatian"],
  ["ちょ","cho","Gabungan ち dan ょ kecil.","ちょっと · chotto","sebentar"],
  ["にゃ","nya","Gabungan に dan ゃ kecil.","にゃんこ · nyanko","kucing"],
  ["にゅ","nyu","Gabungan に dan ゅ kecil.","にゅうがく · nyuugaku","masuk sekolah"],
  ["にょ","nyo","Gabungan に dan ょ kecil.","—","bunyi gabungan"],
  ["ひゃ","hya","Gabungan ひ dan ゃ kecil.","ひゃく · hyaku","seratus"],
  ["ひゅ","hyu","Gabungan ひ dan ゅ kecil.","—","bunyi gabungan"],
  ["ひょ","hyo","Gabungan ひ dan ょ kecil.","ひょう · hyou","tabel"],
  ["みゃ","mya","Gabungan み dan ゃ kecil.","みゃく · myaku","denyut nadi"],
  ["みゅ","myu","Gabungan み dan ゅ kecil.","—","bunyi gabungan"],
  ["みょ","myo","Gabungan み dan ょ kecil.","みょうじ · myouji","nama keluarga"],
  ["りゃ","rya","Gabungan り dan ゃ kecil.","りゃく · ryaku","singkatan"],
  ["りゅ","ryu","Gabungan り dan ゅ kecil.","りゅう · ryuu","naga"],
  ["りょ","ryo","Gabungan り dan ょ kecil.","りょうり · ryouri","masakan"],
  ["ぎゃ","gya","Gabungan ぎ dan ゃ kecil.","ぎゃく · gyaku","kebalikan"],
  ["ぎゅ","gyu","Gabungan ぎ dan ゅ kecil.","ぎゅうにゅう · gyuunyuu","susu"],
  ["ぎょ","gyo","Gabungan ぎ dan ょ kecil.","ぎょらい · gyorai","torpedo"],
  ["じゃ","ja","Gabungan じ dan ゃ kecil.","じゃがいも · jagaimo","kentang"],
  ["じゅ","ju","Gabungan じ dan ゅ kecil.","じゅぎょう · jugyou","pelajaran"],
  ["じょ","jo","Gabungan じ dan ょ kecil.","じょうず · jouzu","mahir"],
  ["びゃ","bya","Gabungan び dan ゃ kecil.","びゃくや · byakuya","malam putih"],
  ["びゅ","byu","Gabungan び dan ゅ kecil.","びゅうびゅう · byuubyuu","suara angin kencang"],
  ["びょ","byo","Gabungan び dan ょ kecil.","びょういん · byouin","rumah sakit"],
  ["ぴゃ","pya","Gabungan ぴ dan ゃ kecil.","—","bunyi gabungan"],
  ["ぴゅ","pyu","Gabungan ぴ dan ゅ kecil.","—","bunyi gabungan"],
  ["ぴょ","pyo","Gabungan ぴ dan ょ kecil.","ぴょん · pyon","lompatan/bunyi melompat"]
];

const hinaCategories = {
  basic: hinaBasic,
  dakuten: hinaDakuten,
  handakuten: hinaHandakuten,
  youon: hinaYouon
};

let hinaActiveCategory = null;
let hinaActiveData = hinaBasic;

const hinaGrid = document.getElementById("kanaGrid");
const hinaDetail = document.getElementById("kanaDetail");

const hinaDetailKana = document.getElementById("detailKana");
const hinaDetailRomaji = document.getElementById("detailRomaji");
const hinaDetailDescription = document.getElementById("detailDescription");
const hinaDetailWord = document.getElementById("detailWord");
const hinaDetailMeaning = document.getElementById("detailMeaning");

const hinaCount = document.getElementById("kanaCount");
const hinaTabs = document.querySelectorAll(".kana-tab");

function showHinaDetail(item) {
  
  if (
    !hinaGrid ||
    !hinaDetail ||
    !hinaDetailKana ||
    !hinaDetailRomaji ||
    !hinaDetailDescription ||
    !hinaDetailWord ||
    !hinaDetailMeaning
  ) return;

  hinaDetail.hidden = false;
  hinaDetail.classList.add("active");

  const [character, romaji, description, word, meaning] = item;

  hinaDetailKana.textContent = character;
  hinaDetailRomaji.textContent = romaji;
  hinaDetailDescription.textContent = description;
  hinaDetailWord.textContent = word;
  hinaDetailMeaning.textContent = meaning;

  // HINA — AUTO SCROLL DETAIL
  hinaDetail.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });

  hinaGrid.querySelectorAll(".kana-card").forEach(card => {
    const selected = card.dataset.kana === character;

    card.classList.toggle("selected", selected);
    card.setAttribute("aria-pressed", String(selected));
  });
}

function renderHina(category) {
  if (!hinaGrid) return;

  hinaActiveData = hinaCategories[category];

  if (!hinaActiveData) return;

  hinaGrid.classList.toggle(
    "youon-layout",
    category === "youon"
  );

  hinaGrid.innerHTML = "";

  if (hinaCount) {
    hinaCount.textContent = ` · ${hinaActiveData.length} karakter`;
  }

  hinaActiveData.forEach(item => {
    const [character, romaji] = item;

    const card = document.createElement("button");

    card.type = "button";
    card.className = "kana-card";
    card.dataset.kana = character;

    card.setAttribute(
      "aria-label",
      `${character}, dibaca ${romaji}`
    );

    card.setAttribute("aria-pressed", "false");

    card.innerHTML = `
      <span class="kana-character">${character}</span>
      <span class="kana-romaji">${romaji}</span>
    `;

    card.addEventListener("click", () => {
      showHinaDetail(item);
    });

    hinaGrid.appendChild(card);
  });
}

hinaTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const category = tab.dataset.category;
    
    if (!hinaCategories[category]) return;

    if (hinaActiveCategory === category) {
      hinaActiveCategory = null;

      if (hinaGrid) {
        hinaGrid.innerHTML = "";
        hinaGrid.classList.remove("youon-layout");
      }

      if (hinaDetail) {
        hinaDetail.classList.remove("active");
        hinaDetail.hidden = true;
      }

      if (hinaCount) {
        hinaCount.textContent = "";
      }

      tab.classList.remove("active");
      tab.setAttribute("aria-pressed", "false");

      return;
    }
    
    hinaTabs.forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });

    if (hinaDetail) {
      hinaDetail.classList.remove("active");
      hinaDetail.hidden = true;
    }
    
    hinaActiveCategory = category;

    tab.classList.add("active");
    tab.setAttribute("aria-pressed", "true");

    renderHina(category);
  });
});

if (hinaGrid) {
  hinaGrid.innerHTML = "";
}

if (hinaDetail) {
  hinaDetail.classList.remove("active");
  hinaDetail.hidden = true;
}

const hinaStartRelaxedQuiz =
  document.getElementById("startRelaxedQuiz");

const hinaStartChallengeQuiz =
  document.getElementById("startChallengeQuiz");

if (hinaStartRelaxedQuiz) {
  hinaStartRelaxedQuiz.addEventListener("click", () => {
    window.location.href = "quiz-hiragana.html?mode=relaxed";
  });
}

if (hinaStartChallengeQuiz) {
  hinaStartChallengeQuiz.addEventListener("click", () => {
    window.location.href = "quiz-hiragana.html?mode=challenge";
  });
}
})();
