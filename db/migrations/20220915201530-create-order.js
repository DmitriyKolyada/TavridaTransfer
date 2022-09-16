module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      transferDate: {
        type: Sequelize.DATE,
      },
      transferTime: {
        type: Sequelize.TIME,
      },
      transferClass: {
        type: Sequelize.STRING,
      },
      commentOnOrder: {
        type: Sequelize.TEXT,
      },
      departurePoint: {
        type: Sequelize.STRING,
      },
      arrivalPoint: {
        type: Sequelize.STRING,
      },
      distance: {
        type: Sequelize.INTEGER,
      },
      travelTime: {
        type: Sequelize.STRING,
      },
      costOfTheTransfer: {
        type: Sequelize.INTEGER,
      },
      clientId: {
        referevces: {
          models: 'Clients',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  },
};
