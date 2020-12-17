const express = require("express")

const detailTransaction = express.Router();

const detailController = require("../controllers/detailTransaction");
const checkToken = require("../helpers/middleware/checkToken");

detailTransaction.post("/",checkToken.login, detailController.postDetailTransaction);
detailTransaction.get("/history",checkToken.login, detailController.historyTransaction);



module.exports = detailTransaction;