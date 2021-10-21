import {Router} from 'express';
const router: Router = Router();
import {usuariosController} from './Usuarios_Controller';
import {validarToken} from '../../Middlewares/validarToken';

class UsuariosRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/listar', usuariosController.listar);
    this.router.post('/login', usuariosController.login);
    this.router.put('/modificar', usuariosController.modificar);
    this.router.delete('/eliminar', usuariosController.eliminar);
    this.router.post('/agregar', usuariosController.agregar);
    this.router.post('/recuperarPass', usuariosController.recuperarPassword);
    // this.router.post('/pruebaToken', validarToken, usuariosController.test);
  }
}

const usuariosRouter = new UsuariosRouter();
export default usuariosRouter.router;
