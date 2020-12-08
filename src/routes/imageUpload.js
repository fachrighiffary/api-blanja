const imageUploadRouter = require("express").Router()
const multipleUpload = require("../helpers/middleware/upload")

imageUploadRouter.post("/",multipleUpload, (req, res) => {
    // const filePath = "/public/images/" + req.files.map.path((result) => {
    //     result
    // })
    const filePath = req.files.map(({filename}) => {
        return "/images/" + filename
   })
   res.json({
       filePath
   })
   console.log(filePath)
 
    
})


module.exports = imageUploadRouter