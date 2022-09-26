/*function getAverage(a,b){
    var average = (a + b)/2   //local var
    console.log(average)
    return average
}
var myResult = getAverage(7, 11)  //global var
console.log(`The average is ${myResult}`)

var str = "hello"
var str2 = str.slice(2)// slice the word out
console.log(str2)
var num = [87,3,34,2,1,5,7,8,9]
var num1 = num.sort()



var myDate = new Date()
console.log(myDate)

var birthday = new Date(2000, 9, 15, 12, 10, 5)
console.log(birthday.getMonth())
console.log(birthday.getDay())
console.log(birthday.getDate())
console.log(birthday.getHours())
console.log(birthday.getTime())
console.log(birthday)

let put = document.getElementById("para") 
put.innerHTML = "hi"
put.style.color ="red"
let child = put.getElementsByTagName("li")[0]
console.log(child)
var change = document.getElementById("color")
var colors =["red","green","blue","pink"]
var counter = 0
function changeColor(){
    if(counter >= colors.length){
        counter = 0
    }
    change.style.background = colors[counter]
    counter++
}
var myTimer = setInterval(changeColor, 3000)
change.onclick = function(){
    clearInterval(myTimer)
    change.innerHTML = "timer stopped"
}*/

const cards = document.querySelectorAll('.memory-card')
let hasFlippedCard = false
let lockBoard = false
let firstCard, secondCard




function flipCard(){
    if(lockBoard) return
    if(this === firstCard) return
    this.classList.toggle('flip')

    if (!hasFlippedCard) {
        hasFlippedCard = true
        firstCard = this
        //console.log({hasFlippedCard, firstCard})
        return
    }
       // hasFlippedCard = false
        secondCard = this
        checkForMatch()
        // console.log(firstCard.dataset.framework)
        // console.log(secondCard.dataset.framework)
        
    
}
function checkForMatch(){
    let isMatch = firstCard.dataset.framework ===secondCard.dataset.framework
    isMatch ? disableCard() : unFlipCards()
    //do they match???
   /* if () {
        //it's matched
        // firstCard.removeEventListener('click', flipCard)
        // secondCard.removeEventListener('click', flipCard)
        disableCard()
    } else {
        /*setTimeout(()=>{
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        }, 1500)
        unFlipCards()
    }*/
}
function disableCard(){
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
    resetBoard()
}
function unFlipCards() {
    lockBoard = true
    setTimeout(()=>{
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
       // lockBoard = false
       resetBoard()
        }, 1500)
}
function resetBoard(){
    hasFlippedCard = false
    lockBoard = false
    firstCard = null
    secondCard = null
}
(function shuffle(){
    cards.forEach(card =>{
        let randomPos = Math.floor(Math.random() * 12)
        card.style.order = randomPos
    })
})()
cards.forEach(card => card.addEventListener('click', flipCard));