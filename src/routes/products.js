const express = require("express");

const productsRouter = express.Router();

// const db = require("../configs/mySQL");

const productsController = require("../controllers/products");

//localhost:8000/products
productsRouter.get("/", productsController.getAllProducts);
productsRouter.get("/popular", productsController.getPopularProducts);

//localhost:8000/products => method post
productsRouter.post("/", productsController.createProducts);




module.exports = productsRouter;