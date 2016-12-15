import template from './search.pug'
import './search.scss'

const drawResult = (parent, friend) => {
  parent.innerHTML += template({
    name: friend.name,
    img: friend.picture.data.url
  })
}

const render = (parent) => {
  FB.api('/me/friends', { fields: 'name,picture' }, (res) => {
    res.data.forEach((friend) => {
      drawResult(parent, friend)
    })
  })

  if (module.hot) {
    module.hot.dispose(function() {
      parent.innerHTML = ''
    })
  }
}

export default render
