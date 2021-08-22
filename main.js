// getComputerPlay() returns 'Rock', 'Paper' or 'Scissors' with 33%
// probability each
function getComputerPlay() {
  let computer = Math.random();

  computer = computer < 0.33 ? "Rock" : computer > 0.66 ? "Paper" : "Scissors";

  return computer;
}

// getPlayerPlay() prompts player to enter 'Rock', 'Paper' or 'Scissors' and
// returns the choice if it's a valid input
function getPlayerPlay() {
  while (true) {
    const player = capitalizeFirstLetter(
      prompt('Enter "Rock", "Paper" or "Scissors": ')
    );

    if (player == "Rock" || player == "Paper" || player == "Scissors") {
      return player;
    } else {
      console.log("Invalid choice!");
    }
  }
}

// playRound() returns the result of a round of "Rock, Paper, Scissors"
function playRound(playerSelection, computerSelection) {
  let result;

  if (playerSelection == computerSelection) {
    result = `It's a draw! You both chose ${playerSelection}`;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    result = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    result = `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  return result;
}

// game() plays a game of 5 rounds and displays the results to console
function game() {
  let wins = 0;
  let losses = 0;

  for (round = 1; round <= 5; round++) {
    console.log(`Round ${round} of 5! Fight!`);

    const roundResult = playRound(getPlayerPlay(), getComputerPlay());

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

// capitalizeFirstLetter() capitalizes first letter of a string and converts
// the rest to lower case, then returns it
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

game();
