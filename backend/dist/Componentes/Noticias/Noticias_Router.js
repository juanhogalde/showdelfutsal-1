"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Noticias_Controller_1 = require("./Noticias_Controller");
class NoticiasRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/listar', Noticias_Controller_1.noticiasController.listar);
        this.router.get('/obtener/:id', Noticias_Controller_1.noticiasController.obtener);
        this.router.put('/modificar', Noticias_Controller_1.noticiasController.modificar);
        this.router.put('/destacar', Noticias_Controller_1.noticiasController.destacarNoticia);
        this.router.put('/desestacar', Noticias_Controller_1.noticiasController.desestacarNoticia);
        this.router.delete('/eliminar', Noticias_Controller_1.noticiasController.eliminar);
        this.router.post('/agregar', Noticias_Controller_1.noticiasController.agregar);
        this.router.post('/filtrar', Noticias_Controller_1.noticiasController.filtrar);
        this.router.post('/listarDestacadas', Noticias_Controller_1.noticiasController.listardestacadas);
        this.router.post('/buscar', Noticias_Controller_1.noticiasController.buscar);
    }
}
const noticiasRouter = new NoticiasRouter();
exports.default = noticiasRouter.router;
