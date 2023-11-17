const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Tracker extends Model {}
  
Tracker.init(
    {
      // for now, this id is not utilized because each tile has only one tracker.
      // future development could utilize this id number if tiles hold multiple trackers.
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      tracker_goal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
        }
      },
      current_tracker_status: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          isNumeric: true,
        }
      },
      tile_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tile',
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
      modelName: 'tracker',
    }
  );
  
module.exports = Tracker;
  