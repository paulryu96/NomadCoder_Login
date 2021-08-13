const loginForm = document.querySelector('#container')
const loginInput = loginForm.querySelector('input')
const showUserName = document.querySelector('#showUserName')

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

function onLoginSubmit(event){
  event.preventDefault()
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const userName = loginInput.value
  localStorage.setItem(USERNAME_KEY, userName)
  showUserName.innerText = `Hello ${userName}`
  showUserName.classList.remove(HIDDEN_CLASSNAME)

}

loginForm.addEventListener('submit', onLoginSubmit)

const savedUserName = localStorage.getItem(USERNAME_KEY)

if (savedUserName === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', onLoginSubmit)
} else {
  const userName = loginInput.value
  showUserName.innerText = `Hello ${savedUserName}`
  showUserName.classList.remove(HIDDEN_CLASSNAME)

}