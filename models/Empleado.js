var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpleadoSchema = new Schema({
    nombre: {type: String, required: true, max: 30},
    apellido: {type: String, required: true, max: 30},
    edad: {type: String, required: true, max:3},
    dni: {type: String, required: true, max:20},
    cargo:{type: String, required: true, max:30},
    sueldo: {type: String, required: true, max:20},
   
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);
