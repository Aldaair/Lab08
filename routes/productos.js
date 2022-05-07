var express = require('express');
var router = express.Router();

var producto = require('../controllers/ProductoController.js');

router.get("/", producto.list);
router.get('/create', producto.create);
router.post('/save', producto.save);
router.get('/show/:id', producto.show);
router.get('/edit/:id', producto.edit);
router.post('/update/:id', producto.update);
router.post('/delete/:id', producto.delete);

module.exports = router;