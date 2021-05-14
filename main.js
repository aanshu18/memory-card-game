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
const cardsChosen = [];
const cardsChosenId = [];
const cardsWon = [];



function createBoard() {
    
    cardsArray.sort((a,b)=>0.5 - Math.random());
    console.log(cardsArray);
    for (let i = 0; i < (cardsArray.length); i++) {
        let card = document.createElement("img");
        card.classList.add("card");
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id',i);
       card.addEventListener('click',flipCard);
        
        grid.appendChild(card);

 }
}

function flipCard(){
    let cardId = this.getAttribute('data-id');

    console.log(cardId);

    cardsChosen.push(cardsArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src',cardsArray[cardId].img);
    if(cardsChosen.length === 2){
        setInterval(checkMatch(),500);
    }



}

function displayCardImage(cardId){



}

function checkMatch(){

    if(cardsChosen[0] == cardsChosen[1]){
            cardsWon.push(cardsChosen[0]);
    }

    else{
    //unflip both cards back to covered face


    }
   //checkScore();
}


function checkScore(){

    if(cardsWon.length === cardsArray.length){


    }

}
//unflip
//checl result 
//random input 
//flip cards
//calculate and display score


createBoard();
