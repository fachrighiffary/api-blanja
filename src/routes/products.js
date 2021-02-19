const express = require("express");

const productsRouter = express.Router();
const checkToken = require("../helpers/middleware/checkToken")
const productsController = require("../controllers/products");
const multipleUpload = require("../helpers/middleware/upload");

productsRouter.get("/", productsController.getAllProducts);
productsRouter.post("/",checkToken.login,  checkToken.seller, multipleUpload, productsController.createProducts);
productsRouter.get("/:id", checkToken.login, productsController.getProductByUser);




module.exports = productsRouter;