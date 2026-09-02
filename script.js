let humanScore = 0;
let computerScore = 0;
playGame();

function playGame(){
    for(let i = 1; i <= 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(humanScore + " - " + computerScore);
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice-computerChoice===-1 || humanChoice-computerChoice===2){
        computerScore++;
        return console.log("De computer wint!");
    } else if(humanChoice-computerChoice===1 || humanChoice-computerChoice===-2){
        humanScore++;
       return console.log("Jij wint!");
    } else {
        return console.log("Gelijkspel");
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



