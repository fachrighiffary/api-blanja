const db = require("../configs/mySQL")

module.exports = {
    createAddress : (insertBody) => {
        return new Promise((resolve, reject) => {
            const qs = "INSERT INTO address SET ?"
            db.query(qs, insertBody, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getAllAddress : (req) => {
        const {id} = req.params
        return new Promise((resolve, reject) => {
            const qs = "SELECT id, name, address, address_dtl, city, post_code, phone_number FROM `address` WHERE user_id = ?";
            db.query(qs, id, (err, data) => {
                if(!err) {
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getAddressById : (id) => {
        return new Promise((resolve, reject) => {
            const qs = "SELECT id, address, name, address_dtl, city,post_code, phone_number FROM address WHERE id = ? ";
            db.query(qs, id, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    deleteAddress : (idBody) => {
        return new Promise((resolve, reject) => {
            const qs = "DELETE FROM `address` WHERE ?"
            db.query(qs, idBody, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    updateAddress : (updateBody,id) => {
        return new Promise((resolve, reject) => {
            const qs = "UPDATE address SET ? WHERE id = ?"
            db.query(qs,[updateBody, id], (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    }
}