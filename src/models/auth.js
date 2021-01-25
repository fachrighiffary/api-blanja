const db = require("../configs/mySQL")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

module.exports = {
    postNewUser: (body) => {
        // gensalt
        // hash
        // store DB
        return new Promise((resolve, reject) => {
            const saltRounds = 10;
            bcrypt.genSalt(saltRounds, (err, salt) => {
                if(err) {
                    reject(err);
                }
                bcrypt.hash(body.password, salt, (err, hashedPassword) => {
                    if(err){
                        reject(err);
                    }
                    const newBody = {...body, password: hashedPassword};
                    const qs = "INSERT INTO users SET ?";
                    db.query(qs, newBody, (err, data) => {
                        if(!err) {
                            resolve(data)
                        }else{
                            reject({
                                msg : 'Email Sudah terdaftar, Gunakan Email lain',
                            })
                        }
                    })
                })
            })
        })
    },
    postLogin : (body) => {
        // query ke DB => SELECT  password WHERE username ==username.body
        // compare antara body password dengan password db
        // jwt => sign, verify
        // sign digunakan untuk mendapatkan token dari payload
        // verify digunakan untuk verifikasi token di header
        
        return new Promise ((resolve, reject) => {
            const {email, password, level_id} = body
            const qs = "SELECT password, id, email , username, store_name, level_id FROM users WHERE email=? AND level_id=?"

            db.query(qs, [email, level_id], (err, data) => {
                if(err) {
                    reject({
                        msg: "Error SQL",
                        status: 500,
                        err,
                    })
                }
                if(!data[0]){
                    reject({
                        msg: "User Not Found",
                        status : 404
                    })
                }else{
                    bcrypt.compare(password, data[0].password, (err, result) => {
                        if(err) {
                            reject({
                                msg : "Hash error",
                                status : 500,
                                err
                            })
                        }
                        //result => antara true : false
                        if(!result){
                            reject({
                                msg: "Wrong password",
                                status : 401
                            })
                        }else {
                            const payload = {
                                email,
                                level : data[0].level_id,
                            }
                            const secret = process.env.SECRET_KEY;
                            const token = jwt.sign(payload, secret)
                            resolve({
                                id          : data[0].id,
                                email       : data[0].email,
                                username    : data[0].username,
                                level       : data[0].level_id,
                                store_name  : data[0].store_name, 
                                token
                            });
                        }
                    })
                }
            })
        })
        
    },
    logout : (blacklistToken) => {
        return new Promise((resolve, reject) => {
            const qs = "INSERT INTO blacklist_token SET ?";
            db.query(qs, blacklistToken, (err) => {
                if(!err){
                    resolve({
                        msg: "Logout Berhasil"
                    })
                }else{
                    reject({
                        msg:'Logout Gagal'
                    })
                }
            })
        })
    },
    getUser: (req) => {
        const {id} = req.params
        return new Promise((resolve, reject) => {
            const qs = 'SELECT a.id, a.username, a.email, a.phone_number, a.store_name, a.store_desc, a.photo, b.level FROM users AS a JOIN levels as b ON a.level_id = b.id WHERE a.id = ?'

            db.query(qs, id, (err, data) => {
                if (!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    }


}