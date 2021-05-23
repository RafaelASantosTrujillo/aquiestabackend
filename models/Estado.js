const { DataTypes } = require("sequelize");
const db = require("../config/db");
const Estado = db.sequelize.define(
    "estado",
    {
        idEstado: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            AUTO_INCREMENT: true,
        },
        nombreEstado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "estado",
    }
);

module.exports = Estado;