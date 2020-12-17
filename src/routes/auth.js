const authRouter = require("express").Router()
const authController = require('../controllers/auth');
const checkToken = require("../helpers/middleware/checkToken");



authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.post("/logout", authController.logout)
authRouter.get("/user/:id", checkToken.login, authController.user)

module.exports = authRouter