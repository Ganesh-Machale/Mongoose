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

      // User.find({age:21}).then((res)=>{
      //    console.log(res);
      // }).catch((err)=>{
      //    console.log(err);
      // })


      //  User.findById("6a6a3016cacee05c38ea2c79").then((res)=>{
      //   console.log(res);
      //  }).catch((err)=>{
      //   console.log(err);
      //  });


      // User.findOneAndUpdate({age:{$gt:27}}, {age:29},{new:true})
      // .then((res)=>{
      //    console.log(res);
      // }).catch((err)=>{
      //    console.log(err);
      // });

      // User.findByIdAndUpdate(
      //    ("6a6a1da5ffc6bf21db0ae40e"),
      //    {name:"Ganesh Machale" , email:"ganeshmachale001@gmail.com"},
      //    {new:true})
      //           .then((res)=>{
      //              console.log(res);
      //          }).catch((err)=>{
      //                 consolr.log(err);
      //                   });

      // User.insertOne({name:"Pranav",email:"pranav@gmail.com",age:24}).then((res)=>{
      //    console.log(res);
      // }).catch((err)=>{
      //    console.log(err);
      // });
                 


                      //   writing schema in proper format
      const bookschema = new mongoose.Schema({
          title :{
            type: String,
            required: true,
          },
          autor:{
            type: String,
          },
          price: {
            type: Number,
          },
      });