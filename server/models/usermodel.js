const  mongoose  = require("mongoose");
 const UserSchema= new mongoose.Schema({
    
  
    name:String,
    userid:String,
    lastname:String,
    email: {type:String,
        required:true,
        unique:true,
        match : [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'please type a valid email']
    },
    age:Number,

    password : {type:String,
        required:true},


        address: {
          type: String,
          },  

    phonenumber: {
            type: String,
          },
          city: {
            type: String,
          },
 
  
    specialization: {
            type: String,
          },

     experience: {
            type: String,
          },  
    feePerCunsultation: {
            type: String,
          }, 

         
          Image: {
            type: mongoose.Schema.Types.Mixed
          },
          Role: {type:String,
            enum:['Doctor','Patient']},

            


        
})

module.exports = mongoose.model("user", UserSchema )





 
