"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "categories",
      "imageUrl",
      { type: Sequelize.STRING(1000) },
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("categories", "imageUrl", {});
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
