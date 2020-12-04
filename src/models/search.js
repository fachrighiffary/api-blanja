const db = require("../configs/mySQL");

module.exports = {
  searchProduct: (keyword) => {
    return new Promise((resolve, reject) => {
      const qs =
        "SELECT p.product_name, c.category_name,p.product_rating, p.product_price, p.product_qty, p.product_size, p.product_color, s.store_name FROM products AS p JOIN category AS c ON c.id = p.category_id JOIN store AS s ON s.id = p.store_id WHERE p.product_name LIKE ?"
      db.query(qs, keyword, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  searchCategory : (keyword) => {
    return new Promise((resolve, reject) => {
        const qs = "SELECT p.product_name,p.product_rating, c.category_name, p.product_price, p.product_qty, s.store_name FROM products AS p JOIN category AS c ON c.id = p.category_id JOIN store AS s ON s.id = p.store_id WHERE c.category_name LIKE ?";
        db.query(qs,keyword, (err, data) => {
            if(!err) {
                resolve(data)
            }else{
                reject(err)
            }
        });
    });
  },
    
};
