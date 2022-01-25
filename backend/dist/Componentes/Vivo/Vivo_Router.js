"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Vivo_Controller_1 = require("./Vivo_Controller");
class VivoRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/listar', Vivo_Controller_1.VivoVideoController.listar);
        this.router.post('/agregar', Vivo_Controller_1.VivoVideoController.agregarVivo);
        this.router.put('/modificar', Vivo_Controller_1.VivoVideoController.editarVivo);
        this.router.delete('/eliminar', Vivo_Controller_1.VivoVideoController.eliminarVivo);
    }
}
const vivoRouter = new VivoRouter();
exports.default = vivoRouter.router;
