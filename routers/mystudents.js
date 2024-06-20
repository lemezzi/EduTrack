const routee=require('express').Router();
const studen=require('../controllers/mystudents');

routee.get('/mystudents',studen.getmystudents);

module.exports=routee;