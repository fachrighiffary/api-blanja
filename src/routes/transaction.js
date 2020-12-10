const express = require("express")

const transactionRouter = express.Router();

const transactionController = require("../controllers/transaction");
const checkToken = require("../helpers/middleware/checkToken");


transactionRouter.post("/",checkToken, transactionController.postTransaction);



module.exports = transactionRouter;