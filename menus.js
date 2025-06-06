const startScreen = document.getElementById('start-screen');
const gameContainer = document.getElementById('game-container');
const startBtn = document.getElementById('start-btn');
const rulesBtn = document.getElementById('rules-btn');
const rulesText = document.getElementById('rules');
const homeBtns = document.querySelectorAll('.home-btn'); // returns array of home buttons
const rules = document.getElementById('rules');
const resetBtn = document.getElementById('reset-btn');

const resetGame = () => {
    cells.forEach(cell => {
        cell.textContent = '';
        currentPlayer = 'X';
        cell.addEventListener('click', handleClick, { once: true});
        // { once: true } means every cell can only be clicked once
    });
}

startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    gameContainer.style.display = 'block';
});

homeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        startScreen.style.display = 'block';
        gameContainer.style.display = 'none';
        rules.style.display = 'none';
        resetGame();
    });
});

rulesBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    rules.style.display = 'block';
});

resetBtn.addEventListener('click', resetGame);  