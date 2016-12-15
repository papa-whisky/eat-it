import template from './home-layout.pug'
import './home-layout.scss'

const render = (parent) => {
  parent.innerHTML = template()

  if (module.hot) {
    module.hot.dispose(function() {
      parent.innerHTML = ''
    })
  }
}

export default render
