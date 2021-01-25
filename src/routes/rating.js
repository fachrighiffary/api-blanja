const express = require("express")

const RatingRouter = express.Router();
const checkToken = require("../helpers/middleware/checkToken");

const RatingController = require("../controllers/rating");

RatingRouter.post("/", RatingController.createRating);
RatingRouter.get("/:id", RatingController.getAllRating);



module.exports = RatingRouter