'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return await queryInterface.bulkInsert('Categories', [
     {
       name: "Javascript",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: "Dart",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "C#",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Java",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Categories', null, {});
  }
};
