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
showDescription(articlesEl[articleIndex][1]);
function setTitle(title) {
    const recipient = document.createElement('h2');
    recipient.innerHTML = `
        ${title.split('').map(letter => {
            const letterRecipient = document.createElement('span');
            letterRecipient.innerHTML = letter;
            if(correctLetters.includes(letter)){
                letterRecipient.classList.add('show-letter');
            }
    }).join('')}
    `;
    cardTitle.appendChild(recipient);
    const innerWord=cardTitle.innerText.replace(/\n/g,'');
    if(innerWord===articlesEl[articleIndex][0]){
        notificationEl.innerHTML = '<span class="badge badge-success">Correcto Apruebo</span>';
    }
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
        if(articlesEl[articleIndex][0].includes(letter)&&!correctLetters.includes(letter)){
            correctLetters.push(letter);
            setTitle(articlesEl[articleIndex][0],articlesEl[articleIndex][1]);
        }else{
            wrongLetters.push(letter);
            showNotification(`${letter} no es una letra`);
        }
    }
});
setTitle(articlesEl[articleIndex][0]);