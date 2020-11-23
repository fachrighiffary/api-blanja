const express = require("express")
const db = require("../configs/mySQL")

const searchRouter = express.Router();
const searchController = require("../controllers/search");
const form = require("../helpers/form");


// search name
searchRouter.get("/name", searchController.searchNameProduct);
//search category
searchRouter.get("/category", searchController.searchCategoryProduct);

//sort product name
searchRouter.get("/sortName", searchController.sortNameProduct);

//sort product new
searchRouter.get("/sortNew", searchController.sortNewProduct);

//sort product harga
searchRouter.get("/sortPrice", searchController.sortPriceProduct);



module.exports = searchRouter