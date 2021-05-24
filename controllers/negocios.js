const Negocio = require('../models/Negocio')
const Estado = require('../models/Estado')
const Usuario = require('../models/Usuario')
const Categoria = require('../models/Categoria')

function crearNegocio(req, res, next) {
    const ctg = Negocio.build(req.body);
    ctg.save()
        .then((Negocio) => {
            console.log("Se crea nueva Negocio");
            return res.sendStatus(201).json(Negocio);
        })
        .catch(next);
}

function consultarNegocios(req, res) {
    Negocio.findAll({include: [Estado, Usuario,Categoria]})
        .then((Negocio) => {
            console.log("Entre a consultar Negocios");
            return res.json(Negocio);
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(401);
        });
}

function consultarNegocio(req, res) {
    Negocio.findOne({
        where: {
            idNegocio: req.params.id,
        },
        include: [Categoria, Estado, Usuario]
    })
        .then((Negocio) => {
            console.log("Entre a consultar Negocio");
            if (Negocio) {
                return res.json(Negocio);
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(404);
        });
}

function modificarNegocio(req, res) {
    Negocio.findOne({
        where: {
            idNegocio: req.params.id,
        },
    })
        .then((NegocioInfo) => {
            if (NegocioInfo) {
                Negocio.update(
                    { ...req.body },
                    {
                        where: {
                            idNegocio: req.params.id,
                        },
                    }
                )
                    .then((Negocio) => {
                        console.log("Actualice Negocio");
                        return res.sendStatus(200).json(Negocio);
                    })
                    .catch((err) => {
                        console.log(
                            "Este es el error en la funcion modificarNegocio: ",
                            err
                        );
                        return res.sendStatus(500);
                    });
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Error en funcion eliminarNegocio", error);
            res.sendStatus(500);
        });
}

function eliminarNegocio(req, res) {
    Negocio.findOne({
        where: {
            idNegocio: req.params.id,
        },
    })
        .then((NegocioInfo) => {
            if (NegocioInfo) {
                Negocio.destroy({
                    where: {
                        idNegocio: req.params.id,
                    },
                })
                    .then((Negocio) => {
                        console.log("Elimine Negocio", Negocio);
                        return res.sendStatus(200);
                    })
                    .catch((err) => {
                        console.log(
                            "Este es el error en la funcion eliminaNegocio: ",
                            err
                        );
                        return res.sendStatus(500);
                    });
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Error en funcion eliminarNegocio", error);
            res.sendStatus(500);
        });
}

module.exports = {
    crearNegocio,
    consultarNegocios,
    consultarNegocio,
    modificarNegocio,
    eliminarNegocio,
};