"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Equipos_Controller_1 = require("./Equipos_Controller");
class EquiposRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/listar', Equipos_Controller_1.equiposController.listar);
        this.router.get('/obtener/:id', Equipos_Controller_1.equiposController.obtener);
        this.router.put('/modificar', Equipos_Controller_1.equiposController.modificar);
        this.router.delete('/eliminar', Equipos_Controller_1.equiposController.eliminar);
        this.router.post('/agregar', Equipos_Controller_1.equiposController.agregar);
    }
}
const equiposRouter = new EquiposRouter();
exports.default = equiposRouter.router;
