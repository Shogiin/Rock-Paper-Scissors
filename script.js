// Create a function that will return a random selection of either Rock Paper Scissors.
function getComputerChoice () {
    const computerOptions = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[choice]
}

let playerScore = 0 // Player Score
let computerScore = 0 // Computer Score

// Play a round between Player & computer
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("It's a tie!") 
    } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("It's a tie!") 
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    console.log("It's a tie!") 
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
    console.log("Computer Wins!") 
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
    console.log("Computer Wins!") 
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
    console.log("Computer Wins!") 
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
    console.log("You Win!") 
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
    console.log("You Win!") 
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        console.log("You Win!")
    } else {
     console.log("Invalid Input")
    }
}

const playerSelection = prompt("Rock, Paper or Scissors?"); // Player Choice
const computerSelection = getComputerChoice(); // Computer

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt(
          "Enter rock, paper, or scissors:"
        ).toLowerCase();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result && result.includes("You Win!")) {
            playerScore++;
    } else if (result && result.includes("You Lose!")) {
            computerScore++;
    }
    console.log(`Final score: You ${playerScore}, Computer ${computerScore}`);
    }
}

game()