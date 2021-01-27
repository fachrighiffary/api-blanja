require("dotenv").config();
const express = require('express');
const logger = require("morgan");
const cors = require("cors");
const mainRouter = require("./src/routes/index")
const app = express()//fungsi expres ini digunkanan untuk membuat aplikasi express
const port = 8000; //test apakah expressnya jalan atau tidak
const server = require("http").createServer(app);
const io = require("socket.io")(server);
//server.listen(port, () => console.log("server running on port " + port))
app.use(express.static("public"))
app.use(cors());
server.listen(port, () => {
    console.log(`server is running port ${port}`)
})
app.use(logger("dev")); //menambahkan logger
app.use(express.urlencoded({extended: false})); //menambahkan parser untuk x-www-form-urlencoded
//extended: false => menggunakan qs
//extended : true => menggunakan querystring
app.use(express.json()); //menambahkan parser untuk raw json
app.use("/", mainRouter); //modularisasi ke Mainrouter


io.on("connection", socket => {
    console.log("user connected")
    socket.on("chat message", msg => {
        //console.log(msg)
        io.emit("chat message", msg)
    })
})



module.exports = app;


