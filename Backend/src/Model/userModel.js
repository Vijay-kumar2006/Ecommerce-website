const {model} = require('mongoose');
const mongoose = require('mongoose');

const userSchema =new mongoose.Schema ({
    name:{
        type: String,
        required: [true, "Please enter your name!"],
      },
      email:{
        type: String,
        required: [true, "Please enter your email!"],
      },
      password:{
        type: String,
        required: [true, "Please enter your password"],
        minLength: [4, "Password should be greater than 4 characters"],
        
      },

      cart:[
        {
          productId:{
            type:String,
            unique:true,
            required:true
            },
            productName:{
              type:String,
              required:true,
              unique:true
              },
              quantity:{
                type:Number,
                min:1,
                required:true
              }
        }

      ]
    //   phoneNumber:{
    //     type: Number,
    //   },
      addresses:[
        {
          country: {
            type: String,
          },
          city:{
            type: String,
          },
          address1:{
            type: String,
          },
          address2:{
            type: String,
          },
          zipCode:{
            type: Number,
          },
          addressType:{
            type: String,
          },
        }
      ],
    //   role:{
    //     type: String,
    //     default: "user",
    //   },
    //   avatar:{
    //     public_id: {
    //       type: String,
    //       required: true,
    //     },
    //     url: {
    //       type: String,
    //       required: true,
    //     },
    //  },
    //  createdAt:{
    //   type: Date,
    //   default: Date.now(),
    //  },
    //  resetPasswordToken: String,
    //  resetPasswordTime: Date,
    });

    const userModel=model('User',userSchema);  
    
    module.exports=userModel;