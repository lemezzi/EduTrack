routee=require('express').Router();
const addcours=require('../controllers/addcours');
const multer=require('multer');
const body=require('express').urlencoded({extended:true});

routee.get('/addcours',addcours.ajoutecours);

routee.post('/addcoursfinale',multer({
    storage:multer.diskStorage({
        destination:function (req, file, cb) {
                cb(null, 'assets/uploads')  
          },
        filename:function (req, file, cb) {
                cb(null, Date.now()+'-'+ file.originalname )      
        }
    })
}).single('image'),body,addcours.postAddCours);

module.exports=routee;

module.exports=routee;