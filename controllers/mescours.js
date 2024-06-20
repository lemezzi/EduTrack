
const courses=require("../models/students");

exports.mescours=(req,res,next)=>{
res.render('mescours.ejs',{verif:req.session.userId});


}

exports.mycoursget=(req,res,next)=>{
    courses.getmycourses(req.session.userId).then((courses)=>{
        res.render('mescours.ejs',{verif:req.session.userId,courses:courses});


    })

}

