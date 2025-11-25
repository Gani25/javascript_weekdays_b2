function generateRandomNumber() {
  return Math.floor(Math.random() * 255) + 1;
}

function generateRandomColor() {
  const red = generateRandomNumber();
  const green = generateRandomNumber();
  const blue = generateRandomNumber();

  return `rgb(${red},${green},${blue})`;
}

const generateBtn = document.querySelector("[generate]");
const colorPlacer = document.querySelector("[colorPlacer]");

generateBtn.addEventListener("click", function () {
  const randomColor = generateRandomColor();
  colorPlacer.textContent = randomColor;
  colorPlacer.style.backgroundColor = randomColor;
});
