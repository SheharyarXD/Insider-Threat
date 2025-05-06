require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("postgresql://InsiderThreat_owner:npg_D9pjQHFLX5oB@ep-twilight-unit-a4d818h9-pooler.us-east-1.aws.neon.tech/InsiderThreat?sslmode=require", {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false
});

module.exports = sequelize;
