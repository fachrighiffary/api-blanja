const db = require("../configs/mySQL");

module.exports = {
    postTransaction : (insertBody) => {
        return new Promise((resolve, reject) => {
            const qs = "INSERT INTO transactions SET ?";
            db.query(qs, insertBody, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getTransaction : (req) => {
        const {id} = req.params;
        return new Promise((resolve, reject) => {
            const qs = "SELECT t.user_id, p.product_name, t.size, t.color, t.quantity, t.price, t.status,  t.product_img FROM transactions AS t JOIN products as p ON p.id = t.product_id WHERE t.user_id = ?"
            
            db.query(qs, id, (err, data) => {
                if(!err) {
                    resolve(data);
                }else{
                    reject(err);
                }
            });
        });
    },
}