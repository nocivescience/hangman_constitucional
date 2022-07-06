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
]
let articleIndex = Math.floor(Math.random() * articlesEl.length);
function setTitle(title,description) {
    const recipient = document.createElement('h2');
    recipient.innerHTML = `
        ${title.split('').map(letter => `<span class ='letter'>${letter}</span>`).join('')}
    `;
    cardTitle.appendChild(recipient);
    cardText.innerHTML = description;
    const innerWord=cardTitle.innerText.replace(/\n/g,'');
    if(innerWord===articlesEl[articleIndex][0]){
        notificationEl.innerHTML = '<span class="badge badge-success">Correcto Apruebo</span>';
    }
}
function updateWrongletter(){

}
setTitle(articlesEl[articleIndex][0],articlesEl[articleIndex][1]);