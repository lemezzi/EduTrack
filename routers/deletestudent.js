const routee=require('express').Router();
const ind=require('../controllers/delete');
routee.get('/deleteetudi/:id',ind.deleteStudetnController);
module.exports=routee;