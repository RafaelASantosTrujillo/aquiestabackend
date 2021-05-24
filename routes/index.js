var router = require('express').Router();

router.get('/', (req, res) => {
    res.send('welcome to aquiesta api');
});

router.use('/estados', require('./estados'));
router.use('/negocios', require('./negocios'));
router.use('/usuarios', require('./usuarios'));
router.use('/categorias',require('./categorias'));


module.exports = router;