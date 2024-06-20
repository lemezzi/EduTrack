const routee=require('express').Router();
const add=require('../controllers/addsubject');
const body=require('express').urlencoded({extended:true});

routee.get('/addsubject',add.getpageadd);
routee.post('/addsubject',body,add.postaddsubject);

module.exports=routee;