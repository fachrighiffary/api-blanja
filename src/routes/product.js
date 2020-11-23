const express = require("express");

const productRouter  = express.Router();

const productController = require("../controllers/product")

//req params
//localhost:8000/product/{params}



productRouter.get("/:id", productController.getProductByid);
productRouter.delete("/:id", productController.deleteProduct);
productRouter.put("", productController.updateProduct);

//productRouter.get("/:id", )



module.exports = productRouter;

