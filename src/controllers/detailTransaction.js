const detailModel = require("../models/detailTransaction")


module.exports = {
    postDetailTransaction : (req,res) => {
        const {body} = req;
        const insertBody = {
            ...body,
        };
        
        detailModel
        .postDetailTransaction(insertBody)
        .then((data) => {
            const resObject= {
                msg : "Transaksi berhasil",
                data : {id : data.insertId, ...insertBody}
            };
            res.json(resObject)
        })
        .catch((err) => {
            const error = ({
                msg : 'transaksi gagal',
                err
            })
            res.json(error)
        })
    },
    historyTransaction : (req, res) => {
        
        detailModel
        .historyTransaction()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            const error = ({
                msg :'belum ada transaksi',
                err
            })
            res.json(error)
        })
    }
}