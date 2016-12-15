import loginPageLayout from './components/login-page-layout/login-page-layout'
import homeLayout from './components/home-layout/home-layout'
import './global-styles/normalize.scss'
import './global-styles/main.scss'
// import fbSdkInit from './scripts/fb-sdk'

const rootDiv = document.querySelector('#root')

// Check login status and render relevant page
const checkLogin = () => {
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      homeLayout(rootDiv, response.authResponse.userID)
    } else {
      loginPageLayout(rootDiv)
    }
  }, true)
}

// Functions to run once Facebook SDK loaded
window.fbAsyncInit = function() {
  FB.init({
    appId: '362664850778148',
    xfbml: true,
    version: 'v2.8',
    cookie: true
  })
  FB.AppEvents.logPageView()
  checkLogin()
};

// Load Facebook SDK
(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) {return;}
  js = d.createElement(s)
  js.id = id
  js.src = "//connect.facebook.net/en_US/sdk.js"
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))


if (module.hot) {
  module.hot.accept();
}
