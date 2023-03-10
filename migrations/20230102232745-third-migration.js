"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "categories",
      "imageHeaderUrl",
      { type: Sequelize.STRING(1000) },
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("categories", "imageHeaderUrl", {});
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
