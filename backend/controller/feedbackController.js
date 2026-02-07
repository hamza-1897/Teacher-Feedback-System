const Feedback = require('../model/feedbackSchema.js')

exports.submitFeedback = async (req,res) =>{
    try {
        const  {studentId,teacherId,rating,comment} = req.body
        const alreadyfb = await Feedback.findOne({studentId,teacherId})

        if(alreadyfb){
            return res.status(400).json({ 
        success: false, 
        message: "You have already submitted feedback for this teacher!" 
      });
        }

        const newFeedback = await Feedback.create({
      studentId,
      teacherId,
      rating,
      comment
    });

    res.status(201).json({ success: true, data: newFeedback });

    } catch (error) {
        
    }
}

exports.getFeedback = async (req,res) =>{
    try {

        const feedback = await Feedback.find()
        res.status(200).json({success:true, data: feedback})
        
    } catch (error) {
        res.send(500).json({success:false , message:error.message})
    }
}