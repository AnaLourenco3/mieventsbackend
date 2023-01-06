"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class blogData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      blogData.belongsTo(models.category, { foreignKey: "categoryId" });
      blogData.hasMany(models.blogImage, { foreignKey: "blogId" });
      blogData.hasMany(models.videoUrl, { foreignKey: "blogId" });
    }
  }
  blogData.init(
    {
      date: DataTypes.STRING,
      title: DataTypes.STRING,
      text: DataTypes.STRING,
      mainImageUrl: DataTypes.STRING,
      videoUrl: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      publicId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "blogData",
    }
  );
  return blogData;
};
