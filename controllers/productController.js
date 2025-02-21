import Product from "../models/product.js";
import { isItAdmin } from "./userController.js";

export function addProduct(req, res) {

  if (req.user == null) {
    res.status(401).json({
      message: "Please login and try again"
    })
    return
  }
  if (req.user.role != "admin") {
    res.status(403).json({
      message: "You are not authorized to perform this action"
    })
    return
  }

  const data = req.body;
  const product = new Product(data);

  try {
    product.save().then(() => {
      res.status(201).send({ message: "Product added successfully" })
    })
  } catch (error) {
    res.status(500).json({
      error: "Product registration failed"

    })
  }
}

export async function getAllProducts(req, res) {

  try {
    if (isItAdmin(req)) {
      const products = await Product.find();
      res.send(products);
    } else {
      const products = await Product.find({ availablity: true });
      res.send(products);
      console.log("products", products);
    }


  } catch (error) {
    res.status(400).send({ message: "fail to get products" });
  }
}

export async function deleteProduct(req, res) {
  try {
    if (isItAdmin(req)) {
      await Product.findOneAndDelete(req.params.key);
      res.json({ message: "Product deleted successfully" });
    } else {
      res.status(403).json({ message: "You are not authorized to perform this action" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
}


export async function updateProduct(req, res) {
  try {
    if (!isItAdmin(req)) {
      return res.status(403).json({ message: "You are not authorized to perform this action" });
    }

    const data = req.body;
    await Product.findOneAndUpdate({ key: req.params.key }, data);

    res.json({ message: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
}

