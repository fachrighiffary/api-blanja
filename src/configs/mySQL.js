const mySQL = require('mySQL');
const {HOST, DB, USER, PASS} = process.env;

// console.log(HOST)
// console.log(DB)
// console.log(USER)
// console.log(PASS)

const db = mySQL.createConnection({
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