"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Galeria_Controller_1 = require("./Galeria_Controller");
class GaleriasRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/listar', Galeria_Controller_1.galeriaController.listar);
        this.router.get('/obtener/:id', Galeria_Controller_1.galeriaController.obtener);
        this.router.put('/modificar', Galeria_Controller_1.galeriaController.modificar);
        this.router.delete('/eliminar', Galeria_Controller_1.galeriaController.eliminar);
        this.router.post('/agregar', Galeria_Controller_1.galeriaController.agregar);
    }
}
const galeriasRouter = new GaleriasRouter();
exports.default = galeriasRouter.router;
