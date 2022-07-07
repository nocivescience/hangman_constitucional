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
        'dignidad',
        '3° Reconoce como valores intrínsecos e irrenunciables la dignidad, la libertad, la igualdad sustantiva de los seres humanos y su relación indisoluble con la naturaleza.'
    ],
    [
        'diversos',
        '5° 1 Chile reconoce la coexistencia de diversos pueblos y naciones en el marco de la unidad del Estado.'
    ],
    [
        'indígenas',
        '5° 2 Son pueblos y naciones indígenas preexistentes los Mapuche, Aymara,  etc...'
    ],
    [
        'garantizar',
        '5° 3 Es deber del Estado respetar, promover, proteger y garantizar el ejercicio de la libre determinación, los derechos colectivos e individuales de los cuales '
    ],
    [
        'mujeres',
        '6° 1 El Estado promueve una sociedad donde mujeres, hombres, diversidades y disidencias sexuales y de género participen en condiciones de igualdad'
    ],
    [
        'Estado',
        '6° 2 Todos los órganos colegiados del Estado, los autónomos constitucionales, los superiores y directivos de la Administración'
    ],
    [
        'autónomas',
        '7° Chile está conformado por entidades territoriales autónomas y territorios especiales'
    ],
    [
        'conjunto',
        '8° Las personas y los pueblos son interdependientes con la naturaleza y forman con ella un conjunto inseparable.'
    ],
    [
        'religión',
        '9° El Estado es laico. En Chile se respeta y garantiza la libertad de religión y de creencias espirituales.'
    ],
    [
        'familias',
        '10° El Estado reconoce y protege a las familias en sus diversas formas, expresiones y modos de vida'
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
let randomIndex = Math.floor(Math.random() * articlesEl.length);
let selectedWord = articlesEl[randomIndex][0];
let selectedDescription = articlesEl[randomIndex][1];
const correctLetters = [];
const wrongLetters = [];

// Show hidden word
function showDescription(description) {
    descriptionEl.innerText = description;
}
function displayWord(word) {
  wordEl.innerHTML = `
    ${word
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
    finalMessage.innerText = 'Ganaste! 😃';
    popup.style.display = 'flex';
  }
}

// Update the wrong letters
function updateWrongLettersEl() {
  // Display wrong letters
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Mal</p>' : ''}
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
    finalMessage.innerText = 'Perdiste! 💩';
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
        displayWord(selectedWord);
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
  let randomIndex = Math.floor(Math.random() * articlesEl.length);
  selectedWord = articlesEl[randomIndex][0];
  selectedDescription = articlesEl[randomIndex][1];
  displayWord(selectedWord);
  showDescription(selectedDescription);
  updateWrongLettersEl();

  popup.style.display = 'none';
  console.log('hola');
});
displayWord(selectedWord);
showDescription(selectedDescription);