import loginPageLayout from './components/login-page-layout/login-page-layout'
import './global-styles/normalize.scss'
import './global-styles/main.scss'
import fbSdkInit from './scripts/fb-sdk'

// Initialise Facebook SDK for login
fbSdkInit()

const rootDiv = document.querySelector('#root')
loginPageLayout(rootDiv)

if (module.hot) {
  module.hot.accept();
}
