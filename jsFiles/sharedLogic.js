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

export const state = {
    currentPlayer: 'X'
};

export function handleClick(cell, boardElement, boardIndex = null) {
    if (cell.textContent !== '') return;
    cell.textContent = state.currentPlayer;
    const cells = [...boardElement.querySelectorAll('[data-cell]')]; // [... ] makes the NodeList into an array

    const hasWon = winningCombos.some(combo => 
        combo.every(i => {
            const cell = cells.find(c => c.dataset.cell == i);
            return cell && cell.textContent === state.currentPlayer;
        })
    );

    if (boardIndex !== null && Array.isArray(bigBoardState)) {
        if (hasWon) {
            boardElement.classList.add('won-' + state.currentPlayer);
            boardElement.setAttribute('data-winner', state.currentPlayer);
            cells.forEach(cell => {
                cell.setAttribute('data-winner', state.currentPlayer); // <-- add this line
            });
            bigBoardState[boardIndex] = state.currentPlayer;
            if (checkBigWin(state.currentPlayer)) {
                alert(`${state.currentPlayer} wins the BIG GAME!`);
                return;
            } else if (bigBoardState.every(cell => cell !== '')) {
                alert('A BIG DRAW!!');
                return;
            }
        }
    } else {
        if (hasWon) {
            boardElement.classList.add('won-' + state.currentPlayer);
            alert(`${state.currentPlayer} wins!`);
            return;
        } else if ([...cells].every(cell => cell.textContent !== '')) { // [...cells] converts cells from NodeList to array
            alert('A DRAW!!');
            return;
        }
    }

    state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
}