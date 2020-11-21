const express = require("express")
const db = require("../configs/mySQL")

const searchRouter = express.Router();
const searchController = require("../controllers/search");
const { search } = require("./products");


searchRouter.get("/", searchController.searchProduct);



module.exports = searchRouter