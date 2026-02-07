const Student = require('../model/studentSchema.js')

exports.getStudents = async (req,res) =>{
try {
    const students = await Student.find();
    res.status(200).json({sucess:true,data:students})
} catch (error) {
    res.status(5).json({success:false,message : error.message})
}
}

exports.addStudents = async (req,res)=>{

}