const mongoose = require('mongoose');
 
 main()
     .then(()=>{
        console.log("connection successful");
     })
     .catch((err)=>{
        console.log(err);
     })

    async function main() {
        mongoose.connect("mongodb://127.0.0.1:27017/Amazon");
    }


                   //   writing schema in proper format
          const bookschema = new mongoose.Schema({
              title :{
                type: String,
                required: true,
              },
              autor:{
                type: String,
              },
              Discount:{
                type:Number,
                default:0,
              },
              price: {
                type: Number,
                min:[1,"price is too low"],
              },
          });


          const Book = mongoose.model("Book",bookschema);

  Book.findByIdAndUpdate("6a70a755d3ead36fa89a3436",{price:700},{runValidators:true}).then((res)=>{
      console.log(res);
     }).catch((err)=>{
      console.log(err);
     });