const buttons = document.querySelectorAll('.rating-buttons')
const submitBtn = document.querySelector('.button-submit')
const ratingSection = document.querySelector('.modal-rating')
const thankYouSection = document.querySelector('.modal-submitted')
const rate = document.getElementById('your-note')
let selected

buttons.forEach((button) => {

  button.addEventListener('click', () => {
    for(let i = 0; i < buttons.length; i++){
      buttons[i].classList.remove('rating-selected')
    }
    button.classList.toggle('rating-selected')
    selected = button.innerText
  })
})

submitBtn.addEventListener('click', () => {
  if(typeof selected !== 'string'){
    alert('Please, select your rate')
  } else{
    ratingSection.classList.add('hide')
    thankYouSection.classList.remove('hide')
    rate.innerText = selected
  }

})

