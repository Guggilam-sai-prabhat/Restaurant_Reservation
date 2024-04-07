import mongoose from "mongoose";
import validator from "validator";


const reservationSchema = new mongoose.Schema({
    firstName :{
        type:String,
        required:true,
        minLenght: [3,"First Name must be at least 3 characters"],
        maxLenght: [30,"First Name must be less than 30 characters"]
    },

    lastName :{
        type:String,
        required:true,
        minLenght: [3,"Last Name must be at least 3 characters"],
        maxLenght: [10,"Last Name must be less than 10 characters"]

    },

    email :{
        type:String,
        required:true,
        validate: [validator.isEmail,"Please enter a valid email"]
        
    },

    phoneNumber :{
        type:String,
        minLenght: [10,"Phone Number must be at least 10 characters"],
        maxLenght: [12,"Phone Number must be less than 12 characters"]
    },

    time:{
        type:String,
        required:true,
    },

    date :{
        type:String,
        required:true,
    }



})

export const Reservation = mongoose.model("Reservation",reservationSchema);