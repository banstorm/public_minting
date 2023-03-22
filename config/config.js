const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  development: {
    username: 'root',
    password: '!cha65312012',
    database: 'pmint',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'database_development',
    host: 'math-db.cmxxowskruii.ap-northeast-2.rds.amazonaws.com',
    dialect: 'mssql',
    operatorsAliases: false,
  },
}