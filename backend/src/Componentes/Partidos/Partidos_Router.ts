import {Router} from 'express';
const router: Router = Router();
import {partidosController} from './Partidos_Controller';

class PartidosRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/listar', partidosController.listar);
    this.router.get('/obtener/:id', partidosController.obtener);
    this.router.put('/modificar', partidosController.modificar);
    this.router.delete('/eliminar', partidosController.eliminar);
    this.router.post('/agregar', partidosController.agregar);
  }
}

const partidosRouter = new PartidosRouter();
export default partidosRouter.router;
