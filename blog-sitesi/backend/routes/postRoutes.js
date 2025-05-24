const express = require('express');
const router = express.Router();
const PostController = require('../controllers/postController');
const authMiddleware = require('../middlewares/auth');

router.get('/', PostController.getAllPosts);
router.get('/:id', PostController.getPost);
router.post('/', authMiddleware, PostController.createPost);
router.get('/:id/edit', authMiddleware, PostController.editPostForm);
router.put('/:id', authMiddleware, PostController.updatePost);

module.exports = router;