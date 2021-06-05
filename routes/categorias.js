const router = require('express').Router();

const {
    consultarCategorias, 
    crearCategoria, 
    consultarCategoria, //Completando estructura del CRUD
    modificarCategoria,
    eliminarCategoria
} = require('../controllers/categorias')

router.get("/", consultarCategorias);
router.post("/crear-categoria", crearCategoria);
router.get("/consultar-categoria/:id", consultarCategoria);
router.put("/modificar-categoria/:id", modificarCategoria);
router.delete("/eliminar-categoria/:id", eliminarCategoria);

module.exports = router;