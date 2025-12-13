// タイトル保存、モーダル非表示
function changeModal(isGenerate = false) {
  const userInput = document.getElementById('userInput').value.trim()
  document.getElementById('title').querySelector('p').innerText = userInput + "ジェネレータ";
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.toggle('showOutput');
  });
  if (isGenerate) {
    setAdvice()
  }
}

const textArray = [
  "うーん、なんでもいいんじゃない？",
  "君次第だね～",
  "流れに身を任せよう",
  "サイコロで決めたら？",
  "そうだねぇ...どっちでもいいかも",
  "どれも正解かも",
  "正解なんてないのかも",
  "今すぐじゃなくてもいいかもよ？",
  "選ぶのは君の自由だよ〜",
  "いったん寝てから考えない？",
  "どれを選んでも、それが運命だよ",
  "目をつぶってエイッ！で選ぼう"
];

function setAdvice() {
  // 抽選
  let randomIndex;
  let randomText;
  do {
    randomIndex = Math.floor(Math.random() * textArray.length);
    randomText = textArray[randomIndex];
  } while (randomText === document.getElementById("advice-text").textContent);
  // DOM更新
  document.getElementById("advice-text").textContent = randomText;
  document.getElementById("advice-text").classList.add("active");
  setTimeout(() => {
    document.getElementById("advice-text").classList.remove("active");
  }, 300);
}