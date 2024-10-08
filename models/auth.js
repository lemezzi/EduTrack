const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var schemaAuth = mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

var url = 'mongodb://localhost:27017/Ecole';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });


var User = mongoose.model('User', schemaAuth);
exports.user=mongoose.model('User', schemaAuth);
exports.RegisterDataModel = (name, email, password) => {
    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{

                return User.findOne({email:email})
        }).then((user)=>{
                    if(user){
                        mongoose.disconnect()
                        reject('email is used')
                    }else{
                    return bcrypt.hash(password,10)
                    }
        }).then((hPassword)=>{
             let user=new User({
                 name:name,
                 email:email,
                 password:hPassword
             })
            return user.save()
        }).then((user)=>{
            mongoose.disconnect()
            resolve('registered !')
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)

    })
    })


};




    exports.LoginDataModel=(email,password)=>{
        return new Promise((resolve,reject)=>{
            mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    
               return User.findOne({email:email})
    
            }).then((user)=>{
                if(user){
                    bcrypt.compare(password,user.password).then((verif)=>{
                        if(verif){
                            mongoose.disconnect()
                            resolve(user._id)
    
                        }else{
                            mongoose.disconnect()
                            reject('invalid password')
                        }
    
                    })
                }else{
                    mongoose.disconnect()
                    reject("we don't have this user in our database")
    
                }
    
            }).catch(()=>{
                reject(err)
            })
    
    
    
    
    
    
        })
    
    
    
    
    }

