"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const scoreEl = document.querySelector(".score");
let score = 20;
let highScore = 0;

const highScoreEl = document.querySelector(".highscore");

const messageEl = document.querySelector(".message");
const numberEl = document.querySelector(".number");

const bodyEl = document.querySelector("body");
const guessEl = document.querySelector(".guess");

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  
  // There is no input
  if (!guess) {
    messageEl.textContent = "⚠ No Number";
    
    // The value is out of range
  } else if (guess > 20 || guess < 1) {
    messageEl.textContent = "⚠ Out of range";
    
    // The guess is correct
  } else if (guess === secretNumber && score > 0) {
    messageEl.textContent = "🎉 Correct Number!";
    numberEl.textContent = guess;
    
    if(highScore < score){
      highScore = score;
      highScoreEl.textContent = score;
    }
    
    
    numberEl.style.width = "30rem";
    
    bodyEl.style.backgroundColor = "#60b347";
    
    guessEl.style.backgroundColor = "#eee";
    guessEl.style.color = "#222";
    
    // The guess isn't correct
  } else {
    // The score is greater than 1
    if (score > 1) {
      scoreEl.textContent = --score;
      
      // the guess is higher
      if (guess > secretNumber) {
        messageEl.textContent = "📈 Too high!";
        
        // the guess is lower
      } else {
        messageEl.textContent = "📉 too low!";
      }
      
      // Game over
    } else {
      messageEl.textContent = "☠ GAME OVER";
    }
  }
});


document.querySelector('.again').addEventListener('click', function(){
  
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  bodyEl.style.backgroundColor = "#222";
  
  score = 20;
  scoreEl.textContent = "20";
  
  guessEl.style.backgroundColor = "#222";
  guessEl.style.color = "#eee";
  guessEl.value = "";
  
  numberEl.style.width = "15rem";
  numberEl.textContent = "?";
  
  messageEl.textContent = "Start guessing...";
});