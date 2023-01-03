"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "categories",
      "quote",
      { type: Sequelize.STRING },
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("categories", "quote", {});
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
