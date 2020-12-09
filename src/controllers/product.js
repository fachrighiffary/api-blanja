const productModel = require("../models/product")
const form = require("../helpers/form")

module.exports = {
    getProductByid : (req, res) => {
        productModel
        .getProductByid(req)
        .then((data) => {
            if(data.length){
               form.success(res,data)
            }res.status(404).json({
                msg: "Data not found"
            })
        })
        .catch((err) => {
            form.error(res,err)
         })
    },
    deleteProduct : (req, res) => {
        const {id} =  req
        const idBody = {id};
        const level =  req.decodedToken.level
        // console.log(`level dari orang yang delete ${level}`)
        productModel
        .deleteProduct(idBody, level)
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
        const { id } = req.body
        const { body } = req
        const multipleImg = JSON.stringify(
            req.files.map((e) => "/images" + "/" + e.filename + " ")
        )

        const updateBody = {
           ...body,
           product_img : multipleImg,
           update_date: new Date(Date.now()),
        };
        const idBody = {id};
        const level = req.decodedToken.level
        
        productModel
        .updateProduct(updateBody,idBody, level)
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