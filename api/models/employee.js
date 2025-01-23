const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeId:{
        type:String,
        required:true,
        unique:true,
    },
    employeeName:{
        type:String,
        require:true
    },

    joiningDate:{
        type:String,
        required:false
    },
    dateOfBirth:{
        type:String,
        required:false
    },
    salary:{
        type:Number,
        required:true
    },
    activeEmployee:{
        type:Boolean,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Employee = mongoose.model("Employee",employeeSchema);

module.exports = Employee;