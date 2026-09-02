let humanScore = 0;
let computerScore = 0;
const currentRound = 1;
playGame();

function playGame(rounds = prompt("Choose how many rounds you want to play.")){
    for(let i = 1; i <= rounds; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        rounds.toString;
        console.log("Ronde " + currentRound + "/" + rounds);
        currentRound + 1;
        
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




