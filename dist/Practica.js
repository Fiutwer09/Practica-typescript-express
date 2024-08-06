"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const practica = (0, express_1.default)()
    .use((0, cors_1.default)())
    .use(express_1.default.json())
    .use(express_1.default.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5050;
// EJEMPLO DE QUERYS : ?nombres=adso&apellidos=sena
practica.post('/domicilio', function (request, response) {
    let cc = request.query.cc;
    let nombres = request.query.nombres;
    let apellidos = request.query.apellidos;
    console.log("----", cc, nombres, apellidos); // para probar en la terminal si estan llegando
    return response.status(200).json({
        "Status": "ok registrado con params",
        cc: cc,
        nombres: nombres,
        apellidos: apellidos
    });
});
// JSON 
practica.post('/:id/:peso', function (request, response) {
    let id = request.params.id;
    let peso = request.params.peso;
    let ancho = request.body.ancho;
    let alto = request.body.alto;
    return response.status(200).json({
        "Status": "ok params y registrado con json",
        id: id, peso: peso,
        ancho: ancho,
        alto: alto
    });
});
practica.delete('/delete', function (request, response) {
    let cc = request.query.cc;
    let motivo = request.body.motivo;
    let cabecera = request.header("id");
    console.log("----", cc, motivo, cabecera);
    return response.status(200).json({
        "Status": "ok eliminado json con id",
        cc: cc,
        cabecera: cabecera,
        motivo: motivo
    });
});
practica.put('/recibir_datos', function (request, response) {
    let cc = request.query.cc;
    let apellidos = request.body.apellidos;
    let cabecera = request.header("domicilio");
    return response.status(200).json({
        "Status": "Ok información recibida",
        cc: cc,
        apellidos: apellidos,
        cabecera: cabecera
    });
});
practica.get('/registro-users/:cantidad/:marca', function (request, response) {
    let precio = request.query.precio;
    let cantidad = request.params.cantidad;
    let marca = request.params.marca;
    let cabecera = request.header("domicilio");
    return response.status(200).json({
        "Status": "ok se registro con exito",
        precio: precio,
        cantidad: cantidad,
        marca: marca,
        cabecera: cabecera
    });
});
practica.post('/formulario', function (request, response) {
    let pais = request.params.pais;
});
practica.listen(PORT, () => {
    console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
    throw new Error(error.message);
});
