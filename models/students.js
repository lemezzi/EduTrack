const mongoose = require('mongoose');

var studentschema = mongoose.Schema({
    first: String,
    last: String,
    email: String,
    classe: String,
    cin: String,
    id:String,
});

var url = 'mongodb://localhost:27017/Ecole';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

var Student = mongoose.model('Student', studentschema);


exports.getstudents=(id)=>{

  return new Promise((resolve,reject)=>{
  
      mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          return Student.find({id:id})
    
        }).then(students=>{
            mongoose.disconnect();
            resolve(students);
    
        }).catch(err=>reject(err))
  
  
  
  
     })
  


};

exports.getonestudent=(id)=>{

return new Promise((resolve,reject)=>{

    mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
        return Student.find({_id:id})
  
      }).then(students=>{
          mongoose.disconnect();
          resolve(students);
  
      }).catch(err=>reject(err))




   })



};


exports.getstudents=(id)=>{

    return new Promise((resolve,reject)=>{
    
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            return Student.find({id:id})
      
          }).then(students=>{
              mongoose.disconnect();
              resolve(students);
      
          }).catch(err=>reject(err))
    
    
    
    
       })
    


};









var subjectschema = mongoose.Schema({
    name:String,
    description:String,
    coeff:String,
    classe:String,
    id:String,

});


var Subject = mongoose.model('Subject', subjectschema);

exports.Registersubject = (name, description, coeff, classe, id) => {
  return new Promise((resolve, reject) => {
      mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
          .then(() => {
              let subject = new Subject({
                  name: name,
                  description: description,
                  coeff: coeff,
                  classe: classe,
                  id: id
              });

              return subject.save();
          })
          .then((savedSubject) => {
              console.log('subject registered:', savedSubject);
              mongoose.disconnect(); // Déconnexion après avoir enregistré

              resolve('registered!');
          })
          .catch((err) => {
              console.error('Error registering subject:', err);
              mongoose.disconnect(); // Déconnexion en cas d'erreur

              reject(err);
          });
  });
};


exports.Registerstudent = (first, last, email, classe, cin, id) => {
  return new Promise((resolve, reject) => {
      mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
          .then(() => {
              let user = new Student({
                  first: first,
                  last: last,
                  email: email,
                  classe: classe,
                  cin: cin,
                  id: id
              });

              return user.save();
          })
          .then((savedUser) => {
              console.log('Student registered:', savedUser);
              mongoose.disconnect(); // Déconnexion après avoir enregistré

              resolve('registered!');
          })
          .catch((err) => {
              console.error('Error registering student:', err);
              mongoose.disconnect(); // Déconnexion en cas d'erreur

              reject(err);
          });
  });
};

exports.getsubjects=(id)=>{

    return new Promise((resolve,reject)=>{
    
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            return Subject.find({id:id})
      
          }).then(subjects=>{
              mongoose.disconnect();
              resolve(subjects);
      
          }).catch(err=>reject(err))
    
    
    
    
       })
    


};

exports.getonestudent=(id)=>{

  return new Promise((resolve,reject)=>{
  
      mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          return Student.find({_id:id})
    
        }).then(subjects=>{
            mongoose.disconnect();
            resolve(subjects);
    
        }).catch(err=>reject(err))
  
  
  
  
     })
  


};

exports.finalannoter = (classe) => {
    return new Promise((resolve, reject) => {
      mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
          return Subject.find({ classe: classe });
        })
        .then((subjects) => {
          mongoose.disconnect()
            .then(() => {
              resolve(subjects);
            })
            .catch((disconnectionError) => {
              reject(disconnectionError);
            });
        })
        .catch((err) => {
          mongoose.disconnect()
            .then(() => {
              reject(err);
            })
            .catch((disconnectionError) => {
              reject(disconnectionError);
            });
        });
    });
  };






  
  const notesSchema = new mongoose.Schema({
    id: String,
    subject: [String], 
    notes: [String] ,
    coeff:[String]
});
  var finalnotes= mongoose.model('Note', notesSchema);

  exports.Registernotes = async (id, matiere, notes, coeff) => {
    try {
      await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  
      const final = new finalnotes({
        id: id,
        subject: matiere,
        notes: notes,
        coeff: coeff
      });
  
      await final.save();
      console.log('notes registered:', final);
      return 'registered!';
    } catch (err) {
      console.error('Error registering notes:', err);
      throw err;
    } finally {
      mongoose.disconnect();
    }
  };



