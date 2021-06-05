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

// Función para crear Categoría
function crearCategoria(req, res, next) {
    const ctg = Categoria.build(req.body);
    ctg.save()
        .then((categoria) => {
            console.log("Nueva categoria añadida");
            return res.sendStatus(201).json(categoria);
        })
        .catch(next);
}

// Función para consultar una categoría
function consultarCategoria(req, res) {
    Categoria.findOne({
        where: {
            idCategoria: req.params.id,
        },
    })
        .then((categoria) => {
            console.log("Entra a consultar categoria");
            if (categoria) {
                return res.json(categoria);
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("¡Ups! Ocurrió el siguiente error:", error);
            return res.sendStatus(404);
        });
}

// Función para modificar categoría
function modificarCategoria(req, res) {
    Categoria.findOne({
        where: {
            idCategoria: req.params.id,
        },
    })
        .then((CategoriaInfo) => {
            if (CategoriaInfo) {
                Categoria.update(
                    { nombreCategoria: req.body.nombreCategoria },
                    {
                        where: {
                            idCategoria: req.params.id,
                        },
                    }
                )
                    .then((categoria) => {
                        console.log("Categoría actualizada");
                        return res.sendStatus(200).json(categoria);
                    })
                    .catch((err) => {
                        console.log(
                            "Error al modificar categoria: ",
                            err
                        );
                        return res.sendStatus(500);
                    });
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Error al intentar modificar categoria", error);
            res.sendStatus(500);
        });
}

// Función para eliminar una categoría
function eliminarCategoria(req, res) {
    Categoria.findOne({
        where: {
            idCategoria: req.params.id,
        },
    })
        .then((CategoriaInfo) => {
            if (CategoriaInfo) {
                Categoria.destroy({
                    where: {
                        idCategoria: req.params.id,
                    },
                })
                    .then((categoria) => {
                        console.log("Categoría eliminada");
                        return res.sendStatus(200);
                    })
                    .catch((err) => {
                        console.log(
                            "Error al eliminar categoría: ",
                            err
                        );
                        return res.sendStatus(500);
                    });
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Error al intentar eliminar categoria", error);
            res.sendStatus(500);
        });
}

module.exports = {
    consultarCategorias,
    crearCategoria,
    consultarCategoria,
    modificarCategoria,
    eliminarCategoria
}