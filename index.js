const express = require('express');
const logger = require("morgan");

const mainRouter = require("./src/routes/index")

const app = express()//fungsi expres ini digunkanan untuk membuat aplikasi express

//test apakah expressnya jalan atau tidak
const port = 8000;

app.listen(port, () => {
    console.log(`server is running port ${port}`)
})

//menambahkan logger
app.use(logger("dev"));

//menambahkan parser untuk x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));
//extended: false => menggunakan qs
//extended : true => menggunakan querystring


//menambahkan parser untuk raw json
app.use(express.json());


//modularisasi ke Mainrouter
app.use("/", mainRouter);


module.exports = app;


