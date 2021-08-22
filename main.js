// computerPlay() returns either 'Rock', 'Paper' or 'Scissors' with 33%
// probability each
function computerPlay() {
  let computer = Math.random();

  computer = computer < 0.33 ? "Rock" : computer > 0.66 ? "Paper" : "Scissors";

  return computer;
}

// playRound() returns the result of a round of "Rock, Paper, Scissors"
function playRound(playerSelection, computerSelection) {
  const player = capitalizeFirstLetter(playerSelection);
  const computer = computerSelection;

  let result;

  if (player == computer) {
    result = `It's a draw! You both chose ${player}`;
  } else if (
    (player == "Rock" && computer == "Paper") ||
    (player == "Paper" && computer == "Rock") ||
    (player == "Scissors" && computer == "Paper")
  ) {
    result = `You win! ${player} beats ${computer}`;
  } else {
    result = `You lose! ${computer} beats ${player}`;
  }

  return result;
}

function game() {
  let wins = 0;
  let losses = 0;

  for (round = 1; round <= 5; round++) {
    console.log(`Round ${round} of 5! Fight!`);

    playerSelection = prompt('Enter "rock", "paper" or "scissors": ');
    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);

    if (roundResult.includes("win")) {
      wins++;
    } else {
      losses++;
    }

    console.log(roundResult);
  }

  const gameResult =
    wins > losses
      ? `Congratulations! You win with the score of ${wins} - ${losses}`
      : `Too bad! You lose with the score of ${wins} - ${losses}`;

  console.log(gameResult);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

game();
