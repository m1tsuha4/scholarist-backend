const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Article = sequelize.define('Article', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  authors: {
    type: DataTypes.STRING,
    allowNull: false,
    get() {
      return this.getDataValue('authors').split(',');
    },
    set(value) {
      this.setDataValue('authors', value.join(','));
    },
  },
  summary: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  source: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Article;
