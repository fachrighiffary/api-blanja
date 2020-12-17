const db = require("../configs/mySQL");

module.exports = {
  searchProduct: (keyword) => {
    return new Promise((resolve, reject) => {
      const qs =
        "SELECT a.id, a.product_name, a.category_name, a.product_price,a.store_name, a.product_img, sum(a.rtg / a.jml ) AS total_rating, a.input_date FROM (SELECT p.id, c.category_name, p.product_name, p.product_price, p.product_img, SUM(r.rating) as rtg, COUNT(r.rating) as jml, u.store_name ,p.input_date FROM products AS p JOIN rating AS r ON p.id = r.product_id JOIN category AS c ON c.id = p.category_id JOIN users as u ON p.user_id = u.id GROUP BY p.id) as a   WHERE a.category_name LIKE ? OR a.product_name LIKE ? GROUP BY a.id"
      db.query(qs, [keyword, keyword], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },  
  searchBy: (addQuery) => {
    return new Promise((resolve, reject) => {
      let qs = `SELECT a.id, a.product_name, a.ctg_id, a.product_price, a.store_name, a.product_img, a.product_size, a.product_color, sum(a.rtg / a.jml ) AS total_rating, a.input_date FROM (SELECT p.id, c.id as ctg_id, p.product_name, p.product_price, p.product_size, p.product_color, p.product_img, SUM(r.rating) as rtg, COUNT(r.rating) as jml, u.store_name ,p.input_date FROM products AS p JOIN rating AS r ON p.id = r.product_id JOIN category AS c ON c.id = p.category_id JOIN users as u ON p.user_id = u.id GROUP BY p.id) as a ` 
      qs += addQuery + ` GROUP BY a.id`

      db.query(qs, (err, data) => {
        if(!err){
          if(Object.keys(data).length == 0){
            reject({
              status : 404,
              msg : 'Data Tidak ditemukan'
            })
          }else{
            resolve(data)
          }
        }else{
          reject(err)
        }
      })

    })
  }  
};
