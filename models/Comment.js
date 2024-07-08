const connection = require('../config/database');

const Comment = {
  create: (comment, user_id, blog_post_id, callback) => {
    const query = 'INSERT INTO comments (content,user_id,post_id) VALUES (?, ?, ?)';
    connection.query(query, [comment, user_id, blog_post_id], callback);
  },

  findByBlogPostId: (blog_post_id, callback) => {
    const query = 'SELECT * FROM comments WHERE post_id = ?';
    connection.query(query, [blog_post_id], callback);
  }
};

module.exports = Comment;
