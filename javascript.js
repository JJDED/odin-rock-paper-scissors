console.log("Hello World!")

playGame();

function getComputerChoice(max) {
    let computerChoice = Math.floor(Math.random() * max);
    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else if (computerChoice === 2) 
        return "Scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?");
    if (humanChoice.toLowerCase() === "rock") {
        return "Rock"
    } else if (humanChoice.toLowerCase() === "paper") {
        return "Paper" 
    } else if (humanChoice.toLowerCase() === "scissors") {
        return "Scissors"
    } else {
        return "poopyhead"
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "rock" || humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "paper" || humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "scissors")
    {
        console.log("It's a tie!")
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors" || humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock" || humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
        humanScore++;
        console.log(`You won! ${humanChoice} beats ${computerChoice}!`)
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper" || humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors" || humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
        computerScore++;
        console.log(`You lost... ${computerChoice} beats ${humanChoice}...`)
    }
        console.log(`Score: Humans: ${humanScore} Clankers: ${computerScore}`)
}

    for (let i = 1; i <= 5; i++) { 
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(3);

        console.log(`Round ${i}`);
        console.log(`You picked ${humanSelection}`);
        console.log(`Clankers picked ${computerSelection}`);

        playRound(humanSelection, computerSelection);
    }
}
