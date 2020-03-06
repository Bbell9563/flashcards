class Card {
  constructor(question, answer){
    this.question = question
    this.answer = answer
  }
}

var editBtn = document.getElementById("editButton")
var doneBtn = document.getElementById("doneButton")
var newFrm = document.getElementById("newForm")
var cardShow = document.getElementById("cardHolder")
var exitBtn = document.getElementById("exitButton")
var addBtn = document.getElementById("addButton")
var cardFlip = document.getElementById("card")

var card1 = new Card("What is 1+1", "2")
var card2 = new Card("How to tie your shoes", "you just don't")
var cardsArray = [card1, card2]
showCards(cardsArray)

editBtn.addEventListener("click", editAll)
doneBtn.addEventListener("click", updateAll)
exitBtn.addEventListener("click", exitEdit)
addBtn.addEventListener("click", createNewCard)
// cardFlip.addEventListener("click", flipCard)

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
      </div>`
  })
}

function flipCard()

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
    cardShow.innerHTML += `<div  id = "card">
                              <h1 id = q${index}> ${element.question}</h1>
                            </div>`
  })
}

                              // <h1 id = a${index}> Answer:${element.answer}</h1>



function createNewCard(){
  let q = ""
  let a = ""
  newCard = new Card(q,a)
  cardsArray.push(newCard)
  editAll()
}
showCards(cardsArray)

