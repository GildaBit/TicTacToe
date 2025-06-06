export const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

import { bigBoardState, checkBigWin } from "./ultTicTacToe.js"

let currentPlayer = 'X';

export function handleClick(cell, boardElement, boardIndex = null) {
    if (cell.textContent !== '') return;
    cell.textContent = currentPlayer;
    const cells = [...boardElement.querySelectorAll('[data-cell]')]; // [... ] makes the NodeList into an array

    const hasWon = winningCombos.some(combo => 
        combo.every(i => {
            const cell = cells.find(c => c.dataset.cell == i);
            return cell && cell.textContent === currentPlayer;
        })
    );

    if (boardIndex !== null && Array.isArray(bigBoardState)) {
        if (hasWon) {
            boardElement.classList.add('won-' + currentPlayer);
            bigBoardState[boardIndex] = currentPlayer;
            if (checkBigWin(currentPlayer)) {
                alert(`${currentPlayer} wins the BIG GAME!`);
                return;
            } else if (bigBoardState.every(cell => cell !== '')) {
                alert('A BIG DRAW!!');
                return;
            }
        }
    } else {
        if (hasWon) {
            boardElement.classList.add('won-' + currentPlayer);
            alert(`${currentPlayer} wins!`);
            return;
        } else if ([...cells].every(cell => cell.textContent !== '')) { // [...cells] converts cells from NodeList to array
            alert('A DRAW!!');
            return;
        }
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}