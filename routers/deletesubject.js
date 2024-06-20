const routee=require('express').Router();
const ind=require('../controllers/deletesubject');
routee.get('/deletesub/:id',ind.deleteSubjectController);
module.exports=routee;