const express = require("express");

const productRouter = express.Router();

// const db = require("../configs/mySQL");

const productController = require("../controllers/products")
//localhost:8000/products

productRouter.get("/", productController.getAllProducts);

module.exports = productRouter;