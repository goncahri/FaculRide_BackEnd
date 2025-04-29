'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Veiculo', {
      ID_veiculo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      Placa_veiculo: {
        type: Sequelize.STRING(6),
        allowNull: true
      },
      Cor: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      Modelo: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      Ano: {
        type: Sequelize.DATE,
        allowNull: true
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "usuario",
          key: "idUsuario"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Veiculo');
  }
};
