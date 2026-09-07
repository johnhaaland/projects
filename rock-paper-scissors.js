const button = document.getElementById("rock-btn");

button.onclick = function playRound () {
    const randomNumber = (Math.random() * 3);

    let computerChoice = "";
    
    if (randomNumber <= 0) {
        computerChoice = "Rock";
    } else if (randomNumber <= 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    const userChoice = "rock";

    let result = "";

    if 
    (userChoice === "rock" && computerChoice === "scissors") {
    console.log("You Win!"); 
    } else if (userChoice === "rock" && computerChoice === "paper") {
    console.log("You Lose!");
    } else if (userChoice === "rock" && computerChoice === "rock") {
    console.log("It is a Tie!");
    }
    console.log(cmputerChoice)
}

const paperButton = document.getElementById("paper-btn");

paperButton.onclick = function playRound () {
    const randomNumber = (Math.random() * 3);

    let computerChoice = "";
    
    if (randomNumber <= 0) {
        computerChoice = "Rock";
    } else if (randomNumber <= 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    const userChoice = "paper";

    let result = "";

    if 
    (userChoice === "paper" && computerChoice === "rock") {
    console.log("You Win!"); 
    } else if (userChoice === "paper" && computerChoice === "scissors") {
    console.log("You Lose!");
    } else if (userChoice === "paper" && computerChoice === "paper") {
    console.log("It is a Tie!");
    }
    console.log (computerChoice);
}

const scissorsButton = document.getElementById("scissors-btn");

scissorsButton.onclick = function playRound () {
    const randomNumber = (Math.random() * 3);

    let computerChoice = "";
    
    if (randomNumber <= 0) {
        computerChoice = "Rock";
    } else if (randomNumber <= 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    const userChoice = "scissors";

    let result = "";

    if 
    (userChoice === "scissors" && computerChoice === "paper") {
    console.log("You Win!"); 
    } else if (userChoice === "scissors" && computerChoice === "rock") {
    console.log("You Lose!");
    } else if (userChoice === "scissors" && computerChoice === "scissors") {
    console.log("It is a Tie!");
    }
    console.log (computerChoice);
}




