'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Users',
    [
      {
        name: 'Douglas',
      },
      {
        name: 'Jefferson',
      }
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
