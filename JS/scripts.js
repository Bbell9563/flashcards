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
editBtn.addEventListener("click", editAll)
doneBtn.addEventListener("click", updateAll)
exitBtn.addEventListener("click", exitEdit)
addBtn.addEventListener("click", createNewCard)

var card1 = new Card("What is 1+1", "2")
var card2 = new Card("How to tie your shoes", "you just don't")
var cardsArray = [card1, card2]

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
  cardShow.innerHTML = ""
  cardsArray.forEach((e, i) => {
    cardShow.innerHTML += `<div  id = "card" onclick = "flipCard(${i})">
                              <h1  id = "q${i}">${cardsArray[i].question}</h1>
                            </div>`
  })
}

function createNewCard(){
  let q = ""
  let a = ""
  newCard = new Card(q,a)
  cardsArray.push(newCard)
  editAll()
}
showCards()