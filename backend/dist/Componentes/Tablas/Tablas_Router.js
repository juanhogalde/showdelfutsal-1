"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Tablas_Controller_1 = require("./Tablas_Controller");
class TablasRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/listar', Tablas_Controller_1.tablasController.listar);
        this.router.get('/obtener/:id', Tablas_Controller_1.tablasController.obtener);
        this.router.put('/modificar', Tablas_Controller_1.tablasController.modificar);
        this.router.delete('/eliminar', Tablas_Controller_1.tablasController.eliminar);
        this.router.post('/agregar', Tablas_Controller_1.tablasController.agregar);
    }
}
const tablasRouter = new TablasRouter();
exports.default = tablasRouter.router;
