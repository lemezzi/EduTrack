const routee=require('express').Router();
const chat=require('../controllers/chat');
routee.get('/chat',chat.getchat);


module.exports=routee;