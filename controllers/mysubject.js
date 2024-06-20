const mysubject=require('../models/students');


exports.mysubjects=(req,res,next)=>{
res.render('mysubjects.ejs',{verif:req.session.userId});
};

exports.getmysubjects=(req,res,next)=>{

    mysubject.getsubjects(req.session.userId)
    .then((subjects)=>{
        res.render('mysubjects.ejs',{verif:req.session.userId,subjects:subjects});



    })
    .catch((err)=>{
        console.log(err);
    })


};



