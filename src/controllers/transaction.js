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
    }
}