const Message = require('../models/students');

exports.getchat = (req, res, next) => {
    
    res.render('chat.ejs',{verif:req.session.userId});
    
}

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/myapp'; // Remplacez par votre URL de connexion

exports.getMessages = async (socket, verif) => {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    const messages = await Message.Message.find({});
    messages.forEach(message => {
      socket.emit('chat message', message.content, message.id);
    });
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect();
  }
};

exports.sendMessage = async (msg, verif, io) => {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    const newMessage = new Message.Message({ content: msg, id: verif });
    await newMessage.save();
    io.emit('chat message', msg, verif);
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect();
  }
};