const AuthModel = require('../models/auth');
const flash=require('connect-flash')
exports.GetRegisterPage = (req, res, next) => {
    res.render('register',{verif:req.session.userId});
};

exports.GetLoginPage = (req, res, next) => {
    res.render('login',{verif:req.session.userId});
};

exports.PostRegisterData = (req, res, next) => {
    AuthModel.RegisterDataModel(req.body.name,req.body.email,req.body.password).then((user)=>{
        res.redirect('/login');
    }).catch((err)=>{
        
         res.redirect('/register');
    });
  
};






    exports.PostLoginData=(req,res,next)=>{

        AuthModel.LoginDataModel(req.body.email,req.body.password).then((id)=>{
            
            req.session.userId=id;
            res.redirect('/');
        }).catch((err)=>{
            res.redirect('/login');
    
        })
      
      
    }


    exports.Logout=(req,res,next)=>{

        req.session.destroy(()=>{

            res.redirect('./');
        })
}
    
