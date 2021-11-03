"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Home_Controller_1 = require("./Home_Controller");
class HomesRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/datosIniciales', Home_Controller_1.homesController.obtenerDatosIniciales);
        this.router.post('/agregar', Home_Controller_1.homesController.agregar);
    }
}
const homesRouter = new HomesRouter();
exports.default = homesRouter.router;
