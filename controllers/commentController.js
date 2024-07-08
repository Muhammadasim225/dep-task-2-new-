const connection = require('../config/database');

// Create a new comment
exports.createComment = (req, res) => {
  const { content, user_id, post_id } = req.body;
  const query = 'INSERT INTO comments (content, user_id, post_id) VALUES (?, ?, ?)';
  connection.query(query, [content, user_id, post_id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(201).json({ id: results.insertId, content, user_id, post_id });
  });
};

// Get comments for a specific blog post
exports.getCommentsByBlogPost = (req, res) => {
  const { blogPostId } = req.params;
  const query = 'SELECT * FROM comments WHERE post_id = ?';
  connection.query(query, [blogPostId], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json(results);
  });
};
