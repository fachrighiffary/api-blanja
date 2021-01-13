const db = require("../configs/mySQL");

module.exports = {
    getProductByid : (req) => {
        const {id} = req.params;
        return new Promise((resolve, reject) => {
            const qs = "SELECT a.id, a.product_img, a.category_id, a.product_name, a.store_name, a.product_price, a.product_size, a.product_color, a.product_condition, a.product_qty, a.product_desc, SUM(a.rtg / a.jml) AS total_rating FROM (SELECT p.id, p.category_id, u.store_name, p.product_name, c.category_name, p.product_color, p.product_condition, p.product_price, p.product_qty, p.product_size, p.product_desc, p.product_img, SUM(r.rating) as rtg, COUNT(r.product_id) as jml FROM products AS p JOIN category AS c ON c.id = p.category_id JOIN users as u ON u.id = p.user_id JOIN rating as r ON r.product_id = p.id WHERE p.id = ? GROUP BY p.id) as a GROUP BY a.id"
            
            db.query(qs, id, (err, data) => {
                if(!err) {
                    resolve(data);
                }else{
                    reject(err);
                }
            });
        });
    },
    deleteProduct : (idBody) => {
        return new Promise((resolve, reject) => {
            const qs ="DELETE FROM `products` WHERE id = ?"
            //console.log(`user delete ${level}`)         
            db.query(qs, idBody, (err, data) => {
                if(!err){
                    resolve(data);
                }else{
                    reject(err)
                }
            })
        })
    }, 
    updateProduct : (updateBody,id, level) => {
        return new Promise((resolve, reject) => {
            const qs = "UPDATE products SET ? WHERE  ?"
            if(level > 1){
                reject({
                    msg : 'selain seler tidak bisa update data',
                    status: 401

                })
            }
            db.query(qs,[updateBody, id], (err, data) => {
                console.log(updateBody)
                if(!err) {
                    resolve(data);
                }else{
                    reject(err);
                }
            });
        });
    },
    deleteFile: (id) => {
        return new Promise ((resolve, reject ) => {
            const queryStr = "SELECT product_img FROM products WHERE id = ?"
            db.query(queryStr, id, (err, data) => {
                if(!err) {
                    resolve(data)
                }else{
                    reject({
                        msg: `Gagal`
                    })
                }
            })
        })
    },
    updateProd: (body, id) => {
        console.log(body, id)
        return new Promise ((resolve, reject) => {
            const queryStr = 'UPDATE products SET ? WHERE id = ? '
            db.query(queryStr, [body, id], (err) => {
                if(!err){
                    resolve({
                        msg : `berhasil pada id ${id}`
                    })
                }else{
                    reject(err)
                }
            })
        })
    },
    
}