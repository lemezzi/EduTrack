const coursetudiant=require("../models/students");
exports.getpage=(req,res,next)=>{

res.render('coursetudiant.ejs',{verif:req.session.userId});

}


exports.getpagecoursesetudiant = (req, res, next) => {
    coursetudiant.getclassename(req.session.userId)
      .then((className )=> {
        coursetudiant.getcoursesetudiant(className.classe)
        .then((courses)=>{
            console.log(courses)
            res.render('coursetudiant.ejs', { verif: req.session.userId, courses: courses});


        })
      })
      .catch(err => {
        console.error(err);
        res.render('coursetudiant.ejs', { verif: req.session.userId, error: err.message });
      });
  }