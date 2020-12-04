const express = require("express")

const detailTransaction = express.Router();

const detailController = require("../controllers/detailTransaction")

detailTransaction.post("/", detailController.postDetailTransaction);
detailTransaction.get("/history", detailController.historyTransaction);



module.exports = detailTransaction;