"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Partidos_Controller_1 = require("./Partidos_Controller");
class PartidosRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/listar', Partidos_Controller_1.partidosController.listar);
        this.router.get('/obtener/:id', Partidos_Controller_1.partidosController.obtener);
        this.router.put('/modificar', Partidos_Controller_1.partidosController.modificar);
        this.router.delete('/eliminar', Partidos_Controller_1.partidosController.eliminar);
        this.router.post('/agregar', Partidos_Controller_1.partidosController.agregar);
    }
}
const partidosRouter = new PartidosRouter();
exports.default = partidosRouter.router;
