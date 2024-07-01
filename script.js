const images = [
    "Images/Apple.jpeg",
    "Images/avocado.jpg",
    "Images/banana.jpg",
    "Images/Coconut.jpg",
    "Images/Grape.jpg",
    "Images/Lemon.jpg",
    "Images/Orange.jpg"
]

const minCards = 4;
const maxCards = 14;


let cheap = [];

let qtdCartas = parseInt(prompt(`Numero de cartas, é necessario escolhar um número Par de ${minCards} a ${maxCards}`))

while (isQtdvalidarCartas() === false) {
    qtdCartas = prompt(`Você escolheu um número invalido, escolha um número Par de ${minCards} a ${maxCards}`) * 1;
}

function isQtdvalidarCartas() {
    const isPar = (qtdCartas % 2 === 0);
    const isValidNumber = (qtdCartas >= minCards && qtdCartas <= maxCards);

    return isPar && isValidNumber;
}

createCheapCards();


function createCheapCards() {
    for (let i = 0; i < qtdCartas / 2; i++) {
        const card = createCard(i);

        cheap.push(card);
        cheap.push(card);
    }

    cheap.sort(comparador);
}

function comparador(){
    return Math.random() -0.5;
}

function createCard(indiceCarta) {

    const fruits = images[indiceCarta]

    return `
    
        <div class="Card" onclick="cardSelected(this)">
          <div class="face-card front">
             <img src="Images/florest.jpg" alt="front part card">
          </div>
          <div class="face-card back">
             <img src="${fruits}" alt="${fruits}">
          </div>
        </div>
    
    `
}

renderCard();


function renderCard(){
    const container = document.querySelector(".container")

    for(let i = 0; i < cheap.length; i++){
        const card = cheap[i];
        container.innerHTML = container.innerHTML +card;
    }
}

let firstCard = null;
let secondCard = null;

function cardSelected(divCard){
    divCard.classList.add("selected")
    if(firstCard === null){
        firstCard = divCard;
    } else{
        secondCard = divCard;
        validateSameCard();
    }
}

function validateSameCard(){
    if(firstCard.innerHTML === secondCard.innerHTML){
        firstCard.classList.add("finished");
        secondCard.classList.add("finished");

        firstCard = null;
        secondCard = null;

        verifyFinishGame();
    } else{
        setTimeout(untapCard, 1000);
    }
}

function verifyFinishGame(){
    const finishedCards = document.querySelectorAll(".finalizada")

    if(finishedCards.length === qtdCartas) {
        alert("You Won!")
    }
}

function untapCard(){
    firstCard.classList.remove("selected");
    secondCard.classList.remove("selected");

    firstCard = null;
    secondCard = null;
}





