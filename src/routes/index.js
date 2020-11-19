const express = require("express");

const mainRouter = express.Router();

const welcomeRouter = require("./welcome");




mainRouter.use(("/", welcomeRouter)); //localhost:8000


module.exports = mainRouter;