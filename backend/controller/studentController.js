const Student = require('../model/studentSchema.js')

exports.getStudents = async (req,res) =>{
try {
    const students = await Student.find();
    res.status(200).json({sucess:true,data:students})
} catch (error) {
    res.status(5).json({success:false,message : error.message})
}
}

exports.loginStudent = async (req, res) => {
    try {
        const { username, password } = req.body;

        
        const student = await Student.findOne({ username });

        if (!student) {
            return res.status(404).json({ success: false, message: "Username not found!" });
        }

        
        if (student.password !== password) {
            return res.status(401).json({ success: false, message: "wrong Password!" });
        }

       
        res.status(200).json({ 
            success: true, 
            message: "Login Successfull!!",
            data: {
                id: student._id,
                name: student.name,
                gender: student.gender
            }
        });

    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};