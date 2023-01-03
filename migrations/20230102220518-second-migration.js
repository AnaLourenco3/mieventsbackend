"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "categories",
      "description",
      { type: Sequelize.STRING(10000) },
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("categories", "description", {});
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
