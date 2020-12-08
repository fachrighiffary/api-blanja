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
                            reject(err)
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
            const {username, password} = body
            const qs = "SELECT password, level_id FROM users WHERE username=?"
            db.query(qs, username, (err, data) => {
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
                                username,
                                level : data[0].level_id
                            }
                            const secret = process.env.SECRET_KEY;
                            const token = jwt.sign(payload, secret)
                            resolve(token);
                        }
                    })
                }
            })
        })
        
    }


}