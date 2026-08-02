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
              price: {
                type: Number,
              },
          });