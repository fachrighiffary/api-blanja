const express = require("express")

const productsModel = require("../models/products")

const db = require("../configs/mySQL");


module.exports = {
    getAllProducts : ("/", (req,res) => {
        productsModel
        .getAllProducts()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err)
        })
        })
}