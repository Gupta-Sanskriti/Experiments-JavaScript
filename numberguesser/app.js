/*THINGS WE NEED IN THIS GAME:
1. player must guess a number between a min and a max no
2. player gets a certain amount of guesses
3. notify player of guesses remaining.
4. notify player of the correct answer if loose
5. let player to play again. 
*/

// game value:
let min = 1,
  max = 10,
  winningNum = getRandomNum(min,max),
  guessLeft = 3;

// UI Element:
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');

// assign the no.
minNum.textContent = min;
maxNum.textContent = max;

// PLAY AGAIN?  EVENT LISTNER:
game.addEventListener('mousedown',function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
    guessInput.value = '';
  }
  
})

// listen for the event 
guessBtn.addEventListener('click',function(){
  let guess;
  guess = parseInt(guessInput.value);

  // validate :
  if(isNaN(guess) || guess< min || guess>max){
    setMessage(`please enter a numbeer between ${min} and ${max}`,'red');
  }else{
    // check if won
    if(guess === winningNum){
      gameOver(true,`${guess} is correct. YOU WIN!`);
    }else{
      // wrong number
      guessLeft -= 1;

      if(guessLeft === 0 ){
        gameOver(false,`Game Over,you lost. the correct number was ${winningNum}`);
      }else {
        // game continues -answer wrong

        // change border color:
        guessInput.style.borderColor = 'red';

        // clear input
        guessInput.value = '';

        // tell message to the user:
        setMessage(`${guess} is not correct, ${guessLeft} guesses left`,'red');
      }
    }
  }
    
  


})


// getRandomNum()
function getRandomNum(){
  return Math.floor(Math.random()*(max-min+1)+min);
}

// setMessage()
function setMessage(msg,color){
  message.textContent = msg;
  message.style.color = color;
}

// gameOver()
function gameOver(won,msg){
  let color;
  won === true ? color = 'green' : color = 'red';
   
  // disable input 
  guessInput.disabled = true;

  // change border color:
  guessInput.style.borderColor = color;
  // set text color:
  message.style.color = color;

  // set message :
  setMessage(msg,color);

  // play Again?:
  guessBtn.value = 'play again';
  guessBtn.className += 'play-again';
}