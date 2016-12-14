import template from './login-page-layout.pug'
import './login-page-layout.scss'

const render = (parent) => {
  parent.innerHTML = template()

  if (module.hot) {
    module.hot.dispose(function() {
      parent.innerHTML = ''
    })
  }
}

export default render
