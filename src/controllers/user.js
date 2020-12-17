const userModel = require("../models/user")
const form = require("../helpers/form") 

module.exports = {
    getUser : (req,res) => {
       userModel
        .getUser(req)
        .then((data) => {
            if(data.length){
                form.success(res, data)
            }res.status(404).json({
                msg: "Data Not Found"
            })
        })
        .catch((err) => {
            form.error(res,err)
        })
    },
    updateUser: (req, res) => {
        const {id} = req.body
        const {body} = req
        const upload = JSON.stringify(
            req.files.map((e) => "/profile" + "/" + e.filename + " ")
        )
        const updateBody = {
            ...body,
            photo : upload,
        }
        const idBody = {id}

        userModel
        .updateUser(updateBody,idBody)
        .then((data) => {
            const resObject = {
                msg : 'update Successfully',
                data : {id: data.updateId, updateBody}
            }
            res.json(resObject)
        })
        .catch((err) => {
            const error = {
                msg : 'update Failed',
                err
            }
            res.json(error)
        })
    }
}