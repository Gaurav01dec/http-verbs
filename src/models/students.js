const mongoose = require("mongoose")
const validator = require("validator")

const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email Id, please check the id")
            }
        }
    },
    phone:{
        type:Number,
        // min:9,
        // max:11,
        required:true,
        unique:true 
    },
    address:{
        type:String,
        required:true
    }
})


// we will create a new collection 
const Student = new mongoose.model("Student",studentSchema)


//we will export this model 
module.exports = Student;