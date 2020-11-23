const db = require("../configs/mySQL");

module.exports = {
  searchProduct: (keyword) => {
    return new Promise((resolve, reject) => {
      const qs =
        "SELECT p.product_name, c.category_name, p.product_price, p.product_qty, s.store_name FROM products AS p JOIN category AS c ON c.id = p.category_id JOIN store AS s ON s.id = p.store_id WHERE p.product_name LIKE ?"
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
        const qs = "SELECT p.product_name, c.category_name, p.product_price, p.product_qty, s.store_name FROM products AS p JOIN category AS c ON c.id = p.category_id JOIN store AS s ON s.id = p.store_id WHERE c.category_name LIKE ?";
        db.query(qs,keyword, (err, data) => {
            if(!err) {
                resolve(data)
            }else{
                reject(err)
            }
        });
    });
  },

  sortNameProduct : () => {
    return new Promise((resolve, reject) => {
      const queryString =
        "SELECT p.id, p.product_name, c.category_name, p.product_price, p.product_qty, s.store_name FROM products AS p JOIN category AS c ON c.id = p.category_id JOIN store AS s ON s.id = p.store_id ORDER BY p.product_name ASC";
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  getAllNewProducts : () => {
    return new Promise((resolve, reject) => {
      const queryString =
        "SELECT p.id, p.product_name, c.category_name, p.product_price, p.product_qty, s.store_name, p.input_date FROM products AS p JOIN category AS c ON c.id = p.category_id JOIN store AS s ON s.id = p.store_id ORDER BY p.input_date DESC";
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },


  getAllPriceProduct : () => {
    return new Promise((resolve, reject) => {
      const queryString =
        "SELECT p.id, p.product_name, c.category_name, p.product_price, p.product_qty, s.store_name FROM products AS p JOIN category AS c ON c.id = p.category_id JOIN store AS s ON s.id = p.store_id ORDER BY p.product_price ASC";
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  }

};
