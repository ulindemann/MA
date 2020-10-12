//==  connecting to mariadb
const mariadb = require('mariadb');
const pool = mariadb.createPool({
     //host: '127.0.0.1', 
     user:'udo', 
     password: 'udo',
     database: 'udo',
     connectionLimit: 5
});

module.exports = pool;