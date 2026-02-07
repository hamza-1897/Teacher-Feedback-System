const express = require('express')
const { getStudents } = require('../controller/studentController')
const routes = express.Router()

routes.get('/getAll',getStudents)

module.exports = routes