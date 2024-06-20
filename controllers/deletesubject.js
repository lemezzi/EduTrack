const Subject=require('../models/students')
exports.deleteSubjectController=(req,res,next)=>{
    let id=req.params.id
    
    Subject.deletesubject(id).then((verif)=>{
        res.redirect('/mysubjects')
    }).catch((err)=>{
        console.log(err)
    })
  }