const ArticleService = require('../services/articleService');

class ArticleController {
  static async create(req, res) {
    try {
      const article = await ArticleService.create(req.body);
      res.status(201).json({
        success: true,
        data: article,
        message: 'Article created successfully',
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        data: null,
        message: error.message,
      });
    }
  }

  static async getAll(req, res) {
    try {
      const articles = await ArticleService.getAll();
      res.json({
        success: true,
        data: articles,
        message: 'Articles retrieved successfully',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        data: null,
        message: error.message,
      });
    }
  }

  static async getById(req, res) {
    try {
      const article = await ArticleService.getById(req.params.id);
      if (!article) {
        return res.status(404).json({
          success: false,
          data: null,
          message: 'Article not found',
        });
      }
      res.json({
        success: true,
        data: article,
        message: 'Article retrieved successfully',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        data: null,
        message: error.message,
      });
    }
  }

  static async update(req, res) {
    try {
      const article = await ArticleService.update(req.params.id, req.body);
      if (!article) {
        return res.status(404).json({
          success: false,
          data: null,
          message: 'Article not found',
        });
      }
      res.json({
        success: true,
        data: article,
        message: 'Article updated successfully',
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        data: null,
        message: error.message,
      });
    }
  }

  static async delete(req, res) {
    try {
      const deleted = await ArticleService.delete(req.params.id);
      if (!deleted) {
        return res.status(404).json({
          success: false,
          data: null,
          message: 'Article not found',
        });
      }
      res.json({
        success: true,
        data: null,
        message: 'Article deleted successfully',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        data: null,
        message: error.message,
      });
    }
  }
}

module.exports = ArticleController;
