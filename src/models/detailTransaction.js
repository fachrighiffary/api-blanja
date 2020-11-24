const db = require("../configs/mySQL");


module.exports = {
    postDetailTransaction : (insertBody) => {
        return new Promise((resolve, reject) => {
            const qs = "INSERT INTO transaction_detail SET ?";
            db.query(qs, insertBody, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    historyTransaction : () => {
        return  new Promise ((resolve, reject) => {
            const qs = "SELECT t.transaction_date, t.status, td.transaction_id, p.product_name, td.quantity, td.size,td.color, td.price FROM transaction as t JOIN transaction_detail as td ON td.transaction_id = t.id JOIN products as p ON p.id = td.product_id";
            db.query(qs, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    }
}