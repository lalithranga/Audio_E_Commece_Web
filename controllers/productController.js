
import express from "express";
import Product from "../models/product.js";

export function addProduct(req, res) {

    if(req.user == null){
        res.status(401).json({
          message : "Please login and try again"
        })
        return
      }
      if(req.user.role !="admin"){
        res.status(403).json({
          message : "You are not authorized to perform this action"
        })
        return
      }

    const data = req.body;
    const product = new Product(data);

    product.save().then(() => {
        res.status(201).send({ message: "Product added successfully" })    
    }).catch((error) => {
      
    })
    }