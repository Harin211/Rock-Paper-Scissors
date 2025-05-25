
console.log("hellow");

function getComputerChoice(){

    const choice = Math.floor(Math.random(3) * 3);
    console.log(choice);
}

function getHumanChoice() {

    const hChoice = prompt("Enter rock, paper or scissor");
    hChoice.toLowerCase;

    var num = -1;
    if (hChoice == "rock") {
        num =  0;
    } else if (hChoice == "paper") {
        num =  1; 
    } else if (hChoice == "scissor") {
        num =  2;
    }
    return num;
}

console.log(getHumanChoice());

let humanScore = 0;
let compScore = 0;

function playround(humanChoice, computerChoice) {
    
}
