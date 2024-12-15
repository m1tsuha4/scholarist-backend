const Article = require('../models/article');

class ArticleService {
  static async create(data) {
    return await Article.create(data);
  }

  static async getAll() {
    return await Article.findAll();
  }

  static async getById(id) {
    return await Article.findByPk(id);
  }

  static async update(id, data) {
    const article = await Article.findByPk(id);
    if (!article) return null;
    return await article.update(data);
  }

  static async delete(id) {
    const article = await Article.findByPk(id);
    if (!article) return false;
    await article.destroy();
    return true;
  }
}

module.exports = ArticleService;
