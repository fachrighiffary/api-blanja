const express = require("express")

const detailTransaction = express.Router();

const detailController = require("../controllers/detailTransaction");
const checkToken = require("../helpers/middleware/checkToken");

detailTransaction.post("/",checkToken, detailController.postDetailTransaction);
detailTransaction.get("/history",checkToken, detailController.historyTransaction);



module.exports = detailTransaction;