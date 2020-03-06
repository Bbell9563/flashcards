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
  cardsArray.forEach((element, index) => {
    cardShow.innerHTML += 
      `<div>
        <label>Question:</label>
        <input class= "inputField" type="text" name="question" id = "question${index}" value="${element.question}">
        <label>Answer:</label>
        <input class= "inputField" type="text" name="answer" id = "answer${index}" value="${element.answer}">
        <h1 class = "button" id= "delete${index}" onclick = "deleteCard(${index})">Delete This Question</h1>
      </div>`
  })
}

function deleteCard (i){
  cardsArray.splice(i,1)
  editAll()
}

function flipCard(index){
  var card = document.getElementById(`q${index}`)
  if(card.innerHTML == cardsArray[index].question){
    card.innerHTML = cardsArray[index].answer
  }
  else{card.innerHTML = cardsArray[index].question;}
  }

function updateAll(){
  cardsArray.forEach((element, index)=>{
    let question = document.getElementById(`question${index}`)
    let answer = document.getElementById(`answer${index}`)
    cardsArray[index] = {question: question.value, answer: answer.value}
  })
}

function exitEdit(){
  doneBtn.style.display = "none"
  addBtn.style.display = "none"
  editBtn.style.display = "block"
  showCards(cardsArray)
}

function showCards(arr){
  exitBtn.style.display = "none"
  cardShow.innerHTML = ""
  arr.forEach((element, index) => {
    cardShow.innerHTML += `<div  id = "card" onclick = "flipCard(${index})">
                              <h1  id = "q${index}">${cardsArray[index].question}</h1>
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
showCards(cardsArray)

