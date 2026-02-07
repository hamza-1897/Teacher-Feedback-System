const express = require('express');
const router = express.Router();
const { submitFeedback, getFeedback } = require('../controller/feedbackController.js');

router.post('/submit', submitFeedback);
router.get('/getAll',getFeedback)


module.exports = router;