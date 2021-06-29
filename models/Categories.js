const { DataTypes } = require("sequelize");
const db = require("../config/db");
const Categories = db.sequelize.define(
    "categories",
    {
        id_category: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            AUTO_INCREMENT: true,
        },
        name: {
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

module.exports = Categories;