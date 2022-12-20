"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "blogData",
      [
        {
          date: "21-8-2022",
          title: "You&Me",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
          mainImage: "https://i.insider.com/5eac8da748d92c3d275bb2de?width=700",
          categoryId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "18-9-2022",
          title: "Mary&John",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          mainImage:
            "https://d1tntvpcrzvon2.cloudfront.net/vpassets/_next/static/images/mobile_image-623de1a8022c184fa125aa44a23f9f65.jpg",
          categoryId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("blogData", null, {});
  },
};
