const express = require("express");

const mainRouter = express.Router();

const welcomeRouter = require("./welcome");
const productsRouter = require("./products")

mainRouter.use("/", welcomeRouter); //localhost:8000
mainRouter.use("/products", productsRouter) //localhost:8000//products


module.exports = mainRouter;