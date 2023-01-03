"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Wedding",
          quote:
            "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. - Lao Tzu",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nibh vel lacus imperdiet luctus in quis ante. Phasellus sit amet ultrices nisl. Vivamus non erat velit. Duis condimentum congue dolor vel iaculis. Etiam tincidunt interdum nisi, sit amet rutrum neque sollicitudin quis. Duis eu porttitor mauris. Nulla efficitur metus urna, eu scelerisque risus pulvinar eget. Aenean tortor arcu, porttitor non consectetur id, convallis vel arcu. Cras ornare posuere tortor, quis gravida nisi bibendum sed. Nullam non orci elit. Maecenas id mauris eros.",
          imageUrl:
            "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wedding Proposal",
          quote:
            "I can conquer the world with one hand, as long as you’re holding the other. — Unknown",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nibh vel lacus imperdiet luctus in quis ante. Phasellus sit amet ultrices nisl. Vivamus non erat velit. Duis condimentum congue dolor vel iaculis. Etiam tincidunt interdum nisi, sit amet rutrum neque sollicitudin quis. Duis eu porttitor mauris. Nulla efficitur metus urna, eu scelerisque risus pulvinar eget. Aenean tortor arcu, porttitor non consectetur id, convallis vel arcu. Cras ornare posuere tortor, quis gravida nisi bibendum sed. Nullam non orci elit. Maecenas id mauris eros.",
          imageUrl:
            "https://images.unsplash.com/photo-1583132648365-db96e1ea0c42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bachelorette Party",
          quote: "The most important day of your life",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nibh vel lacus imperdiet luctus in quis ante. Phasellus sit amet ultrices nisl. Vivamus non erat velit. Duis condimentum congue dolor vel iaculis. Etiam tincidunt interdum nisi, sit amet rutrum neque sollicitudin quis. Duis eu porttitor mauris. Nulla efficitur metus urna, eu scelerisque risus pulvinar eget. Aenean tortor arcu, porttitor non consectetur id, convallis vel arcu. Cras ornare posuere tortor, quis gravida nisi bibendum sed. Nullam non orci elit. Maecenas id mauris eros.",
          imageUrl:
            "https://images.unsplash.com/photo-1628336707631-68131ca720c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vow Renewal",
          quote:
            "And I’d choose you; in a hundred lifetimes, in a hundred worlds, in any version of reality, I’d find you and I’d choose you. — Kiersten White, The Chaos of Stars",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nibh vel lacus imperdiet luctus in quis ante. Phasellus sit amet ultrices nisl. Vivamus non erat velit. Duis condimentum congue dolor vel iaculis. Etiam tincidunt interdum nisi, sit amet rutrum neque sollicitudin quis. Duis eu porttitor mauris. Nulla efficitur metus urna, eu scelerisque risus pulvinar eget. Aenean tortor arcu, porttitor non consectetur id, convallis vel arcu. Cras ornare posuere tortor, quis gravida nisi bibendum sed. Nullam non orci elit. Maecenas id mauris eros.",
          imageUrl:
            "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Baptism",
          quote: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nibh vel lacus imperdiet luctus in quis ante. Phasellus sit amet ultrices nisl. Vivamus non erat velit. Duis condimentum congue dolor vel iaculis. Etiam tincidunt interdum nisi, sit amet rutrum neque sollicitudin quis. Duis eu porttitor mauris. Nulla efficitur metus urna, eu scelerisque risus pulvinar eget. Aenean tortor arcu, porttitor non consectetur id, convallis vel arcu. Cras ornare posuere tortor, quis gravida nisi bibendum sed. Nullam non orci elit. Maecenas id mauris eros.",
          imageUrl:
            "https://images.unsplash.com/photo-1566516171511-1c411a59c8ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFwdGlzbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BabyShower",
          quote: "The most important day of your life",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nibh vel lacus imperdiet luctus in quis ante. Phasellus sit amet ultrices nisl. Vivamus non erat velit. Duis condimentum congue dolor vel iaculis. Etiam tincidunt interdum nisi, sit amet rutrum neque sollicitudin quis. Duis eu porttitor mauris. Nulla efficitur metus urna, eu scelerisque risus pulvinar eget. Aenean tortor arcu, porttitor non consectetur id, convallis vel arcu. Cras ornare posuere tortor, quis gravida nisi bibendum sed. Nullam non orci elit. Maecenas id mauris eros.",
          imageUrl:
            "https://images.unsplash.com/photo-1579736283361-4008b21c7ed6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gender Reveal",
          quote: "The most important day of your life",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nibh vel lacus imperdiet luctus in quis ante. Phasellus sit amet ultrices nisl. Vivamus non erat velit. Duis condimentum congue dolor vel iaculis. Etiam tincidunt interdum nisi, sit amet rutrum neque sollicitudin quis. Duis eu porttitor mauris. Nulla efficitur metus urna, eu scelerisque risus pulvinar eget. Aenean tortor arcu, porttitor non consectetur id, convallis vel arcu. Cras ornare posuere tortor, quis gravida nisi bibendum sed. Nullam non orci elit. Maecenas id mauris eros.",
          imageUrl:
            "https://images.unsplash.com/photo-1532304854-4248635f2cb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Child birthday",
          quote: "Life is to celebrate",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nibh vel lacus imperdiet luctus in quis ante. Phasellus sit amet ultrices nisl. Vivamus non erat velit. Duis condimentum congue dolor vel iaculis. Etiam tincidunt interdum nisi, sit amet rutrum neque sollicitudin quis. Duis eu porttitor mauris. Nulla efficitur metus urna, eu scelerisque risus pulvinar eget. Aenean tortor arcu, porttitor non consectetur id, convallis vel arcu. Cras ornare posuere tortor, quis gravida nisi bibendum sed. Nullam non orci elit. Maecenas id mauris eros.",
          imageUrl:
            "https://images.unsplash.com/photo-1635388108365-3ff5790a6a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Adult birthday",
          quote: "“It's your special day — get out there and celebrate!",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nibh vel lacus imperdiet luctus in quis ante. Phasellus sit amet ultrices nisl. Vivamus non erat velit. Duis condimentum congue dolor vel iaculis. Etiam tincidunt interdum nisi, sit amet rutrum neque sollicitudin quis. Duis eu porttitor mauris. Nulla efficitur metus urna, eu scelerisque risus pulvinar eget. Aenean tortor arcu, porttitor non consectetur id, convallis vel arcu. Cras ornare posuere tortor, quis gravida nisi bibendum sed. Nullam non orci elit. Maecenas id mauris eros.",
          imageUrl:
            "https://images.unsplash.com/photo-1502035618526-6b2f1f5bca1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Other events",
          quote: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nibh vel lacus imperdiet luctus in quis ante. Phasellus sit amet ultrices nisl. Vivamus non erat velit. Duis condimentum congue dolor vel iaculis. Etiam tincidunt interdum nisi, sit amet rutrum neque sollicitudin quis. Duis eu porttitor mauris. Nulla efficitur metus urna, eu scelerisque risus pulvinar eget. Aenean tortor arcu, porttitor non consectetur id, convallis vel arcu. Cras ornare posuere tortor, quis gravida nisi bibendum sed. Nullam non orci elit. Maecenas id mauris eros.",
          imageUrl:
            "https://images.unsplash.com/photo-1561912774-79769a0a0a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Tutorial",
          quote: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nibh vel lacus imperdiet luctus in quis ante. Phasellus sit amet ultrices nisl. Vivamus non erat velit. Duis condimentum congue dolor vel iaculis. Etiam tincidunt interdum nisi, sit amet rutrum neque sollicitudin quis. Duis eu porttitor mauris. Nulla efficitur metus urna, eu scelerisque risus pulvinar eget. Aenean tortor arcu, porttitor non consectetur id, convallis vel arcu. Cras ornare posuere tortor, quis gravida nisi bibendum sed. Nullam non orci elit. Maecenas id mauris eros.",
          imageUrl:
            "https://images.unsplash.com/photo-1488806374796-a4071c52353b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
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
