const express = require("express")

const db = require("../configs/mySQL")

const productsModel = require("../models/products")
const form = require("../helpers/form")

module.exports = {
    getAllProducts : ("/", (_,res) => {
        productsModel
        .getAllProducts()
        .then((data) => {
            form.success(res,data)
        })
        .catch((err) => {
           form.error(res,err)
        })
    })
}
