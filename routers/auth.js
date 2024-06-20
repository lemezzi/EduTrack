const routee=require('express').Router();
const regist=require('../controllers/auth')
const body=require('express').urlencoded({extended:true});
routee.get('/register',regist.GetRegisterPage);
routee.get('/login',regist.GetLoginPage);

routee.post('/register',body,regist.PostRegisterData);

routee.post('/login',body,regist.PostLoginData);
routee.post('/logout',body,regist.Logout);
module.exports=routee;