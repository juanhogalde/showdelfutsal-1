"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Torneos_Controller_1 = require("./Torneos_Controller");
class TorneosRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/listar', Torneos_Controller_1.torneosController.listar);
        this.router.get('/obtener/:id', Torneos_Controller_1.torneosController.obtener);
        this.router.put('/modificar', Torneos_Controller_1.torneosController.modificar);
        this.router.put('/cargarSubcategoria', Torneos_Controller_1.torneosController.cargarSubcategoria);
        this.router.put('/cargarZona', Torneos_Controller_1.torneosController.cargarZona);
        this.router.delete('/eliminar', Torneos_Controller_1.torneosController.eliminar);
        this.router.post('/agregar', Torneos_Controller_1.torneosController.agregar);
    }
}
const torneosRouter = new TorneosRouter();
exports.default = torneosRouter.router;
