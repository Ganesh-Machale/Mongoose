const mongoose = require('mongoose');
 
 main()
     .then(()=>{
        console.log("connection successful");
     })
     .catch((err)=>{
        console.log(err);
     })

    async function main() {
        mongoose.connect("mongodb://127.0.0.1:27017/test");
    }

     const userSchema = new mongoose.Schema({
        name:String,
        email:String,
        age:Number,
     });

     const User = mongoose.model("User",userSchema);
   
    //   const user1 = new User({name:"Ganesh",email:"ganesh@gmail.com",age:19});
    //       user1.save();
    //   const user2 = new User({name:"Aditya",email:"Aditya@gmail.com",age:20});
    //       user2.save();
     
     
    //   User.insertMany([
    //     {name:"Suraj",email:"Suraj@gmail.com", age:21},
    //     {name:"vedant",email:"Vedant@gmail.com", age:22},
    //     {name:"Pranav",email:"Pranav@gmail.com", age:24}
    //   ]).then((res)=>{
    //     console.log(res);
    //   }).catch((err)=>{
    //     console.log(err);
    //   })

      User.find({age:21}).then((res)=>{
         console.log(res);
      }).catch((err)=>{
         console.log(err);
      })


       User.findById("6a6a3016cacee05c38ea2c79").then((res)=>{
        console.log(res);
       }).catch((err)=>{
        console.log(err);
       });

    