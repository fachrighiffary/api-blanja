const authRouter = require("express").Router()
const authController = require('../controllers/auth');
const checkToken = require("../helpers/middleware/checkToken");


// authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);

authRouter.post("/register", checkToken.isRegistered, authController.register) //register
authRouter.get("/activate/:email/:otp", authController.activate) //aktifasi otp
authRouter.post("/resend", authController.resend) //reset otp
authRouter.post("/forgot-password", authController.forgot) //send otp to email
authRouter.get("/check-otp/:email/:otp", authController.otp) //check otp and email to reset password
authRouter.patch("/reset-password", authController.reset) //reset the password
authRouter.patch('/change-password', authController.changePassword) //change old password to new passw

authRouter.post("/logout", authController.logout)
authRouter.get("/user/:id", checkToken.login, authController.user)

module.exports = authRouter