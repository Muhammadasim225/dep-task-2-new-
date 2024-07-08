const connection = require('../config/database');

// Create a new blog post
exports.createBlog = (req, res) => {
  const { title, content, user_id } = req.body;
  const query = 'INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)';
  connection.query(query, [title, content, user_id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(201).json({ id: results.insertId, title, content, user_id });
  });
};

// Get all blog posts
exports.getAllBlogs = (req, res) => {
  const query = 'SELECT * FROM posts';
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json(results);
  });
};

// Get a blog post by ID
exports.getBlogById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM posts WHERE id = ?';
  connection.query(query, [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(results[0]);
  });
};

// Update a blog post by ID
exports.updateBlog = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const query = 'UPDATE posts SET title = ?, content = ? WHERE id = ?';
  connection.query(query, [title, content, id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json({ id, title, content });
  });
};

// Delete a blog post by ID
exports.deleteBlog = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM posts WHERE id = ?';
  connection.query(query, [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(204).json();
  });
};
