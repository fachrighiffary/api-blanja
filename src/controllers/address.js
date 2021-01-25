const form = require("../helpers/form")
const addressModel = require("../models/address")

module.exports = {
    createAddress : (req, res) => {
        const {body} = req
        const insertBody = {
            ...body,
            input_date : new Date(Date.now()),
            update_date: new Date(Date.now())
        };

        addressModel
        .createAddress(insertBody)
        .then(() => {
            const resObject = {
                msg: "Input SuccessFully",
                data: {...insertBody}
            };
            form.success(res, resObject)
        })
        .catch((err) => {
            const errMsg = ({
                msg: "input Failed",
                err
            })
            form.error(res, errMsg)
        })
    },
    getAllAddress : (req, res) => {
       addressModel
       .getAllAddress(req)
       .then((data) => {
           if(data.length){
               res.json({
                   data,
               })
           }else{
               res.status(400).json({
                   msg: "Data Not Found"
               })
           }
       })
       .catch((err) => {
           form.error(res, err)
       })
    },
    getAddressById : (req, res) => {
        const {id} = req.params;
        // console.log(id)
        // const {user_id} = req.body
        //console.log(user_id)
        addressModel
        .getAddressById(id)
        .then((data) => {
            if(data.length){
                res.json({
                    data,
                })
            }else{
                res.status(400).json({
                    msg: "Data Not Found"
                })
            }
        })
    },
    deleteAddress : (req, res) => {
        const {id} =  req.params
        const idBody = {id};
        //console.log(idBody)
        addressModel
        .deleteAddress(idBody)
        .then(() => {
            res.json({
                msg: "Delete Address SuccessFully"
            })
        })
        .catch((err) => {
            const error = {
                msg: "Delete Failed",
                err
            }
            res.json(error)
        })
    },
    updateAddress : (req, res) => {
        const {id} = req.params
        const {body} = req

        const updateBody = {
            ...body,
            update_date :new Date(Date.now())
        }
        // const idBody = {id}
        addressModel
        .updateAddress(updateBody,id)
        .then((data) => {
            const resObject = {
                msg :"Update SuccessFully",
                data : {id: data.updateId, updateBody}
            }
            res.json(resObject)
        })
        .catch((err) => {
            const error = {
                msg : 'Update Failed',
                err
            }
            res.json(error)
        })
    }
}