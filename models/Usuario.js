const { DataTypes } = require("sequelize");
const db = require("../config/db");
const Usuario = db.sequelize.define(
    "usuario",
    {
        idUsuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        nombre: { type: DataTypes.STRING },
        apellidoPaterno: { type: DataTypes.STRING },
        apellidoMaterno: { type: DataTypes.STRING },
        foto: { type: DataTypes.STRING },
        edad: { type: DataTypes.INTEGER },
        sexo: { type: DataTypes.STRING },
        direccion: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING },
        password: { type: DataTypes.STRING },
        telefono: { type: DataTypes.STRING },
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "usuario",
    }
);

module.exports = Usuario;
