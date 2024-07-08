const connection = require('../config/database');

const Blog = {
  create: (title, content, user_id, callback) => {
    const query = 'INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)';
    connection.query(query, [title, content, user_id], callback);
  },

  findAll: (callback) => {
    const query = 'SELECT * FROM posts';
    connection.query(query, callback);
  },

  findById: (id, callback) => {
    const query = 'SELECT * FROM posts WHERE id = ?';
    connection.query(query, [id], callback);
  },

  update: (id, title, content, callback) => {
    const query = 'UPDATE posts SET title = ?, content = ? WHERE id = ?';
    connection.query(query, [title, content, id], callback);
  },

  delete: (id, callback) => {
    const query = 'DELETE FROM posts WHERE id = ?';
    connection.query(query, [id], callback);
  }
};

module.exports = Blog;
