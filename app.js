const gameBoard = document.querySelector(".board");
const body = document.querySelector("body");

let currentRow = 0; // it's the row user is currently on
const typedWord = []; // it stores the characters of the current row

// const theWORD = generateRandomWord(); // the word to be guessed
const theWORD = "ABEER"; // the word to be guessed

// Generates the wordle board on the screen
function generateBoard() {
  for (let i = 0; i <= 5; i++) {
    const row = document.createElement("div");
    row.classList.toggle("row");
    for (let j = 0; j <= 4; j++) {
      const tile = document.createElement("div");
      tile.classList.toggle("tile");
      const newSpan = document.createElement("span");
      newSpan.id = `t${i}${j}`;
      tile.appendChild(newSpan);
      row.appendChild(tile);
    }
    gameBoard.appendChild(row);
  }
}

// Renders new letter on the board
// runs everytime user type some letter
function updateEnteredWords(row) {
  for (let i = 0; i <= 4; i++) {
    const char = typedWord[i];
    document.querySelector(`#t${row}${i}`).textContent =
      char === undefined ? "" : char;
  }
}

// Capitalizes letter
// row: String
function capitilize(row) {}

// TODO: Validate if the entered is valid English Language word
function isValidEnglishWord(row) {}

// TODO: Validate entered character is not a special character or a number
function isValidCharacter(char) {}

// TODO: Generates a random word at the beginning of the game
function generateRandomWord() {}

// TODO: Generates a on screen keyboard on the screen
function generateKeyboard() {}

// TODO: Update colors of the keyboard characters
function updateKeyboard() {}

// TODO: Check if entered word is equal to the generated word
function checkWinCondition() {}

// TODO: Check if one of the entered word's letter is at the correct position
function isLetterAtCorrectPosition() {}

// TODO: Change color of the letter which is at correct position
// index: Number
// isCorrect: Boolean [true: 'yellow', false: 'dark gray']

body.addEventListener("keydown", (e) => {
  const key = e.key;

  if (typedWord.length === 5 && key === "Enter") {
    if (currentRow <= 4) {
      currentRow++;
      typedWord.length = 0;
      validateWord();
      return;
    } else {
      alert("Thanks for Playing");
    }
  }

  if (key === "Backspace" && typedWord.length >= 0) {
    typedWord.pop();
  } else if (typedWord.length <= 4) {
    const char = key.toUpperCase();
    typedWord.push(char);
  }

  updateEnteredWords(currentRow);
  console.log(key);
});

generateBoard();
