// document is a built in JS object that represents entire page, querySelector selects first element that matches
const bigBoard = document.querySelector('.big-board'); 

import { handleClick, winningCombos } from "./sharedLogic.js";

for (let i = 0; i < 9; i++) {
    // creates a new div called cell in JS
    const smallBoard = document.createElement('div');
    // adds cell class to said div for CSS styling
    smallBoard.classList.add('small-board');
    // adds custom data attribute to refer to it in JS
    smallBoard.setAttribute('data-board', i);
    for (let j = 0; j < 9; j++) {
        // creates a new div called cell in JS
        const cell = document.createElement('div');
        // adds cell class to said div for CSS styling
        cell.classList.add('cell');
        // adds custom data attribute to refer to it in JS
        cell.setAttribute('data-cell', j);

        cell.addEventListener('click', () => {
            handleClick(cell, smallBoard, i)
        }, { once: true });
        // add the cell to the board
        smallBoard.appendChild(cell);
    }
    // add the cell to the board
    bigBoard.appendChild(smallBoard);
}

export let bigBoardState = Array(9).fill('');

export function checkBigWin(player) {
    return winningCombos.some(combo =>
        combo.every(index => bigBoardState[index] === player)
    );
}

 