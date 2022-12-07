const loginButton = document.getElementById('login-button')
const loginForm = document.getElementById('login-form')

loginButton.addEventListener('click', (e) => {
  e.stopPropagation()
  loginForm.classList.toggle('signin--visible')
})

document.addEventListener('click', e => {
  if (!loginForm.contains(e.target)) {
    loginForm.classList.remove('signin--visible')
  }
})








  





