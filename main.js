// タイトル保存、モーダル非表示
function saveTitle() {
  const userInput = document.getElementById('userInput').value;
  const title = userInput;
  document.getElementById('title').querySelector('p').innerText = title + "ジェネレータ";
  document.getElementById('modal').style.display = 'none';
  setAdvice()
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
];

function setAdvice() {
  const randomIndex = Math.floor(Math.random() * textArray.length);
  const randomText = textArray[randomIndex];
  const textContainer = document.getElementById("p-advice");
  textContainer.textContent = randomText;
}