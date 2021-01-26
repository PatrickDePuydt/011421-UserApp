'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.pet.belongsTo(models.user);
      models.pet.belongsToMany(models.toy, {through: 'petToys'});
    }
  };
  pet.init({
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    description: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pet',
  });
  return pet;
};