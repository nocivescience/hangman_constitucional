const articlesEl=[
    [
        'democratico',
        '1° Chile es un Estado social y democrático de derecho. Es plurinacional, intercultural, regional y ecológico.'
    ],
    [
        'republica',
        '2° Se constituye como una república solidaria.'
    ],
    [
        'igualdad',
        '2° Reconoce como valores intrínsecos e irrenunciables la dignidad, lalibertad, la igualdad sustantiva de los seres humanos y su relación indisoluble con la naturaleza.'
    ],
    [
        'individuales',
        '3° La protección y garantía de los derechos humanos individuales y colectivos son el fundamento del Estado y orientan toda su actividad.'
    ]
];
const descriptionEl = document.querySelector('.description');
const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

let selectedWord = articlesEl[Math.floor(Math.random() * articlesEl.length)][0];

const correctLetters = [];
const wrongLetters = [];

// Show hidden word
function showDescription() {
    descriptionEl.innerText = articlesEl[Math.floor(Math.random() * articlesEl.length)][1];
}
showDescription();
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split('')
      .map(
        letter => `
          <span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
          </span>
        `
      )
      .join('')}
  `;

  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations! You won! 😃';
    popup.style.display = 'flex';
  }
}

// Update the wrong letters
function updateWrongLettersEl() {
  // Display wrong letters
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`).join('')}
  `;

  // Display parts
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = 'block';
    } else {
      part.style.display = 'none';
    }
  });

  // Check if lost
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = 'Unfortunately you lost. 😕';
    popup.style.display = 'flex';
  }
}

// Show notification
function showNotification() {
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}

// Keydown letter press
window.addEventListener('keydown', e => {
  // console.log(e.keyCode);
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});

// Restart game and play again
playAgainBtn.addEventListener('click', () => {
  //  Empty arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);

  selectedWord = articlesEl[Math.floor(Math.random() * articlesEl.length)][0];
  displayWord();

  updateWrongLettersEl();

  popup.style.display = 'none';
});

displayWord();
