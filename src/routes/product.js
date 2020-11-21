const express = require("express");

const productRouter  = express.Router();

const db = require("../configs/mySQL")

//req params

//localhost:8000/product/{params}
productRouter.get("/:id", (req, res) => {
    const {id} = req.params;
    const getProductByid = new Promise((resolve, reject) => {
        const qs = "SELECT p.product_name,c.category_name, s.store_name,p.product_price,p.product_qty,p.product_size,p.product_desc FROM products AS p JOIN category AS c ON c.id = p.category_id JOIN store AS s ON s.id = p.store_id WHERE p.id = ?"
        db.query(qs, id, (err, data) => {
            if(!err) {
                resolve(data);
            }else{
                reject(err);
            }
        });
    });
    getProductByid
    .then((data) => {
        if(data.length){
            res.json(data[0])
        }res.status(404).json({
            msg: "Data not found"
        })
    })
    .catch((err) => {
        express.json(err)
    })
})

productRouter.delete("/:id", (req, res) => {
    const {id} = req.params;
    const deleteData = new Promise((resolve, reject) => {
        const qs ="DELETE FROM `products` WHERE id = ?"
        db.query(qs, id, (err, data) => {
            if(!err){
                resolve(data);
            }else{
                reject(err)
            }
        })
    })
    deleteData
    .then((data) => {
        res.json({
            msg: 'Deleted Successfully'
        })
    })
    .catch((err) => {
        express.json(err)
    })
})

productRouter.put("", (req, res) => {

    const {id, category_id, store_id, product_name, product_price, product_qty, product_desc, product_size, update_date } = req.body

    const updateBody = {
        id,category_id, store_id, product_name, product_price, product_qty, product_desc, product_size,update_date, update_date: new Date(Date.now()),
    };
    const idBody = {id};
    const updateProduct = new Promise((resolve, reject) => {
        const qs = "UPDATE products SET ? WHERE  ?"
        db.query(qs,[updateBody, idBody], (err, data) => {
            if(!err) {
                resolve(data);
            }else{
                reject(err);
            }
        });
    });
    updateProduct
    .then((data) => {
        const resObject ={
            msg: "Update Successfully",
            data: {id: data.updateId, updateBody},
        };
        res.json(resObject);
    })
    .catch((err) => {
        const error = {
            msg: "Update Failed",
            err 
        }
        res.json(error);
    });
})


module.exports = productRouter;

