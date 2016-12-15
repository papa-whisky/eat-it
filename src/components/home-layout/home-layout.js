import template from './home-layout.pug'
import './home-layout.scss'

import renderFeed from './../feed/feed'
import renderMap from './../map/map'
import renderSearch from './../search/search'
import renderNewRecommendation from './../new-recommendation/new-recommendation'

const viewRenderFunctions = {
  'home': renderFeed,
  'place': renderMap,
  'search': renderSearch,
  '+': renderNewRecommendation
}


const addNavBtnClickListeners = (targetDiv) => {
  const btns = document.querySelectorAll('li')
  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // Clear `selected` from all btns, then add to clicked btn
      btns.forEach((btn) => btn.classList.remove('selected'))
      e.target.classList.add('selected')

      // Clear main section and render relevant section
      targetDiv.innerHTML = ''
      viewRenderFunctions[e.target.textContent](targetDiv)
    })
  })
}

const render = (parent) => {
  parent.innerHTML = template()
  const main = document.querySelector('main')
  renderFeed(main)
  addNavBtnClickListeners(main)


  if (module.hot) {
    module.hot.dispose(function() {
      parent.innerHTML = ''
    })
  }
}

export default render
