const express = require("express");

const productRouter  = express.Router();

const productController = require("../controllers/product")
const checkToken = require("../helpers/middleware/checkToken");
const multipleUpload = require("../helpers/middleware/upload");
//req params
//localhost:8000/product/{params}



productRouter.get("/:id", productController.getProductByid);
productRouter.delete("/:id",checkToken, productController.deleteProduct);
productRouter.put("",checkToken, multipleUpload, productController.updateProduct);

//productRouter.get("/:id", )



module.exports = productRouter;

