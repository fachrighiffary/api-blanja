const searchModel = require("../models/search")
const form = require("../helpers/form")


module.exports = {
    searchNameProduct: (req, res) => {
      const { q } = req.query;
      const keyword = "%" + q + "%";
      searchModel
        .searchProduct(keyword)
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
    searchCategoryProduct : (req, res) => {
      const { c } = req.query;
  
      const keyword = "%" + c + "%";
  
      searchModel
      .searchCategory(keyword)
      .then((data) => {
          form.success(res, data);
      })
      .catch((err) => {
          form.error(res.err);
      })
  },
    sortNameProduct : (_, res) => {
      
      searchModel
        .sortNameProduct()
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json(err);
        });
    },

    sortNewProduct : (_, res) => {
      searchModel
      .getAllNewProducts()
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json(err);
        });
    },

    sortPriceProduct : (_, res) => {
      searchModel
      .getAllPriceProduct()
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json(err);
        });
    }
};