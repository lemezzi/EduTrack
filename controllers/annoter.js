const annoter=require('../models/students');

exports.getsubjectsfinal=(req,res,next)=>{
let idstudent=req.params.id;
let classe=req.params.classe;
console.log(classe);
annoter.finalannoter(classe)
.then((subjects)=>{
    res.render('annoter.ejs',{verif:req.session.userId,subjects:subjects,id:idstudent});
    console.log(subjects);


})
.catch((err)=>{
    console.log(err);
})



}


exports.postdata=(req,res,next)=>{
   let matiere=req.body.names;
   let notes=req.body.notes;
   let id=req.body.id;
   let coeff=req.body.coeff;
   let coefffinale=coeff.split(",");

   
   let final=matiere.split(",");

   annoter.Registernotes(id,final,notes,coefffinale)
   .then((msg)=>{
    res.redirect('/mystudents');

    
    console.log("annoter");
   })
   

}
;


