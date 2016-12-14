window.fbAsyncInit = function() {
  FB.init({
    appId: '362664850778148',
    xfbml: true,
    version: 'v2.8'
  })
  FB.AppEvents.logPageView()
}

const fbSdkInit = () => {
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) {return;}
    js = d.createElement(s)
    js.id = id
    js.src = "//connect.facebook.net/en_US/sdk.js"
    fjs.parentNode.insertBefore(js, fjs)
  }(document, 'script', 'facebook-jssdk'))
}

export default fbSdkInit
