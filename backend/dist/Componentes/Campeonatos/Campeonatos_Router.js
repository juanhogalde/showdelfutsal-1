"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Campeonatos_Controller_1 = require("./Campeonatos_Controller");
class CampeonatosRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/listar', Campeonatos_Controller_1.campeonatosController.listar);
        this.router.get('/obtener/:id', Campeonatos_Controller_1.campeonatosController.obtener);
        this.router.put('/modificar', Campeonatos_Controller_1.campeonatosController.modificar);
        this.router.delete('/eliminar', Campeonatos_Controller_1.campeonatosController.eliminar);
        this.router.post('/agregar', Campeonatos_Controller_1.campeonatosController.agregar);
    }
}
const campeonatosRouter = new CampeonatosRouter();
exports.default = campeonatosRouter.router;
