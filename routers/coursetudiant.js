const routee=require('express').Router();
const coursetudiant=require('../controllers/coursetudiant.')
routee.get('/coursetudiant',coursetudiant.getpagecoursesetudiant);

module.exports=routee;