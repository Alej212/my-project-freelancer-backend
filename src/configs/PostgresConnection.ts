import { Sequelize } from '@sequelize/core'
import { config } from 'dotenv'
config()

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: 'superuser',
  password: 'password',
  database: 'postgres',
  host: 'db',
  port: 5432,
  ssl: false
  // clientMinMessages: 'notice'
})

export default sequelize
