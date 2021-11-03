"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Subcategorias_Controller_1 = require("./Subcategorias_Controller");
class SubcategoriasRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/listar', Subcategorias_Controller_1.subcategoriasController.listar);
        this.router.get('/obtener/:id', Subcategorias_Controller_1.subcategoriasController.obtener);
        this.router.put('/modificar', Subcategorias_Controller_1.subcategoriasController.modificar);
        this.router.delete('/eliminar', Subcategorias_Controller_1.subcategoriasController.eliminar);
        this.router.post('/agregar', Subcategorias_Controller_1.subcategoriasController.agregar);
    }
}
const subcategoriasRouter = new SubcategoriasRouter();
exports.default = subcategoriasRouter.router;
