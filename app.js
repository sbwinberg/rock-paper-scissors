const altArray = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    console.log("hello there");
    return altArray[~~(Math.random()*altArray.length)]
}

console.log(getComputerChoice());