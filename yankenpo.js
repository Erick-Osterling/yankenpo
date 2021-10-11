
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



function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 1; i <= 5; i++){
    let playerSelection = window.prompt("choose between rock, paper or scissors");
    let computerSelection = computerPlay()
    let result = playRound(playerSelection, computerSelection);

    if (result == "You Win! Rock beats Scissors" || result == "You Win! Paper beats Rock" || result == "You Win! Scissors beats Paper"){
      playerScore++;
      alert(`${result} Player wins 1 point: current score is player: ${playerScore} computer: ${computerScore}`);
    }
    if (result == "You Lose! Paper beats Rock" || result == "You Lose! Scissors beats Paper" || result == "You Lose! Rock beats Scissors"){
      computerScore++;
      alert(`${result} Computer wins 1 point: current score is player: ${playerScore} computer: ${computerScore}`);
    } 
    if (result == "Its a Draw") {
      alert (` ${result} so no one gets points`);
    }
    alert(`${i} rounds played so ${5-i} rounds remaining`);
  }

  alert("here are the final results.")
  if (computerScore > playerScore){
    alert(`Computer wins ${computerScore} to ${playerScore}`);
  }
  else if (playerScore > computerScore) {
    alert(`Player wins ${playerScore} to ${computerScore}`);
  } else if (playerScore == computerScore) {
    alert("Its a Draw! play again")
  }
}

game();

