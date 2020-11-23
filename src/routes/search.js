const express = require("express")
const searchRouter = express.Router();
const searchController = require("../controllers/search");



searchRouter.get("/name", searchController.searchNameProduct);
searchRouter.get("/category", searchController.searchCategoryProduct);


module.exports = searchRouter