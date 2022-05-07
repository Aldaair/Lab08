var express = require('express');
var router = express.Router();

var usuario = require('../controllers/UsuarioController.js');

router.get('/', usuario.list);
router.get('/show/:id', usuario.show);
router.get('/create', usuario.create);
router.post('/save', usuario.save);
router.get('/edit/:id', usuario.edit);
router.post('/update/:id', usuario.update);
router.post('/delete/:id', usuario.delete);

module.exports = router;
