const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize(
    'bntzg0mb4zbmuok6j1cm',//process.env.DB,
    'uoaazezwaejxrfcz',//process.env.USER,
    'ZU23llUYDv0r2LNcbMgA',//process.env.PASSWORD,
    {
        host: 'bntzg0mb4zbmuok6j1cm-mysql.services.clever-cloud.com',//process.env.HOST,
        dialect: "mysql",
        operatorAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
);
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
