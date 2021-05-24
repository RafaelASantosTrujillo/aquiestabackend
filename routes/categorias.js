const router = require('express').Router();
const {
    consultarCategorias,
} = require('../controllers/categorias')

router.get("/", consultarCategorias);

module.exports = router;