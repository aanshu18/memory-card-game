const cardsArray = [{
        name: "cheeseburger",
        img: 'images/cheeseburger.png'
    },
    {
        name: "fries",
        img: 'images/fries.png'
    },
    {
        name: "hotdog",
        img: 'images/hotdog.png'
    },
    {
        name: "ice-cream",
        img: 'images/ice-cream.png'
    },
    {
        name: "milkshake",
        img: 'images/milkshake.png'
    },
    {
        name: "pizza",
        img: 'images/pizza.png'
    },{
        name: "cheeseburger",
        img: 'images/cheeseburger.png'
    },
    {
        name: "fries",
        img: 'images/fries.png'
    },
    {
        name: "hotdog",
        img: 'images/hotdog.png'
    },
    {
        name: "ice-cream",
        img: 'images/ice-cream.png'
    },
    {
        name: "milkshake",
        img: 'images/milkshake.png'
    },
    {
        name: "pizza",
        img: 'images/pizza.png'
    },
];

const grid = document.querySelector(".grid");
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

function createBoard() {
    
    cardsArray.sort((a,b)=>0.5 - Math.random());
    for (let i = 0; i < (cardsArray.length); i++) {
        let card = document.createElement("img");
        card.classList.add("card");
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard);
        
        grid.appendChild(card);

 }
}

function checkScore(){

    if(cardsWon.length === cardsArray.length/2){
    alert("You won");
    }

}

function flushChosenArray(){ 
    cardsChosen = [];
    cardsChosenId = [];
}

function checkMatch(){
    console.log(cardsChosen[0] + " "+ cardsChosen[1])
        if(cardsChosen[0] === cardsChosen[1]){
            alert("hooray! a match is found!");
            //console.log(cardsChosen[0].cardsChosen[1]);
            cardsWon.push(cardsChosen[0]);
            flushChosenArray();
            checkScore();
        }
    
        else{
            let cards = document.querySelectorAll("img");
            cards[cardsChosenId[0]].setAttribute('src',"images/blank.png");
            cards[cardsChosenId[1]].setAttribute('src',"images/blank.png"); 
            flushChosenArray();
        }
}

function flipCard(){
    //this
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardsArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src',cardsArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkMatch,1000);
    }
}

createBoard();
