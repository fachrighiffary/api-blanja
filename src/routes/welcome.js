const express = require("express")

const welcomeRouter = express.Router();

//localhost:8000/products
//endpoint => /products


//membuat handler untuk endpoint
welcomeRouter.get("/", (req, res) => {
    res.send("Hellow World")
});

module.exports  = welcomeRouter;