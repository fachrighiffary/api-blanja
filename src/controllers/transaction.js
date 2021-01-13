const transactionModel = require("../models/transaction")


module.exports = {
    postTransaction : (req,res) => {
        const {body} = req;
        const insertBody = {
            ...body,
            transaction_date: new Date(Date.now())
        };
    
        transactionModel
        .postTransaction(insertBody)
        .then((data) => {
            const resObject= {
                msg: 'insert Success',
                data : {id : data.insertId, ...insertBody}
            };
            res.json(resObject)
        })
        .catch((err) => {
            res.json(err)
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