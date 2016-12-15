import template from './new-recommendation.pug'
import './new-recommendation.scss'

const render = (parent) => {
  parent.innerHTML = template()

  if (module.hot) {
    module.hot.dispose(function() {
      parent.innerHTML = ''
    })
  }
}

export default render
