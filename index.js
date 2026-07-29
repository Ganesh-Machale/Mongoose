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
   
      const user1 = new User({name:"Ganesh",email:"ganesh@gmail.com",age:19});
          user1.save();
      const user2 = new User({name:"Aditya",email:"Aditya@gmail.com",age:20});
          user2.save();
     