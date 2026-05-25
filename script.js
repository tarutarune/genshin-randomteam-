
const characters = [
  "旅人",
  "アンバー",
  "ガイア",
  "リサ",
  "ジン",
  "ディルック",
  "ウェンティ",
  "クレー",
  "ベネット",
  "ノエル",
  "フィッシュル",
  "スクロース",
  "モナ",
  "刻晴",
  "七七",
  "タルタリヤ",
  "ディオナ",
  "鍾離",
  "辛炎",
  "アルベド",
  "甘雨",
  "魈",
  "胡桃",
  "ロサリア",
  "エウルア",
  "煙緋",
  "楓原万葉",
  "神里綾華",
  "早柚",
  "宵宮",
  "雷電将軍",
  "九条裟羅",
  "珊瑚宮心海",
  "トーマ",
  "荒瀧一斗",
  "ゴロー",
  "申鶴",
  "雲菫",
  "八重神子",
  "神里綾人",
  "久岐忍",
  "夜蘭",
  "鹿野院平蔵",
  "ティナリ",
  "コレイ",
  "ドリー",
  "キャンディス",
  "セノ",
  "ニィロウ",
  "ナヒーダ",
  "レイラ",
  "放浪者",
  "ファルザン",
  "アルハイゼン",
  "ヨォーヨ",
  "ディシア",
  "ミカ",
  "カーヴェ",
  "白朮",
  "リネ",
  "リネット",
  "フレミネ",
  "ヌヴィレット",
  "リオセスリ",
  "シャルロット",
  "フリーナ",
  "シュヴルーズ",
  "ナヴィア",
  "嘉明",
  "閑雲",
  "千織",
  "アルレッキーノ",
  "クロリンデ",
  "セトス",
  "シグウィン",
  "エミリエ",
  "ムアラニ",
  "キィニチ",
  "カチーナ",
  "シロネン",
  "オロルン",
  "チャスカ",
  "マーヴィカ",
  "シトラリ",
  "イアンサ",
  "ヴァレサ",
  "エスコフィエ",
  "スカーク"
];

    let selectedCharacters = [];

renderCharacters();

function toggleCharacter(character) {

  if (selectedCharacters.includes(character)) {
    selectedCharacters =
      selectedCharacters.filter(c => c !== character);
  } else {
    selectedCharacters.push(character);
  }

  renderCharacters();
}


   function renderCharacters() {

  document.getElementById("character-list").innerHTML =
    characters.map(character => {

      const selected =
        selectedCharacters.includes(character)
          ? "selected"
          : "";

      return `
        <div class="character-card ${selected}"
          onclick="toggleCharacter('${character}')">
          ${character}
        </div>
      `;
    }).join("");
} 

    
    function randomTeam() {
      const shuffled = [...selectedCharacters]
        .sort(() => 0.5 - Math.random());

      const team = shuffled.slice(0, 8);

      document.getElementById("result").innerHTML =
  team.map(character =>
    `<div class="character-card">${character}</div>`
  ).join("");
      
    }
