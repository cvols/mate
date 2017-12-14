// dependencies
var Sequelize = require('sequelize')

// creating mysql database using Sequelize
var sequelize = new Sequelize('xchange_mate', 'chris', 'password', { 
 
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    }
})

// creating connection variable
var connection

// heroku connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'chris',
        password: 'password',
        database: 'xchange_mate' 
    })
}

module.exports = sequelize