let playerScore = 0;
let computerScore = 0;
let newGame = true;

// returns 'Rock', 'Paper' or 'Scissors' with 33% probability each
function getComputerPlay() {
  let play = Math.random();

  play = play < 0.33 ? 'rock' : play > 0.66 ? 'paper' : 'scissors';

  return play;
}

function playRound(playerSelection) {
  if (newGame) initNewGame();

  const player = playerSelection;
  const computer = getComputerPlay();

  const result = document.getElementById('result');
  result.textContent = compare(player, computer);

  const score = document.getElementById('score');
  score.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;

  checkGameOver();
}

function initNewGame() {
  playerScore = 0;
  computerScore = 0;
  newGame = false;
}

function compare(p, c) {
  if (p === c) {
    return `It's a draw! You both chose ${p}`;
  } else if (
    (p === 'rock' && c === 'scissors') ||
    (p === 'paper' && c === 'rock') ||
    (p === 'scissors' && c === 'paper')
  ) {
    playerScore++;
    return `You win! ${p} beats ${c}`;
  } else {
    computerScore++;
    return `You lose! ${c} beats ${p}`;
  }
}

function checkGameOver() {
  if (playerScore === 3) {
    result.textContent = `You've won the game!`;
    newGame = true;
  } else if (computerScore === 3) {
    result.textContent = `You've lost the game!`;
    newGame = true;
  }
}

// capitalizes first letter of string and converts the rest to lower case,
// then returns it
function capLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}