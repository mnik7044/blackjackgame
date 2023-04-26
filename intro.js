let firstCard=10
let secondCard = 4
let cards=[firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = " "

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

console.log(sumEl)

function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " + cards[0]+ " " + cards[1] 

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
    let card = 7
    sum+= card
    cards.push(card)
    renderGame()
}

//Cash Out 

