const loginetudiant=require('../models/students');

exports.getpage=(req,res,next)=>{

    loginetudiant.getsubjectnotes(req.params.id).then((obj)=>{
            
        
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
        
        res.render('pageedenote.ejs',{verif:req.session.userId,obj:obj,moy:moy});
    })
}