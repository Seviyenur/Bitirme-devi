const { poolPromise } = require('../config/db');
const sql = require('mssql');

class User {
  static async findByUsername(username) {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('username', sql.NVarChar, username)
      .query('SELECT * FROM users WHERE username = @username');
    return result.recordset[0];
  }
}
module.exports = User;