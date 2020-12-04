const db = require("../configs/mySQL");

module.exports = {
    getProductByid : (req) => {
        const {id} = req.params;
        return new Promise((resolve, reject) => {
            const qs = "SELECT p.id, p.category_id, p.product_name,c.category_name,p.product_rating, p.product_color,p.product_condition, s.store_name,p.product_price,p.product_qty,p.product_size,p.product_desc FROM products AS p JOIN category AS c ON c.id = p.category_id JOIN store AS s ON s.id = p.store_id WHERE p.id = ?"
            db.query(qs, id, (err, data) => {
                if(!err) {
                    resolve(data);
                }else{
                    reject(err);
                }
            });
        });
    },
    deleteProduct : (req) => {
        const {id} = req.params;
        return new Promise((resolve, reject) => {
            const qs ="DELETE FROM `products` WHERE id = ?"
            db.query(qs, id, (err, data) => {
                if(!err){
                    resolve(data);
                }else{
                    reject(err)
                }
            })
        })
    }, 
    updateProduct : (updateBody,idBody) => {
        return new Promise((resolve, reject) => {
            const qs = "UPDATE products SET ? WHERE  ?"
            db.query(qs,[updateBody, idBody], (err, data) => {
                console.log(updateBody)
                if(!err) {
                    resolve(data);
                }else{
                    reject(err);
                }
            });
        });
    }
}