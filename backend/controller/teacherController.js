const Teacher = require('../model/teacherSchema.js')


exports.addTeacher = async (req,res) => {
    try {
        const { name, subject, photoUrl } = req.body;
        const newTeacher = await Teacher.create({ name, subject, photoUrl  });
        res.status(201).json({ success: true, data: newTeacher });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
}

exports.getAllTeacher = async (req,res) => {
    try {
        const teachers = await Teacher.find();
        res.status(200).json({ success: true, data: teachers });
    } catch (err) {
     res.status(500).json({ success: false, error: err.message });   
    }
}