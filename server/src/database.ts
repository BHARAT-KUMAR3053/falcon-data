import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const databaseConnection = async (): Promise<void> => {
  try {
    //connect to database
    await sequelize.sync({ force: false });
    console.log('Database synchronized');
  } catch (error) {
    // eslint-disable-next-line quotes
    console.log('error', "doctor's calendar Service databaseConnection() method error:", error);
  }
};

export { databaseConnection, sequelize };
