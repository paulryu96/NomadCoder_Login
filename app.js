const loginForm = document.querySelector('#container')
const loginInput = loginForm.querySelector('input')
const showUserName = document.querySelector('#showUserName')
const HIDDEN_CLASSNAME = 'hidden'

function onLoginSubmit(event){
  event.preventDefault()
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const userName = loginInput.value
  showUserName.innerText = `Hello ${userName}`
  showUserName.classList.remove(HIDDEN_CLASSNAME)

}


loginForm.addEventListener('submit', onLoginSubmit)