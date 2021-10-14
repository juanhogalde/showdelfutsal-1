import {Router} from 'express';
const router: Router = Router();
import {estadiosController} from './Estadios_Controller';

class EstadiosRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/listar', estadiosController.listar);
    this.router.get('/obtener/:id', estadiosController.obtener);
    this.router.put('/modificar', estadiosController.modificar);
    this.router.delete('/eliminar', estadiosController.eliminar);
    this.router.post('/agregar', estadiosController.agregar);
  }
}

const estadiosRouter = new EstadiosRouter();
export default estadiosRouter.router;
