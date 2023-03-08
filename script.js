function getPcChoice() {
    let pcChoice = Math.floor(Math.random() * 3);
    if(pcChoice === 0){
        return "rock";
    }
    else if(pcChoice === 1){
        return "paper";
    }
    else if(pcChoice === 2 || pcChoice === 3){
        return "scissors";
    }
}

function roundWinner(userChoice){
    let pc = getPcChoice();
    let user = userChoice;
    if(user === pc){
        return "Draw!";
    } 
    else if(user === "paper" && pc === "rock"){
        return "You win! Paper beats rock!";
    } 
    else if(user === "rock" && pc === "scissors"){
        return "You win! rock beats scissors!";
    }
    else if(user === "scissors" && pc === "paper"){
        return "You win! scissors beats paper!";
    }
    else if(user === "scissors" && pc === "rock"){
        return "You lose! rock beats scissors!";
    }
    else if(user === "rock" && pc === "paper"){
        return "You lose! paper beats rock!";
    }
    else if(user === "paper" && pc === "scissors"){
        return "You lose! scissors beats paper!";
    }
}

const result = document.querySelector(".result");
const gameResult = document.createElement("div");

const pcScore = document.querySelector(".pcScore");
const playerScore = document.querySelector(".playerScore");
const userChoice = document.querySelector(".userChoice");

const finalResult = document.querySelector(".finalResult");

const playAgain = document.querySelector(".refreshPage");
playAgain.style.display = "none";

let pcScoreVar = 0;
let playerScoreVar = 0;

pcScore.textContent = pcScoreVar;
playerScore.textContent = playerScoreVar;
const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
    let roundWinnerVar =  roundWinner("rock");
    gameResult.textContent = roundWinnerVar;
    if(roundWinnerVar.charAt(4) === "w"){
        if(pcScoreVar < 5 && playerScoreVar < 5){
            playerScoreVar++;
        }
        playerScore.textContent = playerScoreVar;
    }
    else if(roundWinnerVar.charAt(4) === "l"){
        if(pcScoreVar < 5 && playerScoreVar < 5){
            pcScoreVar++;
        }
        pcScore.textContent = pcScoreVar;
    }
    if(pcScoreVar === 5){
        const finalResultText = document.createElement("div");
        finalResultText.textContent = "You lost!";
        finalResult.appendChild(finalResultText);
        playAgain.style.display = "block";
        result.style.display = "none";
        userChoice.style.display = "none";
    }
    if(playerScoreVar === 5){
        const finalResultText = document.createElement("div");
        finalResultText.textContent = "You won!";
        finalResult.appendChild(finalResultText);
        playAgain.style.display = "block";
        result.style.display = "none";
        userChoice.style.display = "none";
    }
    result.appendChild(gameResult);
});

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
    let roundWinnerVar = roundWinner("paper");
    gameResult.textContent = roundWinnerVar;
    if(roundWinnerVar.charAt(4) === "w"){
        if(pcScoreVar < 5 && playerScoreVar < 5){
            playerScoreVar++;
        }
        playerScore.textContent = playerScoreVar;
    }
    else if(roundWinnerVar.charAt(4) === "l"){
        if(pcScoreVar < 5 && playerScoreVar < 5){
            pcScoreVar++;
        }
        pcScore.textContent = pcScoreVar;
    }
    if(pcScoreVar === 5){
        const finalResultText = document.createElement("div");
        finalResultText.textContent = "You lost!";
        finalResult.appendChild(finalResultText);
        playAgain.style.display = "block";
        result.style.display = "none";
        userChoice.style.display = "none";
    }
    if(playerScoreVar === 5){
        const finalResultText = document.createElement("div");
        finalResultText.textContent = "You won!";
        finalResult.appendChild(finalResultText);
        playAgain.style.display = "block";
        result.style.display = "none";
        userChoice.style.display = "none";
    }
    result.appendChild(gameResult);
});

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
    let roundWinnerVar =  roundWinner("scissors");
    gameResult.textContent = roundWinnerVar;
    if(roundWinnerVar.charAt(4) === "w"){
        if(pcScoreVar < 5 && playerScoreVar < 5){
            playerScoreVar++;
        }
        playerScore.textContent = playerScoreVar;
    }
    else if(roundWinnerVar.charAt(4) === "l"){
        if(pcScoreVar < 5 && playerScoreVar < 5){
            pcScoreVar++;
        }
        pcScore.textContent = pcScoreVar;
    }
    result.appendChild(gameResult);
    if(pcScoreVar === 5){
        const finalResultText = document.createElement("div");
        finalResultText.textContent = "You lost!";
        finalResult.appendChild(finalResultText);
        playAgain.style.display = "block";
        result.style.display = "none";
        userChoice.style.display = "none";
    }
    if(playerScoreVar === 5){
        const finalResultText = document.createElement("div");
        finalResultText.textContent = "You won!";
        finalResult.appendChild(finalResultText);
        playAgain.style.display = "block";
        result.style.display = "none";
        userChoice.style.display = "none";
    }
});
