const router = require('express').Router();
const {
    crearUsuario,
    consultarUsuario,
    modificarUsuario,
    eliminarUsuario,
} = require('../controllers/usuarios')

router.post("/crearUsuario", crearUsuario);
router.get("/consultarUsuario:id", consultarUsuario);
router.put("/modificarUsuario/:id", modificarUsuario);
router.delete("/eliminarUsuario/:id", eliminarUsuario);

module.exports = router;