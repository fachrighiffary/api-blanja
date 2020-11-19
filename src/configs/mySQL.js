const mySQL = require('mySQL');

const db = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blanjaapp'
})

db.connect((err) => {
    if(err) throw err;
    console.log("Database connected")
})

module.exports = db