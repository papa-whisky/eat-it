import template from './test.pug'
import './test.scss'

const render = (parent, data) => {
  data.forEach((name) => parent.insertAdjacentHTML('beforeend', template(name)))
  document.querySelectorAll('h2').forEach((element) => {
    element.addEventListener('click', () => console.log('things'))
  })
  if (module.hot) {
    module.hot.dispose(function() {
      parent.innerHTML = ''
    })
  }
}


export default render
