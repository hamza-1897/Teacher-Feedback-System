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

exports.getAllTeachers = async (req, res) => {
    try {
        const { stdId } = req.params; 
        const teachers = await Teacher.find();

        // Har teacher par loop chala kar check karein
        const teacherList = await Promise.all(teachers.map(async (teacher) => {
            
            // Yahan Feedback table mein check ho raha hai
            const feedbackExist = await Feedback.findOne({ 
                teacherId: teacher._id, 
                studentId: stdId 
            });

            return {
                ...teacher._doc, // Teacher ki purani sari details
                isSubmitted: !!feedbackExist // Agar record mila toh true, warna false
            };
        }));

        res.status(200).json({ data: teacherList, success: true });
    } catch (error) {
        res.status(500).json({ message: "Error", error: error.message });
    }
};