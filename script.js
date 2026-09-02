let humanScore = 0;
let computerScore = 0;
const keuzeDiv = document.querySelector(".keuze");
const schaarButton = document.querySelector("#schaar");
const steenButton = document.querySelector("#steen");
const bladButton = document.querySelector("#blad");
const scoreText = document.querySelector("#score");
const winnerText = document.querySelector("#winner");
const robotKeuze = document.querySelector("#robotKeuze");
keuzeDiv.addEventListener("click", (event) => playGame(event.target.value));

function playGame(choice){
        const humanChoice = getHumanChoice(choice);
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
   }

function playRound(humanChoice, computerChoice){
    if(humanChoice-computerChoice===-1 || humanChoice-computerChoice===2){
        computerScore++;
    } else if(humanChoice-computerChoice===1 || humanChoice-computerChoice===-2){
        humanScore++;
    } else {
    }
    scoreText.textContent = humanScore + " - " + computerScore;
    if(humanScore == 5){
        winnerText.textContent = "Jij wint!";
        humanScore = 0;
        computerScore = 0;
    } else if(computerScore == 5){
        winnerText.textContent = "De computer wint!";
        humanScore = 0;
        computerScore = 0;
    }
}

function getHumanChoice(choice){
    let input = choice.toLowerCase();
    if(input === "blad"){
        return 1;
    } else if (input === "schaar"){
        return 2
    } else {
        return 3
    }
}

function getComputerChoice(){
    let choice = Math.random();
    if(choice <= 0.33){
        robotKeuze.textContent = "Computer kiest steen";
        return 3;
    } else if(choice > 0.33 && choice < 0.66){
        robotKeuze.textContent = "Computer kiest schaar";
        return 2;
    } else {
        robotKeuze.textContent = "Computer kiest blad";
        return 1;
    }
    
}




