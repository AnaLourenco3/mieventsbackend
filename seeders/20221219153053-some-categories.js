"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Wedding",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wedding Proposal",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bachelorette Party",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vow Renewal",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Baptism",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BabyShower",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gender Revelation",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Child bday",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Adult bday",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Other events",

          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Tutorial",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
