const loginetudiant=require('../models/students');

exports.getpageupdate=(req,res,next)=>{
loginetudiant.getonestudent(req.params.id).then((student)=>{
    console.log(student)
    
    res.render('updatenote.ejs',{verif:req.session.userId,id:req.params.id,student:student});

})

}

exports.postUpdatestudent=(req,res,next)=>{
    console.log(req.params.id)
    loginetudiant.postUpdateStudent(req.params.id,req.body.first,req.body.last,req.body.email,req.body.classe,req.body.cin,req.session.userId).then((msg)=>{
            req.flash('Successmessage',msg)
            res.redirect('/mystudents')
        }).catch((err)=>{
            req.flash('Errormessage',err)
            res.redirect('/login')
        })
    }
   


