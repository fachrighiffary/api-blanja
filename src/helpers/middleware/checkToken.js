const jwt = require("jsonwebtoken");
const db = require("../../configs/mySQL");
const form = require("../form")

module.exports = {
    isRegistered: (req, res, next) => {
        const { email } = req.body;
        const checkAvailable = new Promise((resolve, reject) => {
          const qs = `SELECT email FROM users WHERE email = ?`;
          db.query(qs, email, (err, data) => {
            if (!err) {
              if (!data[0]) {
                resolve({
                  msg: `success`,
                });
              } else {
                reject({
                  msg: `email telah digunakan!`,
                });
              }
            } else {
              reject({
                msg: `SQLquery ERROR!`,
                details: err,
              });
            }
          });
        })
          .then((result) => {
            next();
          })
          .catch((error) => {
            res.status(500).json(error);
          });
    },
    login : (req, res, next) => {
        const bearerToken = req.header("x-access-token");
        //jika tidak ada bearer token
        if(!bearerToken) {
            form.error(res, {
                msg : "PLease Login First",
                status : 401,
            })
        }else {
            const token = bearerToken.split(" ")[1];
            return new Promise((resolve, reject) => {
                const qs = "SELECT token FROM blacklist_token WHERE token = ?";
                db.query(qs, token, (err, data) => {
                    console.log(data);
                    if(!err){
                        if(!data[0]){
                            resolve(token)
                        }else{
                            reject({
                                msg : "invalid Token",
                            })
                        }
                    }else {
                        reject({
                            msg : "error SQL"
                        })
                    }
                }) 
            })
            .then((token) => {
                try{
                    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
                    req.decodedToken = decodedToken
                    next()
                }catch(error){
                    form.error(res, {
                        msg : "Invalid Token",
                        error
                    })
                }
            })
            .catch((error) => {
                form.error(res, {
                    msg : "invalid Token",
                    error
                })
            })
        }
    },
    seller: (req, res, next) => {
        console.log('ini seller')
        const level  = req.decodedToken;
        if (level === 1) {
          form.error(res, {
            status: 401,
            msg: `Unauthorized Access`,
            details: `Yout dont have permission to access this page.`,
          });
        } else {
          next();
        }
    }

}