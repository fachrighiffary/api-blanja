const db = require("../configs/mySQL");

module.exports = {
    postNotif : (body) => {
        return new Promise((resolve, reject) => {
            const qs = `INSERT INTO tb_notif SET ? `;
            db.query(qs, body, (err, data) => {
                if(!err){
                    resolve({
                        status: 200,
                        message: 'Post Notification'
                    })
                }else{
                    reject({
                        status: 500,
                        message: 'Notif not sent',
                        details: err
                    })
                }
            })
        })
    },
    postNotifSeller : (body) => {
        return new Promise((resolve, reject) => {
            const qs = `INSERT INTO tb_notif_seller SET ? `;
            db.query(qs, body, (err, data) => {
                if(!err){
                    resolve({
                        status: 200,
                        message: 'Post Notification'
                    })
                }else{
                    reject({
                        status: 500,
                        message: 'Notif not sent',
                        details: err
                    })
                }
            })
        })
    },
    getNotifSeller : (id) => {
        return new Promise((resolve, reject) => {
            const qs = `Select * FROM tb_notif_seller WHERE seller_id = ? ORDER BY tb_notif_seller.id DESC`
            db.query(qs, id, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getNotifBuyer : (id) => {
        return new Promise((resolve, reject) => {
            const qs = `Select * FROM tb_notif WHERE id_user = ? ORDER BY tb_notif.id DESC`
            db.query(qs, id, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    deleteNotifseller : (id) => {
        return new Promise((resolve, reject) => {
            const qs = `DELETE FROM tb_notif_seller WHERE seller_id = ?`
            db.query(qs, id, (err, data) => {
                if(!err){
                    resolve({
                        status: 200,
                        message: 'Delete Success'
                    })
                }else{
                    reject({
                        status: 500,
                        message: 'Delete Failed',
                        details: err
                    })
                }
            })
        })
    },
    deleteNotifBuyer : (id) => {
        return new Promise((resolve, reject) => {
            const qs = `DELETE FROM tb_notif WHERE id_user = ?`
            db.query(qs, id, (err, data) => {
                if(!err){
                    resolve({
                        status: 200,
                        message: 'Delete Success'
                    })
                }else{
                    reject({
                        status: 500,
                        message: 'Delete Failed',
                        details: err
                    })
                }
            })
        })
    }
}