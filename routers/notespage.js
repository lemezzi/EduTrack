const routee=require('express').Router();
const notes=require('../controllers/notespage');
const body=require('express').urlencoded({extended:true});

routee.get('/mesnotesfinaux/:id',notes.getpage);

module.exports=routee;