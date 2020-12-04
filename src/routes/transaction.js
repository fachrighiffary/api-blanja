const express = require("express")

const transactionRouter = express.Router();

const transactionController = require("../controllers/transaction");


transactionRouter.post("/", transactionController.postTransaction);



module.exports = transactionRouter;