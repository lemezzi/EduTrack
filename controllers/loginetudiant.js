const loginetudiant=require('../models/students');


exports.loginetudiant=(req,res,next)=>{
res.render('loginetudiant.ejs',{verif:req.session.userId});
}

exports.postloginetudiant=(req,res,next)=>{
    let email=req.body.email;
    let pass=req.body.password;
    console.log(req.session.userId)

    loginetudiant.Loginetudiant(email,pass).then((user)=>{
        
        loginetudiant.getsubjectnotes(user._id).then((obj)=>{
            console.log(obj)
            
            req.session.userId=user._id;
            console.log(obj);
            let moy = 0;
            let som = 0;

              for (let i = 0; i < obj.subject.length; i++) {
                  moy += parseInt(obj.notes[i]) * parseInt(obj.coeff[i]);
                  som += parseInt(obj.coeff[i]);
                 }

if (som !== 0) {
    moy /= som;
}
console.log(moy);
            
            res.render('pageetudiant.ejs',{verif:req.session.userId,obj:obj,moy:moy,user:user});
        })
       
        
        
    }).catch((err)=>{
        
         res.redirect('/register');
         console.log("mezzi");
    });





}