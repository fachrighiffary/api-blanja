const express = require("express")
const db = require("../configs/mySQL")

const transactionRouter = express.Router();


transactionRouter.post("/", (req,res) => {
    const {body} = req;
    const insertBody = {
        ...body,
        transaction_date: new Date(Date.now())
    };

    const createNewTransaction = new Promise((resolve, reject) => {
        const qs = "INSERT INTO transaction SET ?";
        db.query(qs, insertBody, (err, data) => {
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
    createNewTransaction
    .then((data) => {
        const resObject= {
            msg : "Transaksi berhasil",
            data : {id : data.insertId, ...insertBody}
        };
        res.json(resObject)
    })
    .catch((err) => {
        res.json(err)
    })
})


module.exports = transactionRouter;