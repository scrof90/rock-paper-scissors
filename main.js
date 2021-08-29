// returns 'Rock', 'Paper' or 'Scissors' with 33% probability each
function getComputerPlay() {
  let play = Math.random();

  play = play < 0.33 ? "Rock" : play > 0.66 ? "Paper" : "Scissors";

  return play;
}

// prompts player to enter 'Rock', 'Paper' or 'Scissors', checks for validity
// and returns it. If user cancels returns random choice
function getPlayerPlay() {
  while (true) {
    let play = prompt(
      'Enter "Rock", "Paper" or "Scissors" (cancel for random): '
    );

    if (!play) return getComputerPlay();

    play = capFirst(player);

    if (play === "Rock" || play === "Paper" || play === "Scissors") {
      return play;
    } else {
      console.log("Invalid choice!");
    }
  }
}

// returns the result of a round of "Rock, Paper, Scissors"
function playRound(playerPlay, computerPlay) {
  let result;

  if (playerPlay === computerPlay) {
    result = `It's a draw! You both chose ${playerPlay}`;
  } else if (
    (playerPlay === "Rock" && computerPlay === "Paper") ||
    (playerPlay === "Paper" && computerPlay === "Rock") ||
    (playerPlay === "Scissors" && computerPlay === "Paper")
  ) {
    result = `You win! ${playerPlay} beats ${computerPlay}`;
  } else {
    result = `You lose! ${computerPlay} beats ${playerPlay}`;
  }

  return result;
}

// plays a game of 5 rounds and displays the results to console
function game() {
  let wins = 0;
  let losses = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round} of 5! Fight!`);

    const roundResult = playRound(getPlayerPlay(), getComputerPlay());

    roundResult.includes("win") ? wins++ : losses++;

    console.log(roundResult);
  }

  const gameResult =
    wins > losses
      ? `Congratulations! You win with the score of ${wins} - ${losses}`
      : `Too bad! You lose with the score of ${wins} - ${losses}`;

  console.log(gameResult);
}

// capitalizes first letter of string and converts the rest to lower case,
// then returns it
function capLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

game();
