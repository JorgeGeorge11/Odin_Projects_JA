console.log("hello world");
let uScore = 0
let cScore = 0

function GetComputerChoice(){
    var min = 1; // Minimum value (inclusive)
    var max = 3; // Maximum value (inclusive)
    var randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
    

    if (randomInteger == 1){
        return "Rock"
    } else if (randomInteger == 2){
        return "Scissors"
    } else {
        return "Paper"
    }
}

function ChoiceGame(user, comp){
    if(user == "Rock" && comp == "Rock"){
        console.log("Tie")
    } else if (user == "Rock" && comp == "Scissors"){
        console.log("User wins")
        uScore++
    } else if (user == "Rock" && comp == "Paper"){
        console.log("User lost")
        cScore++
    } else if (user == "Scissors" && comp == "Rock"){
        console.log("User lost")
        cScore++
    } else if (user == "Scissors" && comp == "Paper"){
        console.log("User wins")
        uScore++
    } else if (user == "Scissors" && comp == "Scissors"){
        console.log("Tie")
        
    } else if (user == "Paper" && comp == "Rock"){
        console.log("User wins")
        uScore++
    } else if (user == "Paper" && comp == "Scissors"){
        console.log("User lost")
        cScore++
    } else if (user == "Paper" && comp == "Paper"){
        console.log("Tie")
        
    } 
}

function Game(){
    userSelection = prompt("Please choose between Rock, Paper or Scissors")
    
    compSelection = GetComputerChoice();

    ChoiceGame(userSelection, compSelection)

    if( uScore >= 5){
        console.log("User reach a score of 5, user wins")
        uScore = 0
        cScore = 0
    } else if (cScore >= 5){
        console.log("Computer reach a score of 5, user lost")
        uScore = 0
        cScore = 0
    }

    


}

Game();