const multer = require("multer");
const path = require("path")

const form = require("../form")

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
      const nameFormat = `${Date.now()}-${file.fieldname}${path.extname(
          file.originalname
      )}`
    cb(null, nameFormat);
  },
});

const upload = multer({
  storage: multerStorage,
  limits: 5 * 1000 * 1000, //5mb
});


const singleUpload = (req, res, next) => {
  const uploadSingle = upload.single("photo")
  uploadSingle(req, res, (err) => {
    if(err){
      form.error(res, {
        msg : "Multer error",
        err
      })
    }else{
      next();
    }
  })
}

const multipleUpload = (req, res, next) => {
  const uploadMultiple = upload.array('product_img', 5)
  uploadMultiple(req, res, (err) => {
    if(err) {
      form.error(res, {
        msg : 'multer error',
        err
      })
    }else{
      let filePath = req.files.map((val) => "/images/" + val.filename)
      
      req.filePath = filePath.join(',')
      next();
    }
  })
}

module.exports = multipleUpload, singleUpload