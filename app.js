const gameBoard = document.querySelector(".board");
const body = document.querySelector("body");

let currentRow = 0; // it's the row user is currently on
const typedWord = []; // it stores the characters of the current row

let theWORD; // the word to be guessed

// listening to key presses on the body object
body.addEventListener("keydown", (e) => {
  const key = e.key;

  if (typedWord.length === 5 && key === "Enter") handleEnterCommand();
  else if (key === "Backspace" && typedWord.length >= 0) handleBackCommand();
  else if (typedWord.length <= 4) handleNewCharacter(key);

  updateEnteredWords(currentRow);
});

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
  for (let i = 0; i <= typedWord.length; i++) {
    const char = typedWord[i];
    const id = getBoxId(rowNum, i);
    const tile = document.getElementById(id);

    // the loop is running uptill the length of the typedArray
    // so set character only if tile is not null
    tile !== null ? (tile.textContent = char === undefined ? "" : char) : "";

    // to avoid making the next cell active
    if (i < typedWord.length) {
      tile.parentElement.classList.contains("active")
        ? ""
        : toggleParentActiveState(id);
    }
  }
}

// Add and remove active class from tile's parent element
function toggleParentActiveState(childId, command = "add") {
  const tileParent = document.getElementById(childId).parentElement;
  if (command === "add") {
    if (!tileParent.classList.contains("active"))
      tileParent.classList.add("active");
  } else {
    if (tileParent.classList.contains("active"))
      tileParent.classList.remove("active");
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

// Capitalizes letter
// row: String
function capitilize(row) {
  let capitilized = "";
  for (let char of row) {
    capitilized += char.toUpperCase();
  }
  return capitilized;
}

// TODO: Validate entered character is not a special character or a number
function isValidCharacter(char) {
  return "QWERTYUIOPASDFGHJKLZXCVBNM".includes(capitilize(char));
}

// Temp
function isValidEnglishWord(word) {
  return true;
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

function removeLastCharacter() {
  typedWord.pop();
}

// TODO: Deletes all the children elements inside the game boards
function clearBoard() {}

// TODO: Deletes all the children elements inside the keyboard
function clearKeyboard() {}

function handleBackCommand() {
  // removing the last issued letter from the array
  removeLastCharacter();
  // removing the active state from tile's parent element
  const typedWordLength = typedWord.length;
  console.log(typedWord);
  // if (typedWordLength > 0) {
  toggleParentActiveState(getBoxId(currentRow, typedWordLength), "remove");
  //
}

function handleEnterCommand() {
  if (isValidEnglishWord(typedWord.join(""))) {
    if (currentRow <= 4) {
      // TODO: ADD SOME ANIMATION
      currentRow++;
      clearTypedWord();
      // for every entered word check if it matches with the randomWord
      //   validateWord();
      return;
    } else {
      // handleGameEnd something like this
      alert("Thanks for Playing");
    }
  }
}

function handleNewCharacter(char) {
  // checking if entered character is valid or not
  if (isValidCharacter(char)) typedWord.push(capitilize(char));
}

generateBoard();

// element.parentElement
