require("dotenv").config();
const express = require('express');
const logger = require("morgan");
const cors = require("cors");
const mainRouter = require("./src/routes/index")
const app = express()
const port = 8080; 
const server = require("http").createServer(app);
const io = require("socket.io")(server);

 
global.io = io

io.on("connection", (socket) => {
    const id  = socket.handshake.query.user_id;
    console.log("a user connected ...", id, socket.id)
    socket.join(id)
    socket.on("Chat message", (msg, id_recipient) => {
        console.log(`=====================`)
        console.log('sender'+msg.sender);
        console.log('penerima '+id_recipient);
        console.log('id handshake'+id)
        console.log(msg)
        io.to(id_recipient).to(id).emit("chat message", msg);
    })
    socket.on('fromBuyer', msgEvent =>{
        socket.emit('fromBuyer',msgEvent);
    });
    socket.on('fromSeller', msgEvent =>{
        socket.emit('fromSeller',msgEvent);
    });
})



app.use(express.static("public"))
app.use(cors());
server.listen(port, () => {
    console.log(`server is running port ${port}`)
})
app.use(logger("dev")); 
app.use(express.urlencoded({extended: false})); 

app.use(express.json()); 
app.use("/", mainRouter); 



module.exports = app;


