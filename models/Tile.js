const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Tile extends Model {}
  
Tile.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2], 
        }
      },
      date_created: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      // converts camel-cased column names to snake case
      underscored: true,
      modelName: 'tile',
    }
  );
  
  module.exports = Tile;
  