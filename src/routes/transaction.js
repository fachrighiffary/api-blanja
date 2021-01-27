const express = require("express")

const transactionRouter = express.Router();

const transactionController = require("../controllers/transaction");
const checkToken = require("../helpers/middleware/checkToken");


transactionRouter.post("/", transactionController.postTransaction);
transactionRouter.post("/itemOrder", transactionController.postMultiple)

transactionRouter.get("/:id",checkToken.login, transactionController.getTransaction);



module.exports = transactionRouter;