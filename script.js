
// card front and back
let cardFrontNumber = document.querySelector('.card-number') 
let cardName = document.querySelector('.card-holder-name') 
let expiryDate = document.querySelector('.month-year')
let cvcNumber = document.querySelector('.cvc')

// Input and form section
let cardHoldername = document.querySelector('.name')
let cardNumber = document.querySelector('.card-number-input')
let month = document.querySelector('#month')
let year = document.querySelector('#year')
let cvc = document.querySelector('#cvc')
let confirmBtn = document.querySelector('.confirm-btn')
let successMsg = document.querySelector('.success-msg')
let formSection = document.querySelector('.form-section')
let form = document.querySelector('form')


// RegEx
let nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/
let numberRegex = /^[0-9]*$/


// automatic details uploading

cardHoldername.addEventListener('keyup', ()=> {
  cardName.innerText = cardHoldername.value
})

cardNumber.addEventListener('keyup', ()=> {
  cardFrontNumber.innerText = cardNumber.value
  let splitChar = cardFrontNumber.innerText.match(/.{1,4}/g)
  cardFrontNumber.innerText = splitChar.join(' ')
})

month.addEventListener('keyup', ()=> {
  expiryDate.innerText = ''
  expiryDate.innerText = month.value +'/'
})

year.addEventListener('keyup', ()=> {
  expiryDate.innerText = month.value +'/' + year.value
})

cvc.addEventListener('keyup', ()=> {
  cvcNumber.innerText = cvc.value
})


confirmBtn.addEventListener('click', validate)
function validate(e){
    let errorMsg1 = "Can't be blank"
    if (cardHoldername.value == ''|| null){
        cardHoldername.parentElement.querySelector('p').innerHTML = errorMsg1
        cardHoldername.style.outline = '1px solid hsl(0, 100%, 66%)'
        cardHoldername.style.border = 'none'
    }   
    if (cardNumber.value == ''|| null){
        cardNumber.nextElementSibling.innerHTML = errorMsg1
        cardNumber.style.outline = '1px solid hsl(0, 100%, 66%)'
        cardNumber.style.border = 'none'
    }

    if (month.value == ''||null){
        month.nextElementSibling.innerHTML = errorMsg1
        month.style.outline = '1px solid hsl(0, 100%, 66%)'
        month.style.border = 'none'
    }

    if (year.value == ''||null){
        year.nextElementSibling.innerText = errorMsg1
        year.style.outline = '1px solid hsl(0, 100%, 66%)'
        year.style.border = 'none'
    }
    if (cvc.value == ''||null){
        cvc.nextElementSibling.innerHTML = errorMsg1
        cvc.style.outline = '1px solid hsl(0, 100%, 66%)'
        cvc.style.border = 'none'
    }


    if (
        !nameRegex.test(cardHoldername.value)
        && !numberRegex.test(cardNumber.value) 
        && cardNumber.value.length == 16
        && !numberRegex.test(month.value)
        && month.value.length == 2
        && !numberRegex.test(year.value)
        && year.value.length == 4
        && !numberRegex.test(cvc.value)
        && cvc.value.length == 3

    ){
       
    }else {

        // cardFrontNumber.innerText = cardNumber.value
        // cardName.innerText = cardHoldername.value
        // expiryDate.innerText = month.value+'/'+ year.value.substring(2,4)
        
        formSection.innerHTML = 
        `<div class="success-msg">
          <div class="img">
            <img src="images/icon-complete.svg" alt="">
          </div>
          <div class='msg'>
            <p>We've added your card details</p> 
            <h1>THANK YOU!</h1>
            <input type="button" class='continue-btn' value="Continue">
          </div>
        </div>`
    let continueBtn = document.querySelector('.continue-btn')
    continueBtn.addEventListener('click', ()=> {
        formSection.innerHTML = 
        `    <form action="#" method="post">
        <div>

        </div>
        <label for="cardholder-name">Cardholder Name</label><br>
        <input type="text" placeholder="e.g. Jane Appleseed" class="name"><br>
        <p></p>
        <label for="card-number">Card Number</label><br>
        <input type="number" placeholder="e.g. 1234 5678 9123 0000" min="0" class="card-number-input">
        <p></p>
        <div>
          <div class="month-year">
            <label for="expiry-date">Exp. Date (MM/YY)</label><br>
            <div class="date-input">
              <input type="number" name="month" id="month" placeholder="MM" max="12">
              <p></p>
              <input type="number" name="year" id="year" placeholder="YY">
              <p></p>
            </div>
          </div>
          <div class="cvc-div">
            <label for="cvc">CVC</label><br>
            <input type="number" name="cvc" id="cvc" placeholder="e.g. 123"  min="0" max="999">
            <p></p>
          </div>
        </div>
        <input type="button" value="Confirm" class="confirm-btn">
      </form>`   
      })
    }
       
}
