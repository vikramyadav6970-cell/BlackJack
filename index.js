let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")

let lostEl= document.getElementById("lost")

let player = {
    name: "vikram",
    chips: 500
}

function getRandomNumber(){
    // let card = Math.floor((Math.random())*10)+2
    let randomNumber= Math.floor(Math.random()*13)+1
    if(randomNumber >10){
        return 10
    }
    else if(randomNumber == 1){
        return 11
    }
    else{
        return randomNumber
    }
}

function startGame(){
    isAlive=true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    playerEl.textContent = player.name + ": ₹" + player["chips"]
    lostEl.src=""

    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent= `Sum: ${sum}`
if(sum<=20){
    message = "Do you want to draw another card"
}
else if(sum===21){
    message = "You got a BlackJack"
    hasBlackJack= true
}
else{
    message = "You are out of the game"
    isAlive = false;
    lostEl.src="images/lost.gif"
}
messageEl.textContent = message
}

function newCard(){
    if(isAlive=== true && hasBlackJack=== false){
        let card = getRandomNumber()
        sum+=card
        cards.push(card)
        renderGame()
    }
}