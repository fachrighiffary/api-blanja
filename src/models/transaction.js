const db = require("../configs/mySQL");

module.exports = {
    postTransaction : (insertBody) => {
        return new Promise((resolve, reject) => {
            const qs = "INSERT INTO transaction SET ?";
            db.query(qs, insertBody, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    }
}