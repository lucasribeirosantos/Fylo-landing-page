import { firstForm, secondForm, regexEmail } from "./variables.js";

firstForm.addEventListener('submit', event =>{
    event.preventDefault()

    const getStartedEmail = document.getElementById('getStarted')
    const email = getStartedEmail.value
    const required = document.getElementById('first-required')

    if(!regexEmail.test(email)) {
        required.classList.remove('hide')
        getStartedEmail.classList.add('error')
    } else {
        required.classList.add('hide')
        getStartedEmail.classList.remove('error')
    }
})

secondForm.addEventListener('submit', event => {
    event.preventDefault()
    
    const earlyAccessEmail = document.getElementById('earlyAccess')
    const email = earlyAccessEmail.value
    const required = document.getElementById('second-required')
    
    if(!regexEmail.test(email)) {
        required.classList.remove('hide')
        earlyAccessEmail.classList.add('error')
    } else {
        required.classList.add('hide')
        earlyAccessEmail.classList.remove('error')
    }
})