

function getComputerChoice(){

    const choice = Math.floor(Math.random(3) * 3);
    
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else if (choice == 2) {
        return "scissor";
    } else {
        return "invalid"
    }
}


function getHumanChoice() {

    const hChoice = prompt("Enter rock, paper or scissor");
    hChoice.toLowerCase;


    return hChoice; 
}





function playGame() {
    let humanScore = 0;
    let compScore = 0;

    function playround(humanChoice, computerChoice) {

        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                compScore += 1;
                console.log("You lose! " + computerChoice + " beats " + humanChoice);
            } else if (computerChoice == "scissor") {
                humanScore += 1;
                console.log("You win! " + humanChoice + " beats " + computerChoice);
            } else {
                console.log("its a draw");
            }

        } else if (humanChoice == "paper") {

            if (computerChoice == "scissor") {
                compScore += 1;
                console.log("You lose! " + computerChoice + " beats " + humanChoice);
            } else if (computerChoice == "rock") {
                humanScore += 1;
                console.log("You win! " + humanChoice + " beats " + computerChoice);
            } else {
                console.log("its a draw");
            }

        } else if (humanChoice == "scissor") {

            if (computerChoice == "rock") {
                compScore += 1;
                console.log("You lose! " + computerChoice + " beats " + humanChoice);
            } else if (computerChoice == "paper") {
                humanScore += 1;
                console.log("You win! " + humanChoice + " beats " + computerChoice);
            } else {
                console.log("its a draw");
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        playround(getHumanChoice(), getComputerChoice());
    }
    console.log(humanScore, compScore);

}

playGame();
