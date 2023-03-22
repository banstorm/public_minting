'use strict';

const Sequelize = require('sequelize');

const mint_info = require('./mint_info')

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};


const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,{
    pool: {
      max:10,
      min:0,
      idle:10000
    }
  }
  )

db.MintInfo = require('./mint_info')(sequelize,Sequelize);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
