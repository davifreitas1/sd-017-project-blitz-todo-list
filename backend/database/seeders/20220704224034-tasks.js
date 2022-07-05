'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Tasks',
    [
      {
        task: 'Organizar documentos',
        status: 'em andamento',
        userId: 1,
      },
      {
        task: 'Atualizar as planilhas',
        status: 'pendente',
        userId: 2,
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
