const studentmodel=require('../models/students');
exports.getpageadd=(req,res,next)=>{
res.render('addsubject.ejs',{verif:req.session.userId,Smessage:req.flash('Smessage')[0],Emessage:req.flash('Emessage')[0]});
};


exports.postaddsubject=(req,res,next)=>{

    studentmodel.Registersubject(req.body.name,req.body.description,req.body.coeff,req.body.classe,req.session.userId)
    .then((msg)=>{
        req.flash('Smessage',msg);
        res.redirect('/addsubject');
    })

    .catch((err)=>{
        req.flash('Emessage',err);
    })


}