"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Estadios_Controller_1 = require("./Estadios_Controller");
class EstadiosRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/listar', Estadios_Controller_1.estadiosController.listar);
        this.router.get('/obtener/:id', Estadios_Controller_1.estadiosController.obtener);
        this.router.put('/modificar', Estadios_Controller_1.estadiosController.modificar);
        this.router.delete('/eliminar', Estadios_Controller_1.estadiosController.eliminar);
        this.router.post('/agregar', Estadios_Controller_1.estadiosController.agregar);
    }
}
const estadiosRouter = new EstadiosRouter();
exports.default = estadiosRouter.router;
