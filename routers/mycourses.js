const routee=require('express').Router();
const mescours=require('../controllers/mescours')

routee.get('/mycourses',mescours.mycoursget);


module.exports=routee;