'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuario', {
      idUsuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING(14),
        allowNull: false
      },
      ra: {
        type: Sequelize.STRING(20), // como string
        allowNull: false
      },
      dataNascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      genero: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      endereco: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      telefone: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      tipoUsuario: {
        type: Sequelize.ENUM("passageiro", "motorista"),
        allowNull: false
      },
      cnh: {
        type: Sequelize.STRING(20),
        allowNull: true // só é necessário se for motorista
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario');
  }
};
