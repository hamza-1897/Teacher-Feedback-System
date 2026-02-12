const express = require('express')
const { addTeacher,getTeachers, getAllTeacher } = require('../controller/teacherController.js')
const router = express.Router()

router.post('/create',addTeacher)

{/*router.get('/getAll/:stdId',getAllTeacher)
*/}
router.get('/getAll',getAllTeacher)
module.exports = router