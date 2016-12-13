import template from './test.pug'
import './test.scss'

const render = (names) => {
  var html = ''
  names.forEach((name) => html += template(name))
  return html
}

export default render
