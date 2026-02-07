const mongoose = require("mongoose")

const feedbackSchema = new mongoose.Schema({
  studentId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Student', 
    required: true 
  },
  teacherId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Teacher', 
    required: true 
  },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now }
});


feedbackSchema.index({ studentId: 1, teacherId: 1 }, { unique: true });

const Feedback = mongoose.model('Feedback', feedbackSchema);