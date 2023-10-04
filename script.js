'use strict';
document.querySelector('#score--0').textContent = 0;
document.querySelector('#score--1').textContent = 0;
const dice = document.querySelector('.dice');
dice.style.display = 'none';

const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const buttonNewGame = document.querySelector('.btn--new');

const current1 = document.getElementById('current--0');
const current2 = document.getElementById('current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

let randomDiceNumber = 0;
let currentScore = 0;
let activePlayer = 0;
let totalScore = 0;
let score = [0, 0];
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

let arrayOfImages = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];

buttonRoll.addEventListener('click', function () {
  if (playing) {
    randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(randomDiceNumber);
    if (randomDiceNumber != 1) {
      currentScore += randomDiceNumber;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      dice.style.display = 'inline';
      dice.src = arrayOfImages[randomDiceNumber - 1];
    } else if ((randomDiceNumber = 1)) {
      switchPlayer();
      dice.style.display = 'inline';
      dice.src = arrayOfImages[0];
      totalScore = currentScore + randomDiceNumber;
    }
  }
});

buttonHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 15) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      console.log(`Player ${activePlayer} wins`);
    } else {
      document.querySelector(`#score--${activePlayer}`).textContent =
        score[activePlayer];
      switchPlayer();
    }
  }
});

buttonNewGame.addEventListener('click', function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  const dice = document.querySelector('.dice');
  dice.style.display = 'none';
  activePlayer = 0;
  currentScore = 0;
  totalScore = 0;
  playing = true;
  score = [0, 0];
});
