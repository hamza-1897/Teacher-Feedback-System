const express = require('express')
const app = express()
app.use(express.json());
const port = 3000
const connectDB = require('./dbConfig.js')
const cors = require('cors')
app.use(cors())

require('dotenv').config()
const teacherRoutes = require('./routes/teacherRoutes.js')
const studentRoutes  = require('./routes/studentRoutes.js')
const feedbackRoutes = require('./routes/feedbackRoutes.js')

app.use('/api/teacher',teacherRoutes)
app.use('/api/students',studentRoutes)
app.use('/api/feedback',feedbackRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  connectDB()
  console.log(`server is listening at http://localhost:${port}`)
})