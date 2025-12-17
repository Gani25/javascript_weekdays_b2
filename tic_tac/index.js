let boxes = document.querySelectorAll(".box"); // array of node elements
let gameInfo = document.querySelector(".game-info");

let newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

function initialize() {
  currentPlayer = "X";
  gameGrid = ["", "", "", "", "", "", "", "", ""];

  boxes.forEach((box, index) => {
    box.innerText = "";
    box.style.pointerEvents = "all";
    box.classList = `box box${index + 1}`;
  });

  newGameBtn.classList.remove("active");
  gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initialize();

function swapPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
  gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

let winningPosition = [
  // ROW Winning Position
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //   COLUMN Winning Position
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // DIAGONAL
  [0, 4, 8],
  [2, 4, 6],
];
function checkGameOver() {
  let result = "";

  winningPosition.forEach((position) => {
    if (
      (gameGrid[position[0]] !== "" ||
        gameGrid[position[1]] !== "" ||
        gameGrid[position[2]] !== "") &&
      gameGrid[position[0]] === gameGrid[position[1]] &&
      gameGrid[position[1]] == gameGrid[position[2]]
    ) {
      if (gameGrid[position[0]] === "X") {
        result = "X";
      } else {
        result = "O";
      }

      boxes.forEach((box) => {
        box.style.pointerEvents = "none";
      });
      boxes[position[0]].classList.add("win");
      boxes[position[1]].classList.add("win");
      boxes[position[2]].classList.add("win");
    }
  });

  if (result !== "") {
    gameInfo.innerText = `Winner Player - ${result}`;

    newGameBtn.classList.add("active");

    return;
  }

  // check whether all boxes are filled or not?
  let fillBoxes = 0;
  gameGrid.forEach((element) => {
    if (element !== "") {
      fillBoxes++;
    }
  });

  if (fillBoxes === 9) {
    gameInfo.innerText = "Game Tied!!";
    newGameBtn.classList.add("active");
  }
}

function handleClick(index) {
  if (gameGrid[index] == "") {
    boxes[index].innerText = currentPlayer;
    gameGrid[index] = currentPlayer;
    boxes[index].style.pointerEvents = "none";

    swapPlayer();
    // Check whether game is over or not?
    checkGameOver();
  }
}
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    handleClick(index);
  });
});

newGameBtn.addEventListener("click", initialize);
