const express = require('express')
const app = express()
app.use(express.json());
const port = 3000
const connectDB = require('./dbConfig.js')
require('dotenv').config()
const teacherRoutes = require('./routes/teacherRoutes.js')


app.use('/api/teacher',teacherRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  connectDB()
  console.log(`server is listening at http://localhost:${port}`)
})