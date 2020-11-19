const express = require('express');
const mySql = require('mysql')

const app = express()//fungsi expres ini digunkanan untuk membuat aplikasi express

//test apakah expressnya jalan atau tidak
const port = 8000;

app.listen(port, () => {
    console.log(`server is running port ${port}`)
})

// localhost:8000/products
// endpoint => /products
// localhost:8000
// endpoint => /
app.get('/',(req, res) => {
    res.send("Selamat Datang")
});

const db = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'beginner'
})

db.connect((err) => {
    if(err) throw err;
    console.log("Database connected")
})