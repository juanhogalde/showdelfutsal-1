"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Usuarios_Controller_1 = require("./Usuarios_Controller");
class UsuariosRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/listar', Usuarios_Controller_1.usuariosController.listar);
        this.router.post('/login', Usuarios_Controller_1.usuariosController.login);
        this.router.put('/modificar', Usuarios_Controller_1.usuariosController.modificar);
        this.router.delete('/eliminar', Usuarios_Controller_1.usuariosController.eliminar);
        this.router.post('/agregar', Usuarios_Controller_1.usuariosController.agregar);
        this.router.post('/recuperarPass', Usuarios_Controller_1.usuariosController.recuperarPassword);
        this.router.post('/modificarPass', Usuarios_Controller_1.usuariosController.modificarPassword);
    }
}
const usuariosRouter = new UsuariosRouter();
exports.default = usuariosRouter.router;
