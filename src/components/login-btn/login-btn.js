import template from './login-btn.pug'
import './login-btn.scss'
import homeLayout from './../../components/home-layout/home-layout'

// On click, login with Facebook and render homepage
const addLoginClickListener = () => {
  const loginBtn = document.querySelector('.login-btn')
  loginBtn.addEventListener('click', () => {
    FB.login((res) => {
      const rootDiv = document.querySelector('#root')
      homeLayout(rootDiv, res.authResponse.userID)
    })
  })
}

const render = (parent) => {
  parent.innerHTML = template()
  addLoginClickListener()

  if (module.hot) {
    module.hot.dispose(function() {
      parent.innerHTML = ''
    })
  }
}

export default render
