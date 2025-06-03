// document is a built in JS object that represents entire page, querySelector selects first element that matches
const board = document.querySelector('.board'); 

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

for (let i = 0; i < 9; i++) {
    // creates a new div called cell in JS
    const cell = document.createElement('div');
    // adds cell class to said div for CSS styling
    cell.classList.add('cell');
    // adds custom data attribute to refer to it in JS
    cell.setAttribute('data-cell', i);
    // add the cell to the board
    board.appendChild(cell);
}

let currentPlayer = 'X';

const cells = document.querySelectorAll('[data-cell]');


const checkWin = player => {
    return winningCombos.some(combo => {
        return combo.every(index => {
            return cells[index].textContent === player;
        });
    });
};

function isDraw() {
    return;
}

// function handleClick(e) {}
const handleClick = e => {
    // e = event, e.target = exact element that triggered event
    const cell = e.target;
    cell.textContent = currentPlayer;

    if (checkWin(currentPlayer)) {
        alert(`${currentPlayer} wins!`);
        return;
    }
    if ([...cells].every(cell => cell.textContent !== '')) { // [...cells] converts cells from NodeList to array
        alert('A DRAW!!');
        return;
    }
    
    // ? means if : means else
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

// cell => { ... }	function(cell) { ... } THESE TWO ARE THE SAME THING IN LOGIC
cells.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true});
    // { once: true } means every cell can only be clicked once
});

