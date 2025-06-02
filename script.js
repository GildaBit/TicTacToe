// document is a built in JS object that represents entire page, querySelector selects first element that matches
const board = document.querySelector('.board'); 

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

// cell => { ... }	function(cell) { ... } THESE TWO ARE THE SAME THING IN LOGIC
