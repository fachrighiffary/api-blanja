const express = require("express")

const addressRouter = express.Router();
const checkToken = require("../helpers/middleware/checkToken");

const addressController = require("../controllers/address");

addressRouter.post("/", checkToken.login, addressController.createAddress);
addressRouter.get("/:id", checkToken.login, addressController.getAllAddress);
addressRouter.get("/detail/:id", checkToken.login, addressController.getAddressById);
addressRouter.delete("/:id", checkToken.login, addressController.deleteAddress)
addressRouter.put("/:id", checkToken.login, addressController.updateAddress)


module.exports = addressRouter