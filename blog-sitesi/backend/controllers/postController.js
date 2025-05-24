const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.getAll();
    res.render('pages/index', { 
      posts,
      currentUser: req.session.user 
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Post.getById(req.params.id);
    res.render('pages/post', { 
      post,
      currentUser: req.session.user 
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};