const router = require('express').Router();
const {
    crearNegocio,
    consultarNegocios,
    consultarNegocio,
    modificarNegocio,
    eliminarNegocio,
} = require('../controllers/negocios')

router.post("/crearNegocio", crearNegocio);
router.get("/consultarNegocios", consultarNegocios);
router.get("/consultarNegocio:id", consultarNegocio);
router.put("/modificarNegocio/:id", modificarNegocio);
router.delete("/eliminarNegocio/:id", eliminarNegocio);

module.exports = router;