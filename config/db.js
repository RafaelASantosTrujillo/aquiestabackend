const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize(
    process.env.DB,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
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
