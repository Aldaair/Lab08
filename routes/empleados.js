var express = require('express');
var router = express.Router();

var empleado = require('../controllers/EmpleadoController.js');

router.get("/", empleado.list);
router.get('/create', empleado.create);
router.post('/save', empleado.save);
router.get('/show/:id', empleado.show);
router.get('/edit/:id', empleado.edit);
router.post('/update/:id', empleado.update);
router.post('/delete/:id', empleado.delete);

module.exports = router;