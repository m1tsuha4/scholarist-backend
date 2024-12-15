const express = require('express');
const ArticleController = require('../controllers/articleController');

const router = express.Router();

router.post('/articles', ArticleController.create);
router.get('/articles', ArticleController.getAll);
router.get('/articles/:id', ArticleController.getById);
router.put('/articles/:id', ArticleController.update);
router.delete('/articles/:id', ArticleController.delete);

module.exports = router;
