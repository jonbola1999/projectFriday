"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Topics", [
      {
        title: "Кругозор",
      },
      {
        title: "Утренний стендап с Юрой",
      },
      {
        title: "Эльбрус",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Topics", null, {});
  },
};
