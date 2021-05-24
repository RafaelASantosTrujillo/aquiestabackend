const { DataTypes } = require("sequelize");
const db = require("../config/db");
const Estado = require("./Estado");
const Categoria = require("./Categoria");
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
        idCategoria:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: Categoria, key: "idCategoria" }
        },
        nombreNegocio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcionNegocio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        price:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
        }
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
Negocio.belongsTo(Categoria,{
    foreignKey: "idCategoria",
});

module.exports = Negocio;
