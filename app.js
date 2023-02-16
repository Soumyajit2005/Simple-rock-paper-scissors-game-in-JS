const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.getElementsByClassName('btn');
let userChoice;
let computerChoice;
let result;


Array.from(possibleChoices).forEach(possibleChoice => {
    possibleChoice.addEventListener('click', (e) =>{
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResult();
    })    
});

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    computerChoice = possibleChoices[randomNumber].id;
    
    computerChoiceDisplay.innerHTML = computerChoice;
    
}

function getResult(){
    if(computerChoice == userChoice){
        result = "It's a draw";
    }
    else if(computerChoice==="rock" && userChoice=="paper"){
        result = "You win!";
    }
    else if(computerChoice==="rock" && userChoice=="scissors"){
        result = "You lose!";
    }
    else if(computerChoice==="paper" && userChoice=="rock"){
        result = "You lose!";
    }
    else if(computerChoice==="paper" && userChoice=="scissors"){
        result = "You win!";
    }
    else if(computerChoice==="scissors" && userChoice=="paper"){
        result = "You lose!";
    }
    else if(computerChoice==="scissors" && userChoice=="rock"){
        result = "You win!";
    }

    resultDisplay.innerHTML = result;

}