class Card {
  constructor(question, answer){
    this.question = question
    this.answer = answer
  }
}

var card1 = new Card("What is 1+1", "2")
var card2 = new Card("How to tie your shoes", "you just don't")
var cardsArray = [card1, card2]
showCards(cardsArray)



function showCards(arr){
  var cardShow = document.getElementById("cardHolder")
  cardShow.innerHTML = ""
  arr.forEach((element, index) => {
    cardShow.innerHTML += `<div>
                              <h1 id = q${index}>Question: ${element.question}</h1>
                              <h1 id = a${index}> Answer:${element.answer}</h1>
                            </div>`
    cardShow.innerHTML += `<button id ="card${index}"onclick = "editCard(${index})">Edit This Card </button>`
  })
}

function editCard(index){
  let card = cardsArray[index]
  let question = document.getElementById(`q${index}`)
  let answer = document.getElementById(`a${index}`)
  let button = document.getElementById(`card${index}`)
  question.innerHTML = `<input type="text" name="question" id = "question${index}" value="${card.question}">`
  answer.innerHTML = `<input type="text" name="answer" id = "answer${index}" value="${card.answer}">`
  button.innerHTML = `<button id = "c${index}" onclick = "updateCard(${index})">Update</button>`

}

function closeEdit(){
  console.log("got here")
  showCards(cardArray)
  console.log(cardsArray)
}

function updateCard(index){
  let question = document.getElementById(`question${index}`)
  let answer = document.getElementById(`answer${index}`)
  return cardsArray[index] = {question: question.value, answer: answer.value}
}


const createNewCard = () => {
  let form = document.getElementById("frm");
  let q = form[0].value
  let a = form [1].value
  newCard = new Card(q,a)
  cardsArray.push(newCard)
  showCards(cardsArray)
}

