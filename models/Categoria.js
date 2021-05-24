const { DataTypes } = require("sequelize");
const db = require("../config/db");
const Categoria = db.sequelize.define(
    "categoria",
    {
        idCategoria: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            AUTO_INCREMENT: true,
        },
        nombreCategoria: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "categoria",
    }
);

module.exports = Categoria;