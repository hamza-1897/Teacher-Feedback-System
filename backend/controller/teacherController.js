const Teacher = require('../model/teacherSchema.js')
const Feedback = require('../model/feedbackSchema.js')

exports.addTeacher = async (req,res) => {
    try {
        const { name, subject, photoUrl } = req.body;
        const newTeacher = await Teacher.create({ name, subject, photoUrl  });
        res.status(201).json({ success: true, data: newTeacher });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
}

exports.getTeachers = async (req,res) => {
    try {
        const teachers = await Teacher.find();
        res.status(200).json({ success: true, data: teachers });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}


exports.getAllTeacher = async (req, res) => {
    try {
        const { stdId } = req.params; 
        const teachers = await Teacher.find();

       
        const teacherList = await Promise.all(teachers.map(async (teacher) => {
            
        
            const feedbackExist = await Feedback.findOne({ 
                teacherId: teacher._id, 
                studentId: stdId 
            });

            return {
                ...teacher._doc, 
                isSubmitted: !!feedbackExist
            };
        }));

        res.status(200).json({ data: teacherList, success: true });
    } catch (error) {
        res.status(500).json({ message: "Error", error: error.message });
    }
};