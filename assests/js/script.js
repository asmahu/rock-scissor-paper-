// Complete logic of game inside this function
const gameArea = () => {
    let playerScr = 0;
    let computerScr = 0;
    let moves = 0;
     // Function to
  const playGame = () => {
    const rockButton = document.querySelector('.rock');
    const paperButton = document.querySelector('.paper');
    const scissorButton = document.querySelector('.scissor');
    const playerOpt = [rockButton,paperButton,scissorButton];
    const computerOpt = ['rock','paper','scissors']
     // Function to start playing game
     playerOpt.forEach(option => {
        option.addEventListener('click',function(){
  
          const movesLeft = document.querySelector('.movesleft');
          moves++;
          movesLeft.innerText = `Moves Left: ${10-moves}`;
          
  
          const choiceNum = Math.floor(Math.random()*3);
          const computerChoice = computerOpt[choiceNum];
  
           // Function to check who wins
        winner(this.innerText,computerChoice)
        
        // Calling gameOver function after 10 moves
        if(moves == 10){
          gameover(playerOpt,movesLeft);
        }
      })
    })
    
  }
  // Function to decide winner
  const winner = (plyr,comp) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
    plyr = plyr.toLowerCase();
    comp = comp.toLowerCase();
    if(plyr === comp){
      result.textContent = 'Tie'
    }
    else if(plyr == 'Rock'){
      if(comp == 'Paper'){
        result.textContent = 'Computer Won';
        computerScr++;
        computerScoreBoard.textContent = computerScr;

      }else{
        result.textContent = 'Player Won'
        playerScr++;
        playerScoreBoard.textContent = playerScr;
      }
    }
    else if(plyr == 'scissors'){
      if(comp == 'rock'){
        result.textContent = 'Computer Won';
        computerScr++;
        computerScoreBoard.textContent = computerScr;
      }else{
        result.textContent = 'Player Won';
        playerScr++;
        playerScoreBoard.textContent = playerScr;
      }
    }
    else if(plyr == 'paper'){
      if(comp == 'scissors'){
        result.textContent = 'Computer Won';
        computerScr++;
        computerScoreBoard.textContent = computerScr;
      }else{
        result.textContent = 'Player Won';
        playerScr++;
        playerScoreBoard.textContent = playerScr;
      }
    }
  }

          
  