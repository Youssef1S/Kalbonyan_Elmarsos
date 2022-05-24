"use strict";

// Selecting elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let currentScore, activePlayer, playing, score;

// Starting conditions
const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");

  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score = [0, 0];

  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");

  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

const switchPlayer = function () {
  currentScore = 0;

  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  activePlayer = activePlayer == 0 ? 1 : 0;

  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

init();
// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    score[activePlayer] += currentScore;
    const scoreEl = document.getElementById(`score--${activePlayer}`);
    scoreEl.textContent = score[activePlayer];
    if (score[activePlayer] >= 100) {
      playing = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      currentScore;

      diceEl.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
