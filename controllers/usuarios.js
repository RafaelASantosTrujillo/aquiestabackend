const Usuario = require("../models/Usuario");

function crearUsuario(req, res, next) {
    const ctg = Usuario.build(req.body);
    ctg.save()
        .then((Usuario) => {
            console.log("Se crea nueva Usuario");
            return res.sendStatus(201).json(Usuario);
        })
        .catch(next);
}
function consultarUsuario(req, res) {
    Usuario.findOne({
        where: {
            idUsuario: req.params.id,
        },
    })
        .then((Usuario) => {
            console.log("Entre a consultar Usuario");
            if (Usuario) {
                return res.json(Usuario);
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Este es el error:", error);
            return res.sendStatus(404);
        });
}

function modificarUsuario(req, res) {
    Usuario.findOne({
        where: {
            idUsuario: req.params.id,
        },
    })
        .then((UsuarioInfo) => {
            if (UsuarioInfo) {
                Usuario.update(
                    { ...req.body },
                    {
                        where: {
                            idUsuario: req.params.id,
                        },
                    }
                )
                    .then((Usuario) => {
                        console.log("Actualice Usuario");
                        return res.sendStatus(200).json(Usuario);
                    })
                    .catch((err) => {
                        console.log(
                            "Este es el error en la funcion modificarUsuario: ",
                            err
                        );
                        return res.sendStatus(500);
                    });
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Error en funcion eliminarUsuario", error);
            res.sendStatus(500);
        });
}

function eliminarUsuario(req, res) {
    Usuario.findOne({
        where: {
            idUsuario: req.params.id,
        },
    })
        .then((UsuarioInfo) => {
            if (UsuarioInfo) {
                Usuario.destroy({
                    where: {
                        idUsuario: req.params.id,
                    },
                })
                    .then((Usuario) => {
                        console.log("Elimine Usuario", Usuario);
                        return res.sendStatus(200);
                    })
                    .catch((err) => {
                        console.log(
                            "Este es el error en la funcion eliminaUsuario: ",
                            err
                        );
                        return res.sendStatus(500);
                    });
            } else {
                return res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log("Error en funcion eliminarUsuario", error);
            res.sendStatus(500);
        });
}

module.exports = {
    crearUsuario,
    consultarUsuario,
    modificarUsuario,
    eliminarUsuario,
};
