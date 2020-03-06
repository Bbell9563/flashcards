class Card {
  constructor(question, answer){
    this.question = question
    this.answer = answer
  }
}

var editBtn = document.getElementById("editButton")
var doneBtn = document.getElementById("doneButton")
var cardShow = document.getElementById("cardHolder")
var exitBtn = document.getElementById("exitButton")
var addBtn = document.getElementById("addButton")
var startBtn = document.getElementById("startButton")
var endBtn = document.getElementById("endButton")

editBtn.addEventListener("click", editAll)
doneBtn.addEventListener("click", updateAll)
exitBtn.addEventListener("click", exitEdit)
addBtn.addEventListener("click", createNewCard)
startBtn.addEventListener("click", showOne)
endBtn.addEventListener("click", showCards)

var card1 = new Card("What is 1+1", "2")
var card2 = new Card("How to tie your shoes", "you just don't")
var card3 = new Card("What function to use when get element out of an array", "filter")
var card4 = new Card("Whats the ways to declare a variable", "const, var, let")
var card5 = new Card("You can redeclare a let", "False")
var cardsArray = [card1, card2,card3,card4,card5]

function editAll(){
  editBtn.style.display = "none"
  addBtn.style.display = "block"
  doneBtn.style.display = "block"
  exitBtn.style.display = "block"
  cardShow.innerHTML = ""
  cardsArray.forEach((e, i) => {
    cardShow.innerHTML += 
      `<div>
        <label>Question:</label>
        <input class= "inputField" type="text"id = "question${i}" value="${e.question}">
        <label>Answer:</label>
        <input class= "inputField" type="text" id = "answer${i}" value="${e.answer}">
        <h1 class = "button" id= "delete${i}" onclick = "deleteCard(${i})">Delete This Question</h1>
      </div>`
  })
}

function deleteCard(i){
  cardsArray.splice(i,1)
  editAll()
}

function flipCard(i){
  var card = document.getElementById(`q${i}`)
  if(card.innerHTML == cardsArray[i].question){
    card.innerHTML = cardsArray[i].answer
  }
  else{card.innerHTML = cardsArray[i].question;}
}

function updateAll(){
  cardsArray.forEach((e, i)=>{
    let q = document.getElementById(`question${i}`)
    let a = document.getElementById(`answer${i}`)
    cardsArray[i] = {question: q.value, answer: a.value}
  })
}

function exitEdit(){
  doneBtn.style.display = "none"
  addBtn.style.display = "none"
  editBtn.style.display = "block"
  showCards()
}

function showCards(){
  exitBtn.style.display = "none"
  endBtn.style.display = "none"
  cardShow.innerHTML = ""
  cardsArray.forEach((e, i) => {
    cardShow.innerHTML += `<div  id = "card" onclick = "flipCard(${i})">
                            <h1  id = "q${i}">${cardsArray[i].question}</h1>
                          </div>`
  })
}

function showOne(){
  startBtn.style.display = "none"
  endBtn.style.display = "block"
  cardShow.innerHTML = `
  <div class =" oneCard" id = "card" onclick = "flipCard(0)">
    <h1  id = "q0">${cardsArray[0].question}</h1>
  </div>
  <div class = switchCardsButton>
    <h3 class = "button disabled"><</h3>
    <h3 onclick="nextCard(0)" class = "button"  id= "nextButton">></h3>
  </div>`
}

function nextCard(index){
  let newIndex = index 
  if(index == cardsArray.length-2){
    newIndex += 1
    cardShow.innerHTML = `
    <div class =" oneCard" id = "card" onclick = "flipCard(${newIndex})">
      <h1  id = "q${newIndex}">${cardsArray[newIndex].question}</h1>
    </div>
    <div class = switchCardsButton>
      <h3 onclick="backCard(${newIndex})" class = "button"><</h3>
      <h3 class = "button disabled">></h3>
    </div>`
  }
  else{
  newIndex+=  1
  cardShow.innerHTML = `
  <div  class =" oneCard" id = "card" onclick = "flipCard(${newIndex})">
    <h1  id = "q${newIndex}">${cardsArray[newIndex].question}</h1>
  </div>
  <div class = switchCardsButton>
    <h3 onclick="backCard(${newIndex})" class = "button"><</h3>
    <h3 onclick="nextCard(${newIndex})" class = "button">></h3>
  </div>`
}}

function backCard(index){
  let oldIndex = index -1
  if(oldIndex == 0){showOne()}
  else{
  cardShow.innerHTML = `
  <div class =" oneCard" id = "card" onclick = "flipCard(${oldIndex})">
    <h1  id = "q${oldIndex}">${cardsArray[oldIndex].question}</h1>
  </div>
  <div class = switchCardsButton>
    <h3 onclick="backCard(${oldIndex})" class = "button"><</h3>
    <h3 onclick="nextCard(${oldIndex})" class = "button">></h3>
  </div>`
}}

function createNewCard(){
  let q = ""
  let a = ""
  newCard = new Card(q,a)
  cardsArray.push(newCard)
  editAll()
}

showCards()
