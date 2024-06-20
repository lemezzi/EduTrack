const routee=require('express').Router();
const controlle=require('../controllers/updatestudent');
const body=require('express').urlencoded({extended:true});

routee.get('/updateetudiant/:id', controlle.getpageupdate);
routee.post('/updatestudent/:id',body,controlle.postUpdatestudent)
module.exports=routee;