const Estado = require('../models/Estado');

function consultarEstados(req, res) {
    Estado.findAll()
        .then((estado) => {
            console.log("Entre a consultar estados");
            return res.json(estado);
        })
        .catch((error) => {
            console.log("Este es el error en consultar estados:", error);
            return res.sendStatus(401);
        });
}

module.exports = {
    consultarEstados,
}