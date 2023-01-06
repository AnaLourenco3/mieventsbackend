"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class videoUrl extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      videoUrl.belongsTo(models.blogData, { foreignKey: "blogId" });
    }
  }
  videoUrl.init(
    {
      videoUrl: DataTypes.STRING,
      blogId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "videoUrl",
    }
  );
  return videoUrl;
};
