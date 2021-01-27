const transactionModel = require("../models/transaction")


module.exports = {
    postTransaction : (req,res) => {
        const {body} = req;
        transactionModel
        .postTransaction(body)
        .then((data) => {
            const resObject= {
                msg: 'insert Success',
                data : {id : data.insertId, ...body}
            };
            res.json(resObject)
        })
        .catch((err) => {
            res.json(err)
        })
    },
    postMultiple : (req, res) => {
        const {body} = req
        transactionModel
        .postMultiple(body)
        .then((result) => {
            res.status(200).json(result)
        }).catch((error) => {
            res.status(error.status).json(error)
        })
    },
    getTransaction : (req, res) => {
        transactionModel
        .getTransaction(req)
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
}