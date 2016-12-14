const express = require('express')
const app = express()
const compiler = require('webpack')(require('./webpack.config'))

app.use(require('webpack-dev-middleware')(compiler, {}))
app.use(require('webpack-hot-middleware')(compiler))
app.use(express.static('dist'))

app.get('*', (req, res) => res.sendFile(__dirname + '/index.html'))

app.listen(3030, (err) => {
  err ? console.error(err) : console.log("it's all good on local 3030")
})
