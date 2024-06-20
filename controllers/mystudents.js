const mystudents=require('../models/students');


exports.mystudents=(req,res,next)=>{
res.render('Mystudents.ejs',{verif:req.session.userId});
};

exports.getmystudents=(req,res,next)=>{

    mystudents.getstudents(req.session.userId)
    .then((students)=>{
        res.render('Mystudents.ejs',{verif:req.session.userId,students:students});



    })
    .catch((err)=>{
        console.log(err);
    })


};
