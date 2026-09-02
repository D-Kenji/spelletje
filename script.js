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
        winnerText.textContent = "De computer wint!";
    } else if(humanChoice-computerChoice===1 || humanChoice-computerChoice===-2){
        humanScore++;
       winnerText.textContent = "Jij wint!";
    } else {
        winnerText.textContent = "Gelijkspel";
    }
    scoreText.textContent = humanScore + " - " + computerScore;
    checkWinner();
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

function checkWinner(){
    if(humanScore == 5){
        alert("Jij heb het spel gewonnen!")
        humanScore = 0;
        computerScore = 0;
    } else if(computerScore == 5){
        alert("De computer heeft het spel gewonnen!");
        humanScore = 0;
        computerScore = 0;
    }
}



