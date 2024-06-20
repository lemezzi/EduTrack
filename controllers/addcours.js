
const course=require('../models/students')

exports.ajoutecours=(req,res,next)=>{
res.render("addcours.ejs",{verif:req.session.userId});

}

exports.postAddCours=((req,res,next)=>{
    course.postAddCours(req.body.title,req.body.description,req.file.filename,req.session.userId,req.body.classe)
    .then((message)=>{
        
        res.redirect('/addcours');

    })
    .catch((err)=>{
       console.log(err);
    })


});