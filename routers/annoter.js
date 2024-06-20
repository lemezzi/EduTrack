const routee=require('express').Router();
const annoter=require('../controllers/annoter');
const body=require('express').urlencoded({extended:true});

routee.get('/annoterstudent/:id/:classe',annoter.getsubjectsfinal);
routee.post('/annoterfinal',body,annoter.postdata);

module.exports=routee;