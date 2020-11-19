const mySQL = require('mySQL');

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

module.exports = db