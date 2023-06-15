
const dotenv = require('dotenv').config();

module.exports = {
    user: process.env.USER,
    host: process.env.HOSTNAME,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,    
    sslmode: process.env.SSLMODE,
    nodeVersion: process.env.NODE_VERSION
}

