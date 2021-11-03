"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Etiquetas_Controller_1 = require("./Etiquetas_Controller");
class EtiquetasRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/listar', Etiquetas_Controller_1.etiquetasController.listar);
        this.router.get('/obtener/:id', Etiquetas_Controller_1.etiquetasController.obtener);
        this.router.put('/modificar', Etiquetas_Controller_1.etiquetasController.modificar);
        this.router.delete('/eliminar', Etiquetas_Controller_1.etiquetasController.eliminar);
        this.router.post('/agregar', Etiquetas_Controller_1.etiquetasController.agregar);
    }
}
const etiquetasRouter = new EtiquetasRouter();
exports.default = etiquetasRouter.router;
