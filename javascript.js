console.log("Hello World!")

function getComputerChoice(max) {
    let computerChoice = Math.floor(Math.random() * max);
    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else (computerChoice === 2) 
        return "Scissors";
}

console.log(getComputerChoice(3));

    let humanChoice = prompt("Rock, paper or scissors?");

function getHumanChoice(humanChoice) {
    if (humanChoice === null) {
        console.log = "Okay, try again later."
    } else if (humanChoice.toLowerCase() === "rock") {
        console.log = "You've chosen rock."
    } else if (humanChoice.toLowerCase() === "paper") {
        console.log = "You've chosen paper." 
    } else if (humanChoice.toLowerCase() === "scissors") {
        console.log = "You've chosen scissors."
    } else {
        console.log = "Try again later."
    }
}