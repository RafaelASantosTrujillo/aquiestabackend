const { DataTypes } = require("sequelize");
const db = require("../config/db");
const Estado = require("./Estado");
const Usuario = db.sequelize.define(
    "usuario",
    {
        idUsuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        nombre: { type: DataTypes.STRING },
        apellidos: { type: DataTypes.STRING },
        genero: { type: DataTypes.STRING },
        idEstado: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { model: Estado, key: "idEstado" },
            },
        email: { type: DataTypes.STRING },
        password: { type: DataTypes.STRING },
        tipo: { 
                type: DataTypes.BOOLEAN,
                defaultValue: false },
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "usuario",
    }
);

module.exports = Usuario;
