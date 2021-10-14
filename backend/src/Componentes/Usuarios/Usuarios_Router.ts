import {Router} from 'express';
const router: Router = Router();
import {usuariosController} from './Usuarios_Controller';

class UsuariosRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/listar', usuariosController.listar);
    this.router.get('/obtener/:id', usuariosController.obtener);
    this.router.put('/modificar', usuariosController.modificar);
    this.router.delete('/eliminar', usuariosController.eliminar);
    this.router.post('/agregar', usuariosController.agregar);
  }
}

const usuariosRouter = new UsuariosRouter();
export default usuariosRouter.router;
