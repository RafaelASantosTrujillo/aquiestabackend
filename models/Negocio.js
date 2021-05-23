const { DataTypes } = require("sequelize");
const db = require("../config/db");
const Estado = require("./Estado");
const Usuario = require("./Usuario");

const Negocio = db.sequelize.define(
    "negocio",
    {
        idNegocio: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            AUTO_INCREMENT: true,
        },
        idEstado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: Estado, key: "idEstado" },
        },
        idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {model: Usuario, key: "idUsuario"}
        },
        nombreNegocio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcionNegocio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "negocio",
    }
);
Negocio.belongsTo(Estado, {
    foreignKey: "idEstado",
});
Negocio.belongsTo(Usuario, {
    foreignKey: "idUsuario",
});

module.exports = Negocio;
