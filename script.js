 let pScore = 0
 let cScore = 0
 gameReset = true
 const displayResults = document.querySelector('.results')
 const displayScores = document.querySelector('.scores')
 const displayFinalResults = document.querySelector('.finalResults')
 const displayReset = document.querySelector('.reset')

 displayScores.textContent = `Computer Score : ${cScore}  |  Player Score : ${pScore}`  

 function resetGame(){
    pScore =0
    cScore=0
    displayScores.textContent = `Computer Score : ${cScore}  |  Player Score : ${pScore}`
    displayResults.textContent = ''
    displayFinalResults.textContent = ''
    gameReset = true
    displayReset.textContent=''
}
 
//Funcion that announces the winner after 5 scores
function winnerAnnounce(computerScore, playerScore){
    if (computerScore>playerScore){
        console.log('PC Wins')
        displayFinalResults.textContent = `Computer is the Winner, You Lost!! Better Luck next time`
    }
    else {
        console.log('Player Wins')
        displayFinalResults.textContent = `You are the Winner, Computer Lost!! Congratulations`
    }
    gameReset = false
    displayReset.textContent = 'Please reset the Game to play another round!!'
    displayReset.appendChild(resetButton)
}


//Function that decides the winner
function playRound (computerChoice, playerChoice){
    let winner = null
    computerChoice= computerChoice.toUpperCase()
    playerChoice= playerChoice.toUpperCase()
    if (computerChoice===playerChoice){
        winner = 'Tie'
    }
    else if (computerChoice==='ROCK' && playerChoice==='SCISSOR'){ 
            winner =  'Computer'
    }
    else if (computerChoice==='PAPER' && playerChoice==='ROCK'){ 
        winner =  'Computer'
    }
    else if (computerChoice==='SCISSOR' && playerChoice==='PAPER'){ 
        winner =  'Computer'
    }
    else {
        winner= 'Player'
    }
    return winner
}

 // Function to get random computer choice
 function getComputerChoice() {
    const choices = ['Rock', 'Paper' , 'Scissor'];
    let random = Math.floor(Math.random()* choices.length);
    compChoice = choices[random];
    return compChoice;
}


function game (buttonChoice){
    let winner = (playRound(getComputerChoice(), buttonChoice))
    console.log(winner)
    if (winner==='Computer'){
        cScore++
        displayResults.textContent = `OutCome : ${winner} Wins`
    }
    if (winner==='Player'){
        pScore++
        displayResults.textContent = `OutCome : ${winner} Wins`
    }
    if (winner==='Tie'){
        displayResults.textContent = `OutCome : It's a Tie`
    }
    displayScores.textContent = `Computer Score : ${cScore}  |  Player Score : ${pScore}`
    if (cScore === 5 || pScore ===5){
        winnerAnnounce(cScore, pScore)
    } 
}

const buttons = document.querySelectorAll('button')
buttons.forEach(((button)=>{
    button.addEventListener('click', function(){ 
    if( gameReset===true){
        game(button.id)
    }
    else {
        console.log('Reset the game')
        displayReset.textContent = 'Please reset the Game to play another round!!'
        displayReset.appendChild(resetButton)
        return;
    }   
   });
}));

const resetButton = document.createElement('button')
resetButton.textContent = 'Reset'
resetButton.addEventListener('click', ()=>{
    resetGame()

})
