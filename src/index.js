import "./styles.css";
document.getElementById("colour").onclick = function () {
  color();
};
function color() {
  document.getElementById("app").style.backgroundColor = generateRandomColor();
}
function generateRandomColor() {
  let maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}

document.getElementById("shape").onclick = function () {
  changeShape();
};

function changeShape() {
  var div = document.getElementById("innerDiv");
  var shapes = ["round", "square", "triangle"];
  var randomShape = shapes[Math.floor(Math.random() * shapes.length)];

  div.className = "";
  div.classList.add(randomShape);
}
