const express = require('express');
const path = require('path');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const flash = require('connect-flash');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');

const app = express();

// Database Connection
mongoose.connect('mongodb://localhost:27017/Ecole', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Middlewares
app.use(flash());
app.use(express.static(path.join(__dirname, 'assets')));
app.set('view engine', 'ejs');

const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/Ecole',
    collection: 'sessions',
});

app.use(session({
    secret: 'this is my secret key dfjkbnjdfnbhjshdvbshdvsd',
    store: store,
    resave: true,
    saveUninitialized: true,
}));

// Routers
const RouterIndex = require('./routers/index');
const RouterRegister = require('./routers/auth');
const RouterStudents = require('./routers/mystudents');
const RouterAddStudent = require('./routers/addstudent');
const RouterAddSubject = require('./routers/addsubject');
const RouterSubjects = require('./routers/mysubjects');
const RouterAnnoter = require('./routers/annoter');
const RouterLoginEtudiant = require('./routers/loginetudiant');
const RouterAddCours = require('./routers/addcours');
const RouterMesCours = require('./routers/mycourses');
const RouterCoursEtudiant = require('./routers/coursetudiant');
const RouterChat = require('./routers/chat');
const RouterNotesEtudiant=require('./routers/notespage');
const RouterDeleteEtudiant=require('./routers/deletestudent');
const RouterDeleteSubject=require('./routers/deletesubject');
const RouterUpdareStudent=require('./routers/updatestudent');


app.use('/', RouterIndex);
app.use('/', RouterRegister);
app.use('/', RouterAddStudent);
app.use('/', RouterStudents);
app.use('/', RouterAddSubject);
app.use('/', RouterSubjects);
app.use('/', RouterAnnoter);
app.use('/', RouterLoginEtudiant);
app.use('/', RouterAddCours);
app.use('/', RouterMesCours);
app.use('/', RouterCoursEtudiant);
app.use('/', RouterChat);
app.use('/',RouterNotesEtudiant);
app.use('/',RouterDeleteEtudiant);
app.use('/',RouterDeleteSubject);
app.use('/',RouterUpdareStudent)

// Chat Setup
const server = http.Server(app);
const io = socketIO(server);

const chatController = require('./controllers/chat');

io.on('connection', (socket) => {
    
    console.log('Un utilisateur est connecté');
   

    socket.on('verification', (verif) => {
        chatController.getMessages(socket,verif);
        
    });
    

    socket.on('disconnect', () => {
        console.log('Un utilisateur est déconnecté');
    });

    socket.on('chat message', (msg,verif) => {
        console.log('Message reçu : ' + msg+verif);
        // Enregistrer le nouveau message et l'émettre à tous les clients
        chatController.sendMessage(msg,verif, io);
    });
});

server.listen(5000, () => {
    console.log("Listening on port 5000");
});
