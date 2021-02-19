const db = require("../configs/mySQL");

module.exports = {
    postTransaction : (insertBody) => {
        return new Promise((resolve, reject) => {
            const qs = "INSERT INTO tb_transaksi SET ?";
            db.query(qs, insertBody, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    postMultiple: (body) => {
        return new Promise((resolve, reject) => {
            let status = 200;
            let errData = null
            body.map((items) => {
                console.log(items)
                const qs = `INSERT INTO tb_item_order SET ?`
                db.query(qs, items, (err, data) => {

                    if (!err) {
                        if (status != 500) {
                            status = 200
                            console.log('berhasil')
                        }
                    } else {
                        status = 500
                        errData = err
                        console.log('gagal')
                    }
                })
            })
            if (status == 200) {
                resolve({
                    status: 200,
                    message: `Berhasil insert data`
                })
            } else {
                reject({
                    status: 500,
                    message: errData
                })
            }
        })
    },
    getTransaction : (req) => {
        const {id} = req.params;
        return new Promise((resolve, reject) => {
            const qs = "SELECT * FROM tb_transaksi WHERE user_id = ? ORDER BY id DESC"
            
            db.query(qs, id, (err, data) => {
                if(!err) {
                    resolve(data);
                }else{
                    reject(err);
                }
            });
        });
    },
    getDetailTransaction : (req) => {
        const {id} = req.params;
        console.log(typeof id)
        return new Promise((resolve, reject) => {
            const qs = "SELECT  p.product_name, t.product_id, t.color, t.size, t.price, t.product_img, a.address_dtl FROM tb_item_order as t JOIN products as p on p.id = t.product_id JOIN address as a ON a.id = t.address WHERE trxId = ? "
            
            db.query(qs, id, (err, data) => {
                if(!err) {
                    resolve(data);
                }else{
                    reject(err);
                }
            });
        });
    },
    getAlltransaction : () => {
        return new Promise((resolve, reject) => {
            const qs = `SELECT * FROM tb_transaksi  ORDER BY id DESC`
            db.query(qs, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    updateTransaction : (updateBody,id) => {
        return new Promise((resolve, reject) => {
            const qs = `UPDATE tb_transaksi SET ? WHERE id = ?`
            db.query(qs, [updateBody, id], (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    }

}