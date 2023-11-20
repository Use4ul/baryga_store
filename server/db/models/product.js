'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    img: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    main_price: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    main_price: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    selling_price: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    cashback: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    cashback_type: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    bonuses: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    bonuses_type: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    purchase_plase: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    marketplace_link: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    promotion: {
      allowNull: false,
      defoultValue: 0,
      type: DataTypes.INTEGER
    },
    sold: {
      allowNull: false,
      defoultValue: true,
      type: DataTypes.BOOLEAN
    },
    days_on_sale: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};