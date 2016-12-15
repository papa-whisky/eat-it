const express = require('express')
const app = express()
const PORT = (process.env.PORT || 3030)
app.use(express.static('dist'))

app.get('*', (req, res) => res.sendFile(__dirname + '/index.html'))

app.listen(PORT, (err) => {
  err ? console.error(err) : console.log("it's all good on local 3030")
})
