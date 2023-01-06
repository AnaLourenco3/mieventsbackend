"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "blogData",
      "videoUrl",
      { type: Sequelize.STRING },
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("blogData", "videoUrl", {});
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
