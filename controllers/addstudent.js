
const studentmodel=require('../models/students');

exports.getpageadd=(req,res,next)=>{
res.render('addstudent.ejs',{verif:req.session.userId,Smessage:req.flash('Successmessage')[0],Emessage:req.flash('erreurmsg')[0]});
};


exports.postaddstudent=(req,res,next)=>{

    studentmodel.Registerstudent(req.body.first,req.body.last,req.body.email,req.body.classe,req.body.cin,req.session.userId)
    .then((msg)=>{
        req.flash('Successmessage',msg);
        res.redirect('/addstudent');
    })

    .catch((err)=>{
        req.flash('erreurmsg',err);
    })


}