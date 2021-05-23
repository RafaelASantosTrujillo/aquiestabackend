const router = require('express').Router();
const {
    consultarEstados,
} = require('../controllers/estados')

router.get("/consultarEstados", consultarEstados);

module.exports = router;