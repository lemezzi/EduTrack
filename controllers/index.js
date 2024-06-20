

exports.indexController=(req,res,next)=>{
    res.render('index.ejs',{verif:req.session.userId});
}