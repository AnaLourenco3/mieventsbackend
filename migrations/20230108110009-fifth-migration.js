"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "categories",
      "imageGridHomepageUrl",
      { type: Sequelize.STRING },
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("categories", "imageGridHomepageUrl", {});
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
