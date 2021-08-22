// computerPlay() returns 'Rock', 'Paper' or 'Scissors' with 33% probability each
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
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
    return;
}