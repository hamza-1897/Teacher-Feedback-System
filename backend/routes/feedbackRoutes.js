const express = require('express');
const router = express.Router();
const { submitFeedback,getFeedbackHistory, getFeedback } = require('../controller/feedbackController.js');

router.post('/submit', submitFeedback);
router.get('/getAll',getFeedback)
router.get('/getFeedbackHistory', getFeedbackHistory);

module.exports = router;