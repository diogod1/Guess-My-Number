'use strict';

let secretnumber = Math.trunc(Math.random() * 45) + 1; //random secretnumber to 45
let score = 20;
let highscore = 0;

console.log(secretnumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 0) {
    if (!guess) {
      //WHEN THERE'S NO NUMBER
      document.querySelector('.message').textContent = 'No Number!';
    } else if (guess == secretnumber) {
      //WHEN PLAYER WINS
      document.querySelector('.message').textContent = 'Corret number!';
      //Styling body
      document.querySelector('body').style.backgroundColor = '#60b347';
      //Styling the widht box number
      document.querySelector('.number').style.width = '30rem';
      //Shows the number to the player when win's
      document.querySelector('.number').textContent = secretnumber;
      //SET AND CHECK HIGHSCORE
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess > secretnumber) {
      //WHEN NUMBER IS TO HIGH
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secretnumber) {
      //WHEN NUMBER IS TOO LOW
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    //WHEN YOU LOSE THE GAME
    document.querySelector('.message').textContent = 'You lost!!!';
    document.querySelector('body').style.background = '#ff3f3f';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //RESET ALL STYLES AND FIELDS
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  //CHANGE NUMBER
  secretnumber = Math.trunc(Math.random() * 45) + 1;
  //RESET SCORE
  score = 20;
  document.querySelector('.score').textContent = 20;
  console.log(secretnumber);
});
