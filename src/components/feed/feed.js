import template from './feed.pug'
import './feed.scss'

const render = (parent) => {
  parent.innerHTML = template()

  if (module.hot) {
    module.hot.dispose(function() {
      parent.innerHTML = ''
    })
  }
}

export default render
