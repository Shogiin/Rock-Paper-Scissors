// Create a function that will return a random selection of either Rock Paper Scissors.
function getComputerChoice () {
    const computerOptions = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[choice]
}

// Play a round between Player & computer
function playRound(playerSelection, computerSelection) {

}

const playerSelection = "rock"
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))