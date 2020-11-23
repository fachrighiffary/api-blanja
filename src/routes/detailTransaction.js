const express = require("express")
const db = require("../configs/mySQL")

const detailTransaction = express.Router();


detailTransaction.post("/", (req,res) => {
    const {body} = req;
    const insertBody = {
        ...body,
    };

    const createNewTransaction = new Promise((resolve, reject) => {
        const qs = "INSERT INTO transaction_detail SET ?";
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

detailTransaction.get("/history", (req, res) => {
    const getAlltransaction = new Promise ((resolve, reject) => {
        const qs = "SELECT t.transaction_date, t.status, td.transaction_id, p.product_name, td.quantity, td.size,td.color, td.price FROM transaction as t JOIN transaction_detail as td ON td.transaction_id = t.id JOIN products as p ON p.id = td.product_id";
        db.query(qs, (err, data) => {
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
    getAlltransaction
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        res.json(err)
    })
})
module.exports = detailTransaction;