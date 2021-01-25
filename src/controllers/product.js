const productModel = require("../models/product")
const form = require("../helpers/form")
const fs = require('fs')

module.exports = {
    getProductByid : (req, res) => {
        productModel
        .getProductByid(req)
        .then((data) => {
            if (data.length) {
                res.json({
                  data,
                });
              } else {
                res.status(404).json({
                  msg: "Data not Found",
                });
              }
        })
        .catch((err) => {
            form.error(res,err)
         })
    },
    deleteProduct : (req, res) => {
        productModel
        .deleteProduct(req)
        .then((data) => {
            res.json({
                msg: 'Deleted Successfully',
                data 
            })
        })
        .catch((err) => {
            const error = {
                msg: "Deleted Failed",
                err 
            }
            res.json(error);
        });
    },
    updateProduct : (req, res) => {
        const { id } = req.params
        const { body } = req
        const multipleImage = req.filePath

        const updateBody = {
           ...body,
           product_img : multipleImage,
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
    },
    updateProd : (req, res) => {
        const {id} = req.params;
        let {body} = req;
        if(req.filepath != ''){
            body = {
                ...body,
                product_img : req.filePath
            }
            productModel
            .deleteFile(id)
            .then((result) => {
                if(result[0]){
                    result[0].product_img.split(",").map((image) => 
                        fs.unlink(`public${image}`, (err) => {
                            if(err){
                                console.log(err)
                                return
                            }else {
                                console.log(`public${image} deleted`)
                            }
                        })
                    )
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }
        productModel
        .updateProd(body, id)
        .then((data) => {
            const updated = {
                ...body,
                product_img : req.filePath.split(",")
            }
            res.status(200).json({data, updated})
        })
        .catch((error) => {
            res.status(500).json(error)
        })
    }



}