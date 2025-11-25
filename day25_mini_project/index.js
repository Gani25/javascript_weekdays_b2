function generateRandomNumber() {
  // This will generate number between 0 to 255
  return Math.floor(Math.random() * 255) + 1;
}

function generateRandomColor() {
  // Red color Value
  const red = generateRandomNumber();
  // Green color Value
  const green = generateRandomNumber();
  // Blue color Value
  const blue = generateRandomNumber();

  // returning rgb color value
  return `rgb(${red},${green},${blue})`;
}

const generateBtn = document.querySelector("[generate]");
const colorPlacer = document.querySelector("[colorPlacer]");
const copyBtn = document.querySelector("[copyBtn]");
const copyMsg = document.querySelector(".copy-msg");
const errorMsg = document.querySelector(".error");

generateBtn.addEventListener("click", function () {
  // get random color by fn call
  const randomColor = generateRandomColor();
  colorPlacer.textContent = randomColor;
  colorPlacer.style.backgroundColor = randomColor;
});

copyBtn.addEventListener("click", function () {
  if (!colorPlacer.innerText.startsWith("Random")) {
    navigator.clipboard.writeText(colorPlacer.innerText);

    copyMsg.innerText = "Copied";

    setTimeout(function () {
      copyMsg.innerText = "Copy";
    }, 3000);
  } else {
    errorMsg.classList.remove("hide");
    setTimeout(function () {
      errorMsg.classList.add("hide");
    }, 3000);
  }
});
