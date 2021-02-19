const express = require("express")
const userRouter = express.Router();


const userController = require("../controllers/user");
const checkToken = require("../helpers/middleware/checkToken");
const singleUpload = require("../helpers/middleware/upload")

userRouter.get("/:id",checkToken.login, userController.getUser);
userRouter.put("/",checkToken.login, singleUpload, userController.updateUser)
userRouter.get('/name/:id', userController.getNameUser)

module.exports = userRouter