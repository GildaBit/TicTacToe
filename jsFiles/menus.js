import { bigBoardState } from "./ultTicTacToe.js";
import { state, handleClick } from "./sharedLogic.js";

const startScreen = document.getElementById('start-screen');
const normalGameContainer = document.getElementById('normal-game-container');
const normalStartBtn = document.getElementById('normal-start-btn');
const rulesBtn = document.getElementById('rules-btn');
const rulesText = document.getElementById('rules');
const homeBtns = document.querySelectorAll('.home-btn'); // returns array of home buttons
const rules = document.getElementById('rules');
const resetBtns = document.querySelectorAll('.reset-btn');
const ultimateStartBtn = document.getElementById('ultimate-start-btn');
const ultimateGameContainer = document.getElementById('ultimate-game-container');

const resetGame = () => {
    state.targetBoard = null;
    document.querySelectorAll('.small-board').forEach(b => b.classList.add('allowed'));
    state.currentPlayer = 'X';
    bigBoardState.fill('');

    const allBoards = [
        ...document.querySelectorAll('.small-board'),
        ...document.querySelectorAll('.board')
    ];

    allBoards.forEach(board => {
        board.classList.remove('won-X', 'won-O');
        board.removeAttribute('data-winner');

        const boardIndex = board.dataset.board !== undefined ? parseInt(board.dataset.board) : null;

        const cells = board.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.textContent = '';
            cell.removeAttribute('data-winner');
            cell.addEventListener('click', () => {
                handleClick(cell, board, boardIndex);
            }, { once: true});
        });
    });
}

normalStartBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    normalGameContainer.style.display = 'block';
});

ultimateStartBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    ultimateGameContainer.style.display = 'block';
});

homeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        startScreen.style.display = 'block';
        normalGameContainer.style.display = 'none';
        ultimateGameContainer.style.display = 'none';
        rules.style.display = 'none';
        resetGame();
    });
});

rulesBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    rules.style.display = 'block';
});

resetBtns.forEach(resetBtn => {
    resetBtn.addEventListener('click', resetGame);  
});
