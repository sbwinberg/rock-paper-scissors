
const altArray = ["Rock", "Paper", "Scissors"]
const computerChoice = getComputerChoice();
const playerChoice = playerSelection();
let computerScore = 0;
let playerScore = 0;

let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
rockButton.addEventListener("click", function(e){
    singleRound(computerChoice, "rock")
});
paperButton.addEventListener("click", function(e){
    singleRound(computerChoice, "paper")
});
scissorsButton.addEventListener("click", function(e){
    singleRound(computerChoice, "scissors")
});


function getComputerChoice() {
    choice = altArray[~~(Math.random()*altArray.length)]
    return choice.toLowerCase();
}

function playerSelection() {
    //let choice = prompt("Rock, Paper or Scissors?");
    return choice.toLowerCase();
}

function singleRound(computerChoice, playerChoice) {

    computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        document.getElementById('log').innerHTML += '<br>Tied';
    }

    else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") 
    || (playerChoice === "scissors" && computerChoice === "rock")) {
        document.getElementById('log').innerHTML += `<br>You Lose! ${computerChoice} beats ${playerChoice}`;
        computerScore++;
    }
    else {
        document.getElementById('log').innerHTML += `<br>You Win! ${playerChoice} beats ${computerChoice}`;
        playerScore++;
    }
    if (computerScore === 5){
        document.getElementById('log').innerHTML += "<br>Game Over! Computer Wins";
    }
    else if (playerScore === 5){
        document.getElementById('log').innerHTML += "<br>Game Over! You Win!";
    }
    else{
    document.getElementById('log').innerHTML += `<br>Computer: ${computerScore} Player: ${playerScore}`;
    }
}

// function game() {
//     if (computerScore === playerScore) {
//         return "Tied Game, No winners"
//     }
//     else if (computerScore > playerScore) {
//         return `You Lost with a score of ${playerScore} - ${computerScore}`
//     }
//     else return `You Won with a score of ${playerScore} - ${computerScore}`
// }
// console.log(game());
// singleRound(computerChoice, playerChoice);