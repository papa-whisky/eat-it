import template from './home-layout.pug'
import './home-layout.scss'

const render = (parent, fbID) => {
  parent.innerHTML = template({  fbID: fbID  })

  if (module.hot) {
    module.hot.dispose(function() {
      parent.innerHTML = ''
    })
  }
}

export default render
