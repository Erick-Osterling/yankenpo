
let options = ["rock", "paper", "scissors"];

function computerPlay () {
  return options[Math.floor(Math.random()*3)];
}

function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  
  if (playerSelection === computerSelection) {
    return "Its a Draw";
  } else if (playerSelection == "rock") {
    switch (computerSelection) {
      case "scissors":
      return "You Win! Rock beats Scissors"
      case "paper":
      return "You Lose! Paper beats Rock";
    }
  } else if (playerSelection == "paper"){
    switch (computerSelection) {
      case "rock":
      return "You Win! Paper beats Rock"
      case "scissors":
      return "You Lose! Scissors beats Paper";
    } 
  } else if (playerSelection == "scissors") {
      switch (computerSelection) {
        case "paper":
        return "You Win! Scissors beats Paper"
        case "rock":
        return "You Lose! Rock beats Scissors";
    } 
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));