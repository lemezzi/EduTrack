const routee=require('express').Router();
const add=require('../controllers/addstudent');
const body=require('express').urlencoded({extended:true});

routee.get('/addstudent',add.getpageadd);
routee.post('/addstudent',body,add.postaddstudent);

module.exports=routee;