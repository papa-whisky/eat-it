import loginPageLayout from './components/login-page-layout/login-page-layout'
import './global-styles/normalize.scss'
import './global-styles/main.scss'

const rootDiv = document.querySelector('#root')

loginPageLayout(rootDiv)

if (module.hot) {
  module.hot.accept();
}
