const express = require("express");
const db = require("../configs/mySQL");

const productsRouter = express.Router();

// const db = require("../configs/mySQL");

const productsController = require("../controllers/products");

//localhost:8000/products
productsRouter.get("/", productsController.getAllProducts);

//localhost:8000/products => method post
productsRouter.post("/", productsController.createProducts);




module.exports = productsRouter;