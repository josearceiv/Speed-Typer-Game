const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const finalScore = document.getElementById('finalscore');
const settingsForm = document.getElementById('settings-form');

// List of words for game
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving'
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Focus on text on start
text.focus();

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Settings select
let difficulty = "easy";
settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
});

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.textContent = randomWord;
}

// Update score
function updateScore() {
  score++;
  scoreEl.textContent = score;
}

// Game over, show end screen
function gameOver() {
  finalScore.textContent = `Your final score is ${score}`;
  endgameEl.style.display = 'flex';
}

// Update time
function updateTime() {
  time--;
  timeEl.textContent = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
}

// Start counting down
const timeInterval = setInterval(updateTime, 1000);


addWordToDOM();

// Event listeners

// Typing
text.addEventListener('input', e => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = '';

    if (difficulty === 'hard') {
      time += 2;
    } else if (difficulty === 'medium') {
      time += 3;
    } else {
      time += 5;
    }

    updateTime();
  }
});

// let topic = normal;

// player1Div.addEventListener("click", function() {
//   topic = player1;
// })

// const player1 = {
//   saquestions: ["", "", "", "", ""],
//   singleanswers: ["", "", "", "", ""],
//   daquestions: ["", "", "", "", ""],
//   doubleanswers: ["", "", "", "", ""]
// }

// // Generate random word from array
// function getRandomQuestion() {
//   randomNumber = Math.floor(Math.random());
//   if (randomNumber == 0) {
//     questionNumber = Math.floor(Math.random() * topic.squestions.length);
//     correctAnswer = [topic.singleanswers[questionNumber]];
//     return topic.saquestions[questionNumber];
//   }
//   else {
//     questionNumber = Math.floor(Math.random() * topic.daquestions.length);
//     correctAnswer = [topic.doubleanswers[questionNumber], topic.doubleanswers[questionNumber]];
//     return topic.daquestions[questionNumber];
//   }

// }

// // Add word to DOM
// function addWordToDOM() {
//   word.textContent = getRandomQuestion();
// }

// text.addEventListener('input', e => {
//   const insertedText = e.target.value;

//   for answer in correctAnswer {
//     if (insertedText.toLowerCase() === answer) {
//       break;
//     }
//   }

// }
