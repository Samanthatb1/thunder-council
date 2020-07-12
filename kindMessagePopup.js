var message = document.getElementById('message');
var background = document.getElementById('body-of-page') ;
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

var messages = [
    "You're off to great places, today is your day. Your mountain is waiting, so get on your way - Dr Seuss", 
    "You always pass failure on the way to success- Mickey Rooney",
    "You're braver than you believe, and stronger than you seem, and smarter than you think- A.A. Mine",
    "Positive thinking will let you do everything better than negative thinking will- Zig Ziglar",
    "Positive anything is better than negative nothing- Elbert Hubbard",
    "You are never too old to set another goal or dream a new dream- Les Brown",
    "The struggle you're in today is developing the strength you need tomorrow- Robert Tew",
    "Wherever you go, no matter what the weather, always bring your own sunshine- Anthony J. D'Angelo",
    "Happiness is the only thing that multiplies when you share it- Albert Schweitzer",
    "If you want light to come into your life, you need to stand where it is shining- Guy Finley",
]

var previousNum;

function kindMessage (){
    var max = messages.length - 1, outputMessage;
    var min = 0 ;
    var messageNumber = Math.floor(Math.random() * (max - min + 1)) + min ;
    console.log(previousNum) ;

    while ( messageNumber === previousNum){
        var messageNumber = Math.floor(Math.random() * (max - min + 1)) + min ;
    }
    outputMessage = messages [messageNumber] ;
    message.innerHTML = outputMessage ;

    previousNum = messageNumber ;
} 

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
  background.classList.add('scrolling-hidden')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
  background.classList.remove('scrolling-hidden')
}





