"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Categorias_Controller_1 = require("./Categorias_Controller");
class CategoriasRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/listar', Categorias_Controller_1.categoriasController.listar);
        this.router.get('/obtener/:id', Categorias_Controller_1.categoriasController.obtener);
        this.router.put('/modificar', Categorias_Controller_1.categoriasController.modificar);
        this.router.delete('/eliminar', Categorias_Controller_1.categoriasController.eliminar);
        this.router.post('/agregar', Categorias_Controller_1.categoriasController.agregar);
    }
}
const categoriasRouter = new CategoriasRouter();
exports.default = categoriasRouter.router;
