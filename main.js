// computerPlay() returns 'Rock', 'Paper' or 'Scissors' with 33% 
// probability each
function computerPlay() {
  let computerSelection = Math.random();

  if (computerSelection < 0.33) {
    computerSelection = "Rock";
  } else if (computerSelection > 0.66) {
    computerSelection = "Paper";
  } else {
    computerSelection = "Scissors";
  }

  return computerSelection;
}

// playRound(playerSelection, computerSelection) returns the result of a
// round of "Rock, Paper, Scissors" between player and computer
function playRound(playerSelection, computerSelection) {
    return;
}