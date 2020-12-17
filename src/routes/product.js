const express = require("express");

const productRouter  = express.Router();

const productController = require("../controllers/product")
const checkToken = require("../helpers/middleware/checkToken");
const multipleUpload = require("../helpers/middleware/upload");
//req params
//localhost:8000/product/{params}



productRouter.get("/:id", checkToken.login, productController.getProductByid);
productRouter.delete("/:id",checkToken.login,  checkToken.seller,  productController.deleteProduct);
productRouter.put("",checkToken.login,  checkToken.seller,  multipleUpload, productController.updateProduct);
productRouter.patch("/:id", checkToken.login,  checkToken.seller,  multipleUpload, productController.updateProd);
//productRouter.get("/:id", )



module.exports = productRouter;

