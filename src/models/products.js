const db = require("../configs/mySQL");

module.exports = {
    getAllProducts : (req) => {
        return new Promise((resolve, reject) => {
            const {query} = req;
            const limit = Number(query.limit) || 5;
            //limit : 5
            //page : 1 2 3
            //offset : 0 5 10
            // rumus offset : (page - 1) * limit
            const page = Number(query.page) || 1;
            const offset = (Number(query.page) - 1) * limit || 0; 

            let qs = `SELECT p.id, p.product_name,p.product_rating, p.product_condition,s.store_name, p.product_price, p.product_qty,c.category_name,p.product_size, p.product_desc, p.product_size, p.input_date, p.update_date FROM products AS p JOIN category AS c ON c.id = p.category_id JOIN store AS s ON s.id = p.store_id`
            if(req.query.new != null){
                qs += " ORDER BY p.input_date"
                if(req.query.new === 'desc'){
                    qs += " DESC"
                }else{
                    qs += " ASC"
                }
            }else if(req.query.popular != null){
                qs += " ORDER BY p.product_rating"
                    if(req.query.popular == 'desc'){
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
                    pageinfo : {
                        currentPage : page,
                        previus     :  page === 1? null : `/products?page=${page- 1}&limit=${limit}`,
                        nextPage    : limit !== data.length ? null : `/products?page=${page+ 1}&limit=${limit}`,
                    }
                }
                if(!err){
                    resolve(newResult);
                }else{
                    reject(err)
                }
            });
        });
    },

    createProducts : (insertBody, level) => {
        return new Promise((resolve, reject) => {
            const  qs = "INSERT INTO products SET ?";
            if(level > 1){
                reject({
                    msg : "Anda bukan seller",
                    status : 401
                }) 
            }
            db.query(qs, [insertBody, level], (err, data) => {
                if(!err){
                    resolve(data);
                } else{
                    reject(err);
                }
            })
        })
    }
}