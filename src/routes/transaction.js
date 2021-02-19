const express = require("express")

const transactionRouter = express.Router();

const transactionController = require("../controllers/transaction");
const checkToken = require("../helpers/middleware/checkToken");


transactionRouter.post("/", transactionController.postTransaction);
transactionRouter.post("/itemOrder", transactionController.postMultiple);
transactionRouter.get("/:id",transactionController.getTransaction);
transactionRouter.get("/detail/:id",transactionController.getDetailTransaction);
transactionRouter.get("/", transactionController.getAlltransaction)
transactionRouter.patch("/:id", transactionController.updateTransaction)



module.exports = transactionRouter;