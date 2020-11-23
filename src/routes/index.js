const express = require("express");

const mainRouter = express.Router();

const productsRouter = require("./products")
const productRouter = require("./product")
const searchRouter = require("./search");
const transactionRouter = require("./transaction");
const detailTransaction = require("./detailTransaction");



mainRouter.use("/products", productsRouter) //localhost:8000/products
mainRouter.use("/product", productRouter) //localhost:8000/product
mainRouter.use("/search", searchRouter);//localhost:8000/search
mainRouter.use("/transaction", transactionRouter);//localhost:8000/transaction
mainRouter.use("/dtl-transaction", detailTransaction);//localhost:8000/dtl-transaction


module.exports = mainRouter;