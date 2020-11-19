const db = require("../configs/mySQL");

module.exports = {
    getAllProducts : () => {
        return new Promise((resolve, reject) => {
            const qs = "SELECT p.id, p.product_name, p.product_price, p.product_qty, c.category_name FROM products AS p JOIN category AS c ON c.id = p.category_id";
            db.query(qs, (err, data) => {
                if(!err){
                    resolve(data);
                }else{
                    reject(err)
                }
            });
        });
    }
}