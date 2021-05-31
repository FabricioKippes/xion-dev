const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const form = require('./sendmail.js')

const app = express()
const PORT = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use('/api/mail', form)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')))
  app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')))
}

app.listen(PORT, () => console.log(`Server is starting on PORT ${PORT}`))
