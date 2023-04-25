let firstCard=10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = " "

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

console.log(sumEl)

function startGame(){
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard 

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
//Cash Out 

