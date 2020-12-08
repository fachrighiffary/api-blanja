const express = require("express");

const productsRouter = express.Router();
const checkToken = require("../helpers/middleware/checkToken")

// const db = require("../configs/mySQL");

const productsController = require("../controllers/products");
const multipleUpload = require("../helpers/middleware/upload");

//localhost:8000/products
productsRouter.get("/", productsController.getAllProducts);
productsRouter.get("/popular", productsController.getPopularProducts);

//localhost:8000/products => method post
productsRouter.post("/",checkToken,multipleUpload, productsController.createProducts);




module.exports = productsRouter;