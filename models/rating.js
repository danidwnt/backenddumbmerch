'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      rating.belongsTo(models.user, {
        as: "ratingUser",
        foreignKey: {
          name: "idUser",
        },
      });

      rating.belongsTo(models.product, {
        as: "ratingProduct",
        foreignKey: {
          name: "idProduct",
        },
      });

      rating.belongsTo(models.transaction, {
        as: "ratingTransaction",
        foreignKey: {
          name: "idTransaction",
        },
      });
    }
  };
  rating.init({
    idProduct: DataTypes.INTEGER,
    idTransaction: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    nilai: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'rating',
  });
  return rating;
};