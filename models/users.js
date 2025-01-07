import express from 'express';
import mongoose from 'mongoose';


const userschema = new mongoose.Schema({
   
    email : {
        type: String,
        required: true,
        unique: true
    } ,
    password : {
        type: String,
        required: true
    },
    first_name :{
        type: String,
        required: true, 
       unique: true
    },
    last_name :{    
        type: String,
        required: true

    },
    address:{
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    }
    ,
    role: { 
        type: String,
        required: true
    }


})

const User = mongoose.model('users', userschema);

export default User