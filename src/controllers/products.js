const productsModel = require("../models/products")
const form = require("../helpers/form")

module.exports = {
    getAllProducts : (_,res) => {
        productsModel
        .getAllProducts()
        .then((data) => {
            form.success(res,data)
        })
        .catch((err) => {
           form.error(res,err)
        })
    },

    createProducts : (req, res) => {
        const { body } = req;
        const insertBody = {
            ...body,
            input_date: new Date(Date.now()),
            update_date: new Date(Date.now()),
        };
        productsModel
        .createProducts(insertBody)
        .then((data) => {
            const resObject ={
                msg: "Input Successfully",
                data: {id: data.insertId, ...insertBody},
            };
            res.json(resObject);
        })
        .catch((err) => {
            const errMsg = ({
                msg : "Input Failed",
                err
            })
            res.json(errMsg);
        });
    }
}

