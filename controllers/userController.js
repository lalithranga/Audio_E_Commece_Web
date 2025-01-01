import { get } from "mongoose";
import User from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export function userRegister(req, res) { 
    const data = req.body;

    data.password = bcrypt.hashSync(data.password, 10);
    const user = new User(data);

    user.save().then(() => {
        res.status(201).send({ message: "User registered successfully" })
    }).catch((error) => {
        res.status(400).send({ message: error.message })
    })
}

export function getAllUsers(req, res) {
    User.find().then((users) => {
        res.send(users)
    }).catch((error) => {
        res.status(400).send({ message: error.message })
    })
}
export function loginUser(req, res) {
    User.findOne({ email: req.body.email }).then((user) => {
        if(user==null){
            res.status(400).send({ message: "User not found" })}
            else{

                const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
                if (isPasswordValid) {
                    const token = jwt.sign({ 
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        role : user.role

                    }, "secretKey");
                    res.status(200).send({ message: "Login successful", token: token });
            } 
            else {
                res.status(400).send({ message: "Invalid password" });
            }
        }
    })
   
}