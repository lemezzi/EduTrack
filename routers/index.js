const routee=require('express').Router();
const ind=require('../controllers/index');
routee.get('/',ind.indexController);
module.exports=routee;