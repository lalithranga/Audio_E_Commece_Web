import { get } from "mongoose";
import User from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import product from "../models/product.js";



export function userRegister(req, res) {
    const data = req.body;

    data.password = bcrypt.hashSync(data.password, 10);
    const user = new User(data);
    console.log("just camuyoyoe")
   
    user.save().then(() => {
        res.status(201).send({ message: "User registered successfully" })
        console.log("iloweuoiyoyo")
    }).catch((error) => {
        res.status(400).send({ error: "User registration failed" })
        console.log("error is", error)
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
        if (user == null) {
            res.status(400).send({ message: "User not found" })
        }
        else {

            const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
            if (isPasswordValid) {
                const token = jwt.sign({
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    role: user.role,
                    profilePicture: user.profilePicture

                }, process.env.SECRET_KEY);
                res.status(200).send({ message: "Login successful", token: token, user: user });
            }
            else {
                res.status(400).send({ message: "Invalid password" });
            }
        }
    })

}

export function isItAdmin(req) {
    let isAdmin = false;

    if (req.user != null && req.user.role == "admin") {

        isAdmin = true;

        return isAdmin;
    }

}
export function isCusttomer(req) {
    let isCustomer = false;

    if (req.user != null && req.user.role == "customer") {
        isCustomer = true;

        return isCustomer;
    }
}
export async function selectedProduct(req, res) {
    try {

        const user = await User.find().populate('productName');

        res.status(200).send(user);

    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

