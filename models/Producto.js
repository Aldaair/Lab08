var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = new Schema({
    nombre: {type: String, required: true, max: 50},
    codigo: {type: String, required: true, max: 20},
    stock: {type: String, required: true, max: 20},
    precio: {type: String, required: true, max: 20},
});
module.exports = mongoose.model('Producto', ProductoSchema);
