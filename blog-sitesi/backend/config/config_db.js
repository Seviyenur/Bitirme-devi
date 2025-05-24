const sql = require('mssql');
require('dotenv').config();

const config = {
  user: 'kullanici_adi',
  password: 'sifre',
  server: 'localhost',
  database: 'blog_db'
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('SQL Server bağlantısı başarılı!');
    return pool;
  })
  .catch(err => {
    console.error('Bağlantı hatası:', err);
    process.exit(1);
  });

module.exports = {
  sql, poolPromise
};