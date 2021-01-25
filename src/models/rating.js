const db = require("../configs/mySQL")
module.exports = {
    createRating : (insertBody) => {
        return new Promise((resolve, reject) => {
            const qs = "INSERT INTO rating SET ?"
            db.query(qs, insertBody, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getAllRating : (req) => {
        const {id} = req.params
        return new Promise((resolve, reject) => {
            const qs = "SELECT r.user_id, u.username, r.rating,r.comment, r.input_date FROM rating as r JOIN users as u on u.id = r.user_id WHERE product_id = ?"
            db.query(qs, id, (err, data) => {
                if(!err) {
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    }
}