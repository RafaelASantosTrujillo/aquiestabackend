const Categoria = require('../models/Categoria');

function consultarCategorias(req, res) {
    Categoria.findAll()
        .then((estado) => {
            console.log("Entre a consultar categorias");
            return res.json(estado);
        })
        .catch((error) => {
            console.log("Este es el error en consultar categorias:", error);
            return res.sendStatus(401);
        });
}

module.exports = {
    consultarCategorias,
}