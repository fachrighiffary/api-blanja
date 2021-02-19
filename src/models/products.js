const db = require("../configs/mySQL");

module.exports = {
    getAllProducts : (req) => {
        return new Promise((resolve, reject) => {
            const {query} = req;
            const limit = Number(query.limit) || 15;
            //limit : 5
            //page : 1 2 3
            //offset : 0 5 10
            // rumus offset : (page - 1) * limit
            const page = Number(query.page) || 1;
            const offset = (Number(query.page) - 1) * limit || 0; 
 
            let qs = `SELECT a.id, a.product_name, a.product_price, a.product_qty, a.store_name, a.product_img, sum(a.rtg / a.jml ) AS rating_total, a.jml AS jumlah_review, a.input_date,CASE
            WHEN sum(a.rtg / a.jml ) is NULL THEN 0
            ELSE sum(a.rtg / a.jml )
            END AS total_rating
            FROM (SELECT p.id, p.product_name, p.product_price, p.product_qty, p.product_img, r.rating ,SUM(r.rating) as rtg, COUNT(r.rating) as jml, u.store_name ,p.input_date 
                  FROM products AS p LEFT JOIN rating AS r ON p.id = r.product_id 
                  JOIN users as u ON p.user_id = u.id GROUP BY p.id) as a 
            GROUP BY a.id`
            if(req.query.new != null){
                qs += " ORDER BY a.input_date"
                if(req.query.new === 'desc'){
                    qs += " DESC"
                }else{
                    qs += " ASC"
                }
            }else if(req.query.popular != null){
                qs += " ORDER BY total_rating"
                    if(req.query.popular == 'desc'){
                        qs += " DESC"
                    }else{
                        qs += " ASC"
                    }
            }else if(req.query.price != null){
                qs += " ORDER BY a.product_price"
                    if(req.query.price == 'desc'){
                        qs += " DESC"
                    }else{
                        qs += " ASC"
                    }
            }else if(req.query.review != null){
                qs += " ORDER BY jumlah_review"
                    if(req.query.review == 'desc'){
                        qs += " DESC"
                    }else{
                        qs += " ASC"
                    }
            }
            if(qs != null){
                qs += " LIMIT ? OFFSET ?"
            }
            

            db.query(qs,[limit, offset], (err, data) => {
                const newResult = {
                    products: data,
                    // pageinfo : {
                    //     currentPage : page,
                    //     previus     :  page === 1? null : `/products?page=${page- 1}&limit=${limit}`,
                    //     nextPage    : (page === limit) !==  data[0].length ? null : `/products?page=${page + 1}&limit=${limit}`,
                    // }
                }
                if(!err){
                    resolve(newResult);
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
    },
    getProductByUser : (req) => {
        return new Promise((resolve, reject) => {
            const {id} = req.params;
            let qs = "SELECT p.id, p.product_name, p.product_img, p.product_price  FROM products as p WHERE p.user_id = ?"
            db.query(qs, id, (err, data) => {
                if(!err) {
                    resolve(data);
                }else{
                    reject(err);
                }
            });
        })
    }
    
}