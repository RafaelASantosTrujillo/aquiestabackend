const router = require('express').Router();
const {
    crearUsuario,
    consultarUsuario,
    modificarUsuario,
    eliminarUsuario,
} = require('../controllers/usuarios')

router.post("/", crearUsuario);
router.get("/:id", consultarUsuario);
router.put("/:id", modificarUsuario);
router.delete("/:id", eliminarUsuario);

module.exports = router;