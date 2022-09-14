'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Client, { foreignKey: 'clientId' });
    }
  }
  Order.init({
    transferDate: DataTypes.DATE,
    transferTime: DataTypes.TIME,
    transferClass: DataTypes.STRING,
    commentOnOrder: DataTypes.TEXT,
    distance: DataTypes.INTEGER,
    travelTime: DataTypes.TIME,
    costOfTheTransfer: DataTypes.INTEGER,
    clientId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
