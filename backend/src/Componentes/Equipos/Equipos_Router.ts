import {Router} from 'express';
const router: Router = Router();
import {equiposController} from './Equipos_Controller';

class EquiposRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/listar', equiposController.listar);
    this.router.get('/obtener/:id', equiposController.obtener);
    this.router.put('/modificar', equiposController.modificar);
    this.router.delete('/eliminar', equiposController.eliminar);
    this.router.post('/agregar', equiposController.agregar);
  }
}

const equiposRouter = new EquiposRouter();
export default equiposRouter.router;
