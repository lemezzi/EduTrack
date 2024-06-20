const Student=require('../models/students')
exports.deleteStudetnController=(req,res,next)=>{
    let id=req.params.id
    
    Student.deletestudent(id).then((verif)=>{
        res.redirect('/mystudents')
    }).catch((err)=>{
        console.log(err)
    })
  }