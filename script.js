function getComputerChoice() {
    let computerNum = Math.floor(Math.random()*3);
    if(computerNum === 0) return "rock";
    if(computerNum === 1) return "paper";
    if(computerNum === 2) return "scissors";
    return computerNum;
    
}

function getHumanChoice() {
    return prompt("Choose rock, paper or scissors.").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    function playRound(humanChoice, computerChoice) {
        if(humanChoice==="rock" && computerChoice==="rock" ||
            humanChoice==="paper" && computerChoice==="paper" ||
            humanChoice==="scissors" && computerChoice==="scissors") {
            return console.log("Tie!");
        }
        if(humanChoice==="rock" && computerChoice==="paper") {
            computerScore += 1;
            return console.log("You Lose! Paper beats Rock");
        }
        if(humanChoice==="rock" && computerChoice==="scissors") {
            humanScore += 1;
            return console.log("You win! Rock beats Scissors");
        }
        if(humanChoice==="paper" && computerChoice==="rock") {
            humanScore +=1;
            return console.log("You win! Paper beats rock!")
        }
        if(humanChoice==="paper" && computerChoice==="scissors") {
            computerScore +=1;
            return console.log("You lose! Scissors beat paper!")
        }
        if(humanChoice==="scissors" && computerChoice==="rock") {
            computerScore +=1;
            return console.log("You lose! Rock beats scissors!")
        }
        if(humanChoice==="scissors" && computerChoice==="paper") {
            humanScore +=1;
            return console.log("You win! Scissors beat paper!")
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("human: " + humanSelection);
        console.log("computer: " + computerSelection);
    }
}

playGame();
console.log("humanScore: " + humanScore);
console.log("computerScore: " + computerScore);
(humanScore > computerScore) ? (console.log("You win!!!")) : (console.log("Computer wins!!!"));
(humanScore === computerScore) ? (console.log("It is a tie!!!")) : "";










