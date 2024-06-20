const routee=require('express').Router();
const subject=require('../controllers/mysubject');
routee.get('/mysubjects',subject.getmysubjects);

module.exports=routee;