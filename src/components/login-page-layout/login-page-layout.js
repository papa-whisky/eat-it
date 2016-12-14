import template from './login-page-layout.pug'
import './login-page-layout.scss'
import loginBtn from './../login-btn/login-btn'

const render = (parent) => {
  parent.innerHTML = template()
  const section = document.querySelector('section')
  loginBtn(section)

  if (module.hot) {
    module.hot.dispose(function() {
      parent.innerHTML = ''
    })
  }
}

export default render
