'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blogImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  blogImage.init({
    image: DataTypes.STRING,
    blogId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'blogImage',
  });
  return blogImage;
};