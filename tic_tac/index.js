let boxes = document.querySelectorAll(".box"); // array of node elements
let gameInfo = document.querySelector(".game-info");

let currentPlayer;
let gameGrid;

function initialize() {
  currentPlayer = "X";
  gameGrid = ["", "", "", "", "", "", "", "", ""];

  boxes.forEach((box, index) => {
    box.innerText = "";
    box.classList = `box box${index + 1}`;
  });
  gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initialize();
