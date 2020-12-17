const searchModel = require("../models/search")
const form = require("../helpers/form")


module.exports = {
      searchProduct: (req, res) => {
      const { key } = req.query;
      const keyword = "%" + key + "%";
      searchModel
        .searchProduct(keyword, req)
        .then((data) => {
          if(data.length){
            form.success(res, data);
          }
          const notFound = ({
            msg : 'Data Tidak Ditemukan'
          })
          res.send(notFound)
        })
        .catch((err) => {
          form.error(res, err);
          // res.status(500).json(err);
        });
    },
    searchBy : (req, res) => {
      const {color, size, category} = req.query;
      let addQuery = ``
      let query_length = Object.keys(req.query).length - 1
      let initial  = 0

      if(Object.keys(req.query).length){
        addQuery += `WHERE `
        if(color != null){
          addQuery += `a.product_color LIKE '%${color}%' `
          if(initial != query_length){
            addQuery += `AND `
            initial +=1
          }
        }
        if(size != null){
          addQuery +=`a.product_size LIKE '%${size}%' `
          if(initial != query_length){
            addQuery += `AND `
            initial +=1
          }
        }
        if(category != null ){
          addQuery += `a.ctg_id = ${category} `
          if(initial != query_length){
            addQuery += `AND `
            initial +=1
          }
        }
      }
      searchModel
      .searchBy(addQuery, req)
      .then((data) => {
        form.success(res,data)
      })
      .catch((err) => {
        form.error(res,err)
      })
    }
};