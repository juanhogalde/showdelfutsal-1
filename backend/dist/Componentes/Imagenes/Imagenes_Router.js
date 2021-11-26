"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Imagenes_Controller_1 = require("./Imagenes_Controller");
class ImagenesRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/listar', Imagenes_Controller_1.imagenesController.listar);
        this.router.get('/obtener/:id', Imagenes_Controller_1.imagenesController.obtener);
        this.router.put('/modificar', Imagenes_Controller_1.imagenesController.modificar);
        this.router.delete('/eliminar', Imagenes_Controller_1.imagenesController.eliminar);
        this.router.post('/agregar', Imagenes_Controller_1.imagenesController.agregar);
    }
}
const imagenesRouter = new ImagenesRouter();
exports.default = imagenesRouter.router;
