const { poolPromise, sql } = require('../config/db');

class Post {
  static async getAll() {
    const pool = await poolPromise;
    const result = await pool.request()
      .query('SELECT p.*, u.username FROM posts p JOIN users u ON p.user_id = u.id ORDER BY p.created_at DESC');
    return result.recordset;
  }

  static async getById(id) {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('id', sql.Int, id)
      .query('SELECT p.*, u.username FROM posts p JOIN users u ON p.user_id = u.id WHERE p.id = @id');
    return result.recordset[0];
  }

  static async create(userId, title, content, category) {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('user_id', sql.Int, userId)
      .input('title', sql.NVarChar, title)
      .input('content', sql.NText, content)
      .input('category', sql.NVarChar, category)
      .query('INSERT INTO posts (user_id, title, content, category) OUTPUT INSERTED.id VALUES (@user_id, @title, @content, @category)');
    return result.recordset[0];
  }
}

module.exports = Post;