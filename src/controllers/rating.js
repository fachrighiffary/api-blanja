const form = require('../helpers/form')
const ratingModel = require('../models/rating')

module.exports = {
    createRating : (req, res) => {
        const {body} = req
        const insertBody = {
            ...body,
            input_date : new Date(Date.now()),
        };
        ratingModel
        .createRating(insertBody)
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
    getAllRating : (req, res) => {
        ratingModel
       .getAllRating(req)
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
    }
}