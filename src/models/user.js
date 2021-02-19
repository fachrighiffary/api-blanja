// const db = require("../configs/mySQL")

const db = require("../configs/mySQL");

module.exports = {
    getUser : (req) => {
        const id = req.decodedToken.iat;
        console.log(id)
        return new Promise((resolve, reject) => {
            const qs = "SELECT username, email, phone_number, store_name, store_desc, photo FROM users WHERE id = ?"

            db.query(qs, id, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    updateUser : () => {
       
    },
    getNameUser: (id) => {
        return new Promise((resolve, reject) => {
            const qs = `SELECT username from users where id = ?`
            db.query(qs, id, (err, data) => {
                if(!err){
                    resolve({
                        status: 200,
                        data: data[0]
                    })
                }else{
                    reject({
                        status: 500,
                        data: err
                    })
                }
            })
        })
    }

}