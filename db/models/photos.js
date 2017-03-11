const Sequelize = require('sequelize')
const db = require('APP/db')

const Photos = db.define('photos', {
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'https://placeholdit.imgix.net/~text?txtsize=28&txt=300%C3%97300&w=300&h=300'
  }
});

module.exports = Photos;
