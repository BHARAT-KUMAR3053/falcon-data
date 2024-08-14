import { DataTypes } from 'sequelize';

import { sequelize } from '../database';

const TABLE_NAME = 'Calendar';

export const Calendar = sequelize.define(TABLE_NAME, {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
});
