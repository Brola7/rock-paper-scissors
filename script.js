function getpcchoice() {
    let pcchoice = Math.floor(Math.random() * 3);
    if(pcchoice === 0){
        return "rock";
    }
    else if(pcchoice === 1){
        return "paper";
    }
    else if(pcchoice === 2 || pcchoice === 3){
        return "scissors";
    }
}
function getuserchoice(){
    return prompt("enter rock, paper or scissors to play").toLowerCase();
}
function roundwinner(){
    let user = getuserchoice();
    let pc = getpcchoice();
    if(user === pc){
        return console.log("Draw!");
    } 
    else if(user === "paper" && pc === "rock"){
        return console.log("You win! Paper beats rock!");
    } 
    else if(user === "rock" && pc === "scissors"){
        return console.log("You win! rock beats scissors!");
    }
    else if(user === "scissors" && pc === "paper"){
        return console.log("You win! scissors beats paper!");
    }
    else if(user === "scissors" && pc === "rock"){
        return console.log("You lose! rock beats scissors!");
    }
    else if(user === "rock" && pc === "paper"){
        return console.log("You lose! paper beats rock!");
    }
    else if(user === "paper" && pc === "scissors"){
        return console.log("You lose! scissors beats paper!");
    }
    user = null;
    pc = null;
}
function fullgame(){
    for(let i = 0; i < 5; i++){
        roundwinner();
    }
}
fullgame();
