const routee=require('express').Router();
const loginetud=require('../controllers/loginetudiant');
const body=require('express').urlencoded({extended:true});


routee.get('/loginetudiant',loginetud.loginetudiant);
routee.post('/loginet',body,loginetud.postloginetudiant);

module.exports=routee;