const mysql = require('mysql');
const {HOST, DB, USER, PASS, DB_USER, DB_PASS} = process.env;

const db = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASS,
    database: DB
})

db.connect((err) => {
    if(err) throw err;
    console.log("Database connected")
})

module.exports = db