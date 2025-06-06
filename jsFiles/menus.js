const startScreen = document.getElementById('start-screen');
const normalGameContainer = document.getElementById('normal-game-container');
const normalStartBtn = document.getElementById('normal-start-btn');
const rulesBtn = document.getElementById('rules-btn');
const rulesText = document.getElementById('rules');
const homeBtns = document.querySelectorAll('.home-btn'); // returns array of home buttons
const rules = document.getElementById('rules');
const resetBtn = document.getElementById('reset-btn');
const ultimateStartBtn = document.getElementById('ultimate-start-btn');
const ultimateGameContainer = document.getElementById('ultimate-game-container');

const resetGame = () => {
    cells.forEach(cell => {
        cell.textContent = '';
        currentPlayer = 'X';
        cell.addEventListener('click', handleClick, { once: true});
        // { once: true } means every cell can only be clicked once
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

resetBtn.addEventListener('click', resetGame);  