let firstCard=getRandomCard()
let secondCard = getRandomCard()
let cards=[firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = " "

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
    return  Math.floor( Math.random()*6 ) + 1

}

console.log(sumEl)

function startGame(){
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

