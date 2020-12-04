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
        productModel
        .deleteProduct(req)
        .then((data) => {
            res.json({
                msg: 'Deleted Successfully',
                data 
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