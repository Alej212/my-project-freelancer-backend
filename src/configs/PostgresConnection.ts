import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  port: 5432,
  ssl: false,
  //clientMinMessages: 'notice',
});

async function testConnection() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

export default testConnection();