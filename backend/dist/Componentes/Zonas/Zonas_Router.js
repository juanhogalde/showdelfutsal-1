"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Zonas_Controller_1 = require("./Zonas_Controller");
class ZonasRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.post('/agregar', Zonas_Controller_1.zonasController.agregar);
    }
}
const zonasRouter = new ZonasRouter();
exports.default = zonasRouter.router;
