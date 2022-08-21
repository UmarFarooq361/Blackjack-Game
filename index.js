
let player = {
    name:"umar",
    price:300
}
let card=[]
let sum=0
let isAlive = false
let hasBlackjack=false
let message=""

let cardEl=document.getElementById("card-el")
let sumEl=document.getElementById("sum-el")
let messageEl=document.getElementById("message-el")
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name + " : $ "+player.price

function randomCard(){
    let randomNumber=Math.floor(Math.random() * 13)+1
    if(randomNumber>10){ return 10 }
    else if(randomNumber === 1){ return 11 }
    else {return randomNumber}
}

function startGame()
{
    isAlive=true
    let firstCard=randomCard()
    let secondCard=randomCard()
    card=[firstCard,secondCard]
    sum=firstCard + secondCard
    renderGame()
}
function renderGame()
{
    cardEl.textContent="cards: "
    for(let i=0; i<card.length; i++)
    {
        cardEl.textContent+=card[i] + " "
    }

    sumEl.textContent="Sum : "+ sum
    if(sum>21){
        message = "You are out of game."
        isAlive=false
    }
    else if(sum===21){
        message = "You have got Blackjack."
        hasBlackjack=true
    }
    else{
        message = "Do you want to draw new card?"
    }
    messageEl.textContent=message
}

function newCard()
{
    if(isAlive===true && hasBlackjack===false){
        let newCard = randomCard()
        sum+=newCard
        card.push(newCard)
        renderGame()
    }
}