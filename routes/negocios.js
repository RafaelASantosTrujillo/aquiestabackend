const router = require('express').Router();
const {
    crearNegocio,
    consultarNegocios,
    consultarNegocio,
    modificarNegocio,
    eliminarNegocio,
} = require('../controllers/negocios')

router.post("/", crearNegocio);
router.get("/", consultarNegocios);
router.get("/:id", consultarNegocio);
router.put("/:id", modificarNegocio);
router.delete("/:id", eliminarNegocio);

module.exports = router;