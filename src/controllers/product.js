const express = require("express")

const db = require("../configs/mySQL")

const productModel = require("../models/product")


module.exports = {
    getProductByid : (req, res) => {

        productModel
        .getProductByid(req)
        .then((data) => {
            if(data.length){
                res.json(data[0])
            }res.status(404).json({
                msg: "Data not found"
            })
        })
        .catch((err) => {
            console.log(json(err))
        })
    },
    deleteProduct : (req, res) => {
        productModel
        .deleteData(req)
        .then((data) => {
            res.json({
                msg: 'Deleted Successfully'
            })
        })
        .catch((err) => {
            res.json({
                msg : 'Delete Failed',
            })
            res.json(err)
           
        })
    },
    updateProduct : (req, res) => {
        const { id } = req.body
        const { body } = req
        const updateBody = {
           ...body,
            update_date: new Date(Date.now()),
        };
        const idBody = {id};
        
        productModel
        .updateProduct(updateBody,idBody)
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
    }

}