const express = require("express");

const mainRouter = express.Router();

const productsRouter = require("./products")
const productRouter = require("./product")
const searchRouter = require("./search");
const transactionRouter = require("./transaction");
const detailTransaction = require("./detailTransaction");
const authRouter = require("./auth")
const imageUploadRouter = require("./imageUpload")
const userRouter = require("./user");
//const checkToken = require("../helpers/middleware/checkToken")


mainRouter.use("/products", productsRouter) //localhost:8000/products
mainRouter.use("/product", productRouter) //localhost:8000/product
mainRouter.use("/search", searchRouter);//localhost:8000/search
mainRouter.use("/transaction", transactionRouter);//localhost:8000/transaction
mainRouter.use("/dtl-transaction", detailTransaction);//localhost:8000/dtl-transaction
mainRouter.use("/auth", authRouter); //localhost:8000/auth
mainRouter.use("/upload", imageUploadRouter); //localhost:8000/auth
mainRouter.use("/user", userRouter); //localhost:8000/user



module.exports = mainRouter;