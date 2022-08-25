const gameBoard = document.querySelector(".board");
const body = document.querySelector("body");

let currentRow = 0; // it's the row user is currently on
const typedWord = []; // it stores the characters of the current row

let theWORD; // the word to be guessed

// Generates the wordle board on the screen
function generateBoard() {
  for (let i = 0; i <= 5; i++) {
    const row = document.createElement("div");
    row.classList.toggle("row");
    for (let j = 0; j <= 4; j++) {
      const tile = document.createElement("div");
      tile.classList.toggle("tile");
      const newSpan = document.createElement("span");
      //   newSpan.id = `t${i}${j}`;
      newSpan.id = getBoxId(i, j);
      tile.appendChild(newSpan);
      row.appendChild(tile);
    }
    gameBoard.appendChild(row);
  }
}

// Renders new letter on the board
// runs everytime user type some letter
function updateEnteredWords(rowNum) {
  for (let i = 0; i <= 4; i++) {
    const char = typedWord[i];
    document.getElementById(getBoxId(rowNum, i)).textContent =
      char === undefined ? "" : char;
  }
}

// Returns the transformed row and column index to "t12" format
function getBoxId(i, j) {
  return `t${i}${j}`;
}

// TODO: Generates a random word at the beginning of the game
function generateRandomWord() {
  // TODO: Load words
  // TODO: Get a random number
  // TODO: Assign the word
}

// Returns a random number between 0 and n
// returns --> Number
function generateRandomNumber(n) {
  return Math.floor(Math.random() * n);
}

// Capitalizes letter
// row: String
function capitilize(row) {
  let capitilized = "";
  for (let char of row) {
    capitilized += char.toUpperCase();
  }
  return capitilized;
}

// TODO: Validate if the entered is valid English Language word
function isValidEnglishWord(row) {
  return true;
}

// TODO: Validate entered character is not a special character or a number
function isValidCharacter(char) {
  return "qwertyuiopasdfghjklzxcvbnm".includes(char);
}

// TODO: Generates a on screen keyboard on the screen
function generateKeyboard() {}

// TODO: Update colors of the keyboard characters
// yellow incase of win, otherwise dark gray
function updateKeyboard(word) {}

// TODO: Update colors of the current row with respect to the letters
function updateRowColors(word) {}
// TODO: Check if entered word is equal to the generated word
// word: List
// returns --> Boolean
function checkWinCondition(word) {}

// TODO: Check if the random word has a letter
function hasLetter(char) {}

// TODO: Check if the letter is at the correct position
// returns --> result: an object { 0: false, 1: true, ..., 4: false }
function isLetterAtCorrectPosition(char) {}

// TODO: Change color of the letter which is at correct position
// index: Number
// isCorrect: Boolean [true: 'yellow', false: 'dark gray']

// TODO: Display win screen when entered word is equal to the random word
function displayWinScreen() {}

// TOOD: Restarts the game
//       New random is selected
function restartGame() {
  clearBoard();
  clearKeyboard();
  clearTypedWord();
  generateBoard();
  generateKeyboard();
  theWORD = generateRandomWord();
  currentRow = 0;
}

// Empties the typedWord array
function clearTypedWord() {
  typedWord.length = 0;
}

// TODO: Deletes all the children elements inside the game boards
function clearBoard() {}

// TODO: Deletes all the children elements inside the keyboard
function clearKeyboard() {}

body.addEventListener("keydown", (e) => {
  const key = e.key;

  if (typedWord.length === 5 && key === "Enter") {
    if (isValidEnglishWord(typedWord.join(""))) {
      if (currentRow <= 4) {
        // TODO: ADD SOME ANIMATION
        currentRow++;
        clearTypedWord();
        //   validateWord();
        return;
      } else {
        alert("Thanks for Playing");
      }
    }
  }

  if (key === "Backspace" && typedWord.length >= 0) {
    typedWord.pop();
  } else if (typedWord.length <= 4) {
    // checking if entered character is valid or not
    if (isValidCharacter(key)) {
      const char = capitilize(key);
      typedWord.push(char);
    }
  }

  updateEnteredWords(currentRow);
});

generateBoard();
