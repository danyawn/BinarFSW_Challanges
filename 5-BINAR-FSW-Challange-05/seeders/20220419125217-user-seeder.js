'use strict';
const bcrypt = require("bcrypt")

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'yanDanu@gmail.com',
        password: await bcrypt.hash("111111", 10),
        role: "superadmin",
        createdAt: new Date(),
        updatedAt: null,
      },
      {
        email: 'hafidh@gmail.com',
        password: await bcrypt.hash("123456", 10),
        role: "superadmin",
        createdAt: new Date(),
        updatedAt: null,
      },
      {
        email: 'agil@gmail.com',
        password: await bcrypt.hash("111111", 10),
        role: "admin",
        createdAt: new Date(),
        updatedAt: null,
      },
      {
        email: 'npc@gmail.com',
        password: await bcrypt.hash("111111", 10),
        role: "member",
        createdAt: new Date(),
        updatedAt: null,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};