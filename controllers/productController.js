import product from "../models/product'js";
import express from "express";

export function getAllProducts(req, res) {
    product.find().then((products) => {
        res.send(products)
    }).catch((error) => {
        res.status(400).send({ message: error.message })
    })
}