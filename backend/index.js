const express = require('express')
const app = express()
const port = 3000
const connectDB = require('./dbConfig.js')
require('dotenv').config()



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  connectDB()
  console.log(`server is listening at http://localhost:${port}`)
})