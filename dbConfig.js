/* If it is not important to hide login details, ie during development, the database login details can be included as shown */
/*
module.exports = {
    user: 'me',
    host: 'renderhost',
    database: 'api',
    password: 'password',
    port: 5432,
};
*/

/*For production mode, to keep login details out of repo, the below format can be used*/
/*This obtains login details from .env file */
const dotenv = require('dotenv').config();

module.exports = {
    user: process.env.USER,
    hostname: process.env.HOSTNAME,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    databaseUrl: process.env.DATABASE_URL
}

