const productsModel = require("../models/products")
const form = require("../helpers/form")

module.exports = {
    getAllProducts : (req,res) => {
        productsModel
        .getAllProducts(req)
        .then((data) => {
            form.success(res,data)
        })
        .catch((err) => {
           form.error(res,err)
        })
    },

    getPopularProducts : (req,res) => {
        productsModel
        .getPopularProducts()
        .then((data) => {
            form.success(res,data)
        })
        .catch((err) => {
            form.error(res,err)
        })
    },

    createProducts : (req, res) => {
        const { body } = req;
        
        // const multipleImg = JSON.stringify(
        //     req.files.map((e) => "/images" + "/" + e.filename + " ")
        // )

        const multipleImage = req.filePath

        console.log(req.filePath)
        const insertBody = {
            ...body,
            product_img : multipleImage,
            input_date: new Date(Date.now()),
            update_date: new Date(Date.now()),
        };
       
        
    //    console.log(product_img)
       
        
        productsModel
        .createProducts(insertBody)
        .then(() => {
            const resObject ={
                msg: "Input Successfully",
                data: {...insertBody, product_img:req.filePath.split(',')},
            };
            form.success(res, resObject)
            // res.json(resObject);
        })
        .catch((err) => {
            const errMsg = ({
                msg : "Input Failed",
                err
            })
            form.error(res,errMsg)
            // res.json(errMsg);
        });
    }
}

