"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MedidasPublicidad_Controller_1 = require("./MedidasPublicidad_Controller");
const router = (0, express_1.Router)();
class MedidasPublicidadRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/listar', MedidasPublicidad_Controller_1.medidasPublicidadController.listar);
        this.router.post('/agregar', MedidasPublicidad_Controller_1.medidasPublicidadController.agregar);
    }
}
const medidasPublicidadRouter = new MedidasPublicidadRouter();
exports.default = medidasPublicidadRouter.router;
