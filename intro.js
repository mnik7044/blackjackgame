
let cards=[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
    let randomNumber =   Math.floor( Math.random()*13 ) + 1
    if(randomNumber> 10)
    {
        return 10;
    }
    if(randomNumber===1)
    {
        return 11;
    }
    else{
        return randomNumber;
    }

}

console.log(sumEl)

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard()
    cards=[firstCard,secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " 

    for(let i = 0 ; i< cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }


sumEl.textContent = "Sum: " + sum
if(sum<=20) 
{
    message = "Do you still wanna draw"
}
else if(sum ===21) 
{
    message = "You won a blackjack"
    hasBlackJack = true;

}
else{
    message = "You are out sorry!"
    isAlive= false
}
messageEl.textContent = message
}
function newCard(){
    let card = getRandomCard()
    sum+= card
    cards.push(card)
    renderGame()
}

//Cash Out 

