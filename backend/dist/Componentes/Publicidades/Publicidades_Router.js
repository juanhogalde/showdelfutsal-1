"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Publicidades_Controller_1 = require("./Publicidades_Controller");
class PublicidadesRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/listar', Publicidades_Controller_1.publicidadesController.listar);
        this.router.get('/obtener/:id', Publicidades_Controller_1.publicidadesController.obtener);
        this.router.put('/modificar', Publicidades_Controller_1.publicidadesController.modificar);
        this.router.delete('/eliminar', Publicidades_Controller_1.publicidadesController.eliminar);
        this.router.post('/agregar', Publicidades_Controller_1.publicidadesController.agregar);
    }
}
const publicidadesRouter = new PublicidadesRouter();
exports.default = publicidadesRouter.router;
