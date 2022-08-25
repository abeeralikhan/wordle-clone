const gameBoard = document.querySelector('.board');

const body = document.querySelector('body');

let currentRow = 0; // it's the row user is currently on

const typedWord = []; // it stores the word typed by the user currently

function renderBoard() {
    // to initialize the enteredWords dictionary for the game
    for (let i = 0; i <= 5; i++) {
        const row = document.createElement('div');
        row.classList.toggle('row');
        for (let j = 0; j <= 4; j++) {
            const tile = document.createElement('div');
            tile.classList.toggle('tile');
            const newSpan = document.createElement('span');
            newSpan.id = `t${i}${j}`;
            tile.appendChild(newSpan);
            row.appendChild(tile);
        }
        gameBoard.appendChild(row);
    }
}

function updateEnteredWords(row) {
    for (let i = 0; i <= 4; i++) {
        const char = typedWord[i];
        document.querySelector(`#t${row}${i}`).textContent = char === undefined ? '': char;
    }
}

function validateWord(row) {

}

body.addEventListener('keydown', (e) => {
    const key = e.key;

    if (typedWord.length === 5 && key === 'Enter') {
        if (currentRow <= 4) {
            currentRow++;
            typedWord.length = 0;
            validateWord();
            return
        } else {
            alert('Thanks for Playing');
        }
    }

    if (key === 'Backspace' && typedWord.length >= 0) {
        typedWord.pop();
        
    } else if (typedWord.length <= 4) {
        const char = key.toUpperCase();
        typedWord.push(char);
    }

    updateEnteredWords(currentRow);
    console.log(key);
});

renderBoard();