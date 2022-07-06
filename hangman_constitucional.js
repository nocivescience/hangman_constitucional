const cardTitle = document.querySelector('#card-title');
const cardText = document.querySelector('.card-text');
const notificationEl = document.querySelector('.notification');
const correctLetters=[];
const wrongLetters=[];
const articlesEl=[
    [
        'democratico',
        '1° Chile es un Estado social y democrático de derecho. Es plurinacional, intercultural, regional y ecológico.'
    ],
    [
        'republica',
        '2° Se constituye como una república solidaria.'
    ]
];
let articleIndex = Math.floor(Math.random() * articlesEl.length);
function showDescription(description) {
    cardText.innerHTML = description;
}
setTitle(articlesEl[articleIndex][0]);
showDescription(articlesEl[articleIndex][1]);
function setTitle(title) {
    const wordRecipient = document.createElement('h2');
    wordRecipient.innerHTML = `
        ${
            title.split('')
            .map(letter => {
                const letterEl = document.createElement('span');
                letterEl.classList.add('letter');
                letterEl.innerHTML = letter;
            })
        }
    `;
    cardTitle.appendChild(wordRecipient);
}
function showNotification(message) {
    notificationEl.classList.add('show');
    setTimeout(() => {
        notificationEl.classList.remove('show');
    }, 2000);
};
window.addEventListener('keydown', e => {
    let letter=e.key;
    if(
        letter==='a'||
        letter==='b'||
        letter==='c'||
        letter==='d'||
        letter==='e'||
        letter==='f'||
        letter==='g'||
        letter==='h'||
        letter==='i'||
        letter==='j'||
        letter==='k'||
        letter==='l'||
        letter==='m'||
        letter==='n'||
        letter==='o'||
        letter==='p'||
        letter==='q'||
        letter==='r'||
        letter==='s'||
        letter==='t'||
        letter==='u'||
        letter==='v'||
        letter==='w'||
        letter==='x'||
        letter==='y'||
        letter==='z'
    ){

    }
});