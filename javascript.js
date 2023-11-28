const submit = document.querySelector('.create_button')
const para = document.querySelector('.para')
const pass1 = document.querySelector('.error')
const pass2 = document.querySelector('.error2')

submit.addEventListener('click', function (e) {
    if (pass1.value1===pass2.value) {
        para.textContent= 'Registration Successful, welcome'
   }
   if (pass1.value1!==pass2.value) {
         para.textContent= '*Passwords do not match'
    }
   if (pass1.value==='' && pass2.value==='') {
    para.textContent ='Fill all fields'
    }
})