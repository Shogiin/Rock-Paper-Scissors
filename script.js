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
    alert("It's a tie!") 
    } else if (playerSelection === "paper" && computerSelection === "paper") {
    alert("It's a tie!") 
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    alert("It's a tie!") 
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
    alert("Computer Wins!") 
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
    alert("Computer Wins!") 
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
    alert("Computer Wins!") 
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
    alert("You Win!") 
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
    alert("You Win!") 
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        alert("You Win!")
    } else {
    alert("Invalid Input")
    }
}

const playerSelection = prompt("Rock, Paper or Scissors?"); // Player Choice
const computerSelection = getComputerChoice(); // Computer


console.log(playRound(playerSelection, computerSelection));
