const express = require("express")
const db = require("../configs/mySQL")

const transactionRouter = express.Router();

const transactionController = require("../controllers/transaction");


transactionRouter.post("/", transactionController.postTransaction);



module.exports = transactionRouter;