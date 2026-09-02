let humanScore = 0;
let computerScore = 0;
const playButton = document.querySelector("#playGame");
const scoreText = document.querySelector("#score");
const winnerText = document.querySelector("#winner");

playButton.addEventListener("click", playGame);

function playGame(){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        scoreText.textContent = humanScore + " - " + computerScore;
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
}

function getHumanChoice(){
    let choice = prompt("Kies Blad, Steen of Schaar").toLowerCase();
    if(choice === "blad"){
        return 1;
    } else if (choice === "schaar"){
        return 2
    } else {
        return 3
    }
}

function getComputerChoice(){
    let choice = Math.random();
    if(choice <= 0.33){
        console.log("Computer kiest steen");
        return 3;
    } else if(choice > 0.33 && choice < 0.66){
        console.log("Computer kiest schaar");
        return 2;
    } else {
        console.log("Computer kiest blad");
        return 1;
    }
    
}




