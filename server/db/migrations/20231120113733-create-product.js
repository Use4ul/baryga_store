'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      img: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      main_price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      main_price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      selling_price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      cashback: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      cashback_type: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      bonuses: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bonuses_type: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      purchase_plase: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      marketplace_link: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      promotion: {
        allowNull: false,
        defoultValue: 0,
        type: Sequelize.INTEGER
      },
      sold: {
        allowNull: false,
        defoultValue: true,
        type: Sequelize.BOOLEAN
      },
      days_on_sale: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};