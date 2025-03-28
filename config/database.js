const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'sql12.freesqldatabase.com',
  user: 'sql12769025',
  password: 'ta5MvSiTYE',
  database: 'sql12769025',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();