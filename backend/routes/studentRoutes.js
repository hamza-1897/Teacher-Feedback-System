const express = require('express')
const { getStudents, loginStudent } = require('../controller/studentController')
const routes = express.Router()

routes.get('/getAll',getStudents)
routes.post('/login',loginStudent)
module.exports = routes