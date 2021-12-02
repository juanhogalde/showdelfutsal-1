"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Videos_Controller_1 = require("./Videos_Controller");
class VideosRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/listar', Videos_Controller_1.videosController.listar);
        this.router.get('/obtener/:id', Videos_Controller_1.videosController.obtener);
        this.router.put('/modificar', Videos_Controller_1.videosController.modificar);
        this.router.delete('/eliminar', Videos_Controller_1.videosController.eliminar);
        this.router.post('/agregar', Videos_Controller_1.videosController.agregar);
    }
}
const videosRouter = new VideosRouter();
exports.default = videosRouter.router;
