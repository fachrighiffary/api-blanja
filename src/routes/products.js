const express = require("express");
const db = require("../configs/mySQL");

const productRouter = express.Router();

// const db = require("../configs/mySQL");

const productController = require("../controllers/products");


//localhost:8000/products
productRouter.get("/", productController.getAllProducts);

//localhost:8000/products => method post
productRouter.post("/", (req, res) => {
    //mendapatkan object request dari client
    //melakukan query ke db
    //mengirim response

    const { body } = req;
    const insertBody = {
        ...body,
        input_date: new Date(Date.now()),
        update_date: new Date(Date.now()),
    };
    const postNewProduct = new Promise((resolve, reject) => {
        const  qs = "INSERT INTO products SET ?";
        db.query(qs, insertBody, (err, data) => {
            if(!err){
                resolve(data);
            } else{
                reject(err);
            }
        })
    })
    postNewProduct
    .then((data) => {
        const resObject ={
            msg: "Input Successfully",
            data: {id: data.insertId, ...insertBody},
        };
        res.json(resObject);
    })
    .catch((err) => {
        res.json(err);
    });
});



module.exports = productRouter;