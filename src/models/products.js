const db = require("../configs/mySQL");

module.exports = {
    getAllProducts : () => {
        return new Promise((resolve, reject) => {
            const qs = "SELECT p.product_name,s.store_name, p.product_price, p.product_qty,c.category_name,p.product_size, p.product_desc, p.product_size, p.input_date, p.update_date FROM products AS p JOIN category AS c ON c.id = p.category_id JOIN store AS s ON s.id = p.store_id";
            db.query(qs, (err, data) => {
                if(!err){
                    resolve(data);
                }else{
                    reject(err)
                }
            });
        });
    },

    
    createProducts : (insertBody) => {
        return new Promise((resolve, reject) => {
            const  qs = "INSERT INTO products SET ?";
            db.query(qs, insertBody, (err, data) => {
                if(!err){
                    resolve(data);
                } else{
                    reject(err);
                }
            })
        })
    }
}