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
        const multipleImg = req.files.map(({filename}) => {
            return "/images/" + filename
       })
       const imgMultiple = multipleImg.toString()
       console.log(imgMultiple.split(','))
        const insertBody = {
            ...body,
            product_img : imgMultiple,
            input_date: new Date(Date.now()),
            update_date: new Date(Date.now()),
        };
        const level = req.decodedToken.level;

        
    //    console.log(product_img)
       
        
        productsModel
        .createProducts(insertBody, level)
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

