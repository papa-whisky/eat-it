import template from './map.pug'
import './map.scss'

const render = (parent) => {
  parent.innerHTML = template()

  if (module.hot) {
    module.hot.dispose(function() {
      parent.innerHTML = ''
    })
  }
}

export default render