exports.Loginetudiant = (email, cin) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        return Student.findOne({ email: email });
      })
      .then((user) => {
        if (user) {
          console.log(user);
          
          if (user.cin == cin) {
            
            resolve(user);
          } else {
            mongoose.disconnect();
            reject('Invalid password');
          }
        } else {
          mongoose.disconnect();
          reject("We don't have this user in our database");
        }
      })
      .catch((err) => {
        reject(err);
        mongoose.disconnect();
      });
  });
};


exports.getsubjectnotes=(id)=>{

  return new Promise((resolve,reject)=>{
  
      mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          return finalnotes.findOne({id:id})
    
        }).then(Notes=>{
            mongoose.disconnect();
            resolve(Notes);
    
        }).catch(err=>reject(err))
  
  
  
  
     })
  


};









const coursSchema = new mongoose.Schema({
  id:String,
  title:String,
          
  description:String,
  
  image:String,
  classe:String,
});
var course= mongoose.model('cours', coursSchema);
exports.postAddCours=(title,description,image,id,classe)=>{

  return new Promise((resolve,reject)=>{

  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>{

      let cours=new course({
        id:id,  
        title:title,
          
          description:description,
          
          image:image,
          classe:classe,
          

      })
      return(cours.save())
  }

  )
  .then(
      ()=>{
          mongoose.disconnect();
          resolve('added!');
      }
  )
  .catch((err)=>{
      mongoose.disconnect();
      reject(err);
  })




  })


}




exports.getmycourses = (id) => {
  return new Promise((resolve, reject) => {
      mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
          .then(() => {
              return course.find({id:id});
          })
          .then(courses => {
              mongoose.disconnect();
              resolve(courses);
          })
          .catch(err => {
              mongoose.disconnect();
              reject(err);
          });
  });
};


exports.getclassename = (id) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        return Student.findOne({ _id: id }, 'classe'); // Projeter uniquement le champ 'classe'
      })
      .then((student) => {
        mongoose.disconnect();
        if (student) {
          resolve(student); 
        } else {
          reject(new Error('Student not found'));
        }
      })
      .catch((err) => {
        mongoose.disconnect();
        reject(err);
      });
  });
};

exports.getcoursesetudiant = (classe) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        return course.find({ classe: classe });
      })
      .then(courses => {
        mongoose.disconnect();
        resolve(courses);
      })
      .catch(err => {
        mongoose.disconnect();
        reject(err);
      });
  });
};











const messageSchema = new mongoose.Schema({
    content: String,
    id:String,
    timestamp: { type: Date, default: Date.now }
});

exports.Message=mongoose.model('Message', messageSchema);





exports.deletestudent=(id)=>{
  return new Promise((resolve,reject)=>{
  
   mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
       return Student.deleteOne({_id:id})
 
     }).then(Students=>{
         mongoose.disconnect()
         resolve(true)
 
     }).catch(err=>reject(err))




  })


}


exports.deletesubject=(id)=>{
  return new Promise((resolve,reject)=>{
  
   mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
       return Subject.deleteOne({_id:id})
 
     }).then(subjects=>{
         mongoose.disconnect()
         resolve(true)
 
     }).catch(err=>reject(err))




  })


}






exports.postUpdateStudent = (id, first, last, email, classe, numcin, idi) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        // Utilisation de updateOne pour mettre à jour un seul document qui correspond à l'ID donné
        return Student.updateOne({ _id: id }, {
          first: first,
          last: last,
          email: email,
          classe: classe,
          cin: numcin,
          id: idi
        });
      })
      .then((result) => {
        mongoose.disconnect();
        resolve('Updated!');
      })
      .catch((err) => {
        mongoose.disconnect();
        reject(err);
      });
  });
};