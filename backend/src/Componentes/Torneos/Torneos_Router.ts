import {Router} from 'express';
const router: Router = Router();
import {torneosController} from './Torneos_Controller';

class TorneosRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/listar', torneosController.listar);
    this.router.get('/obtener/:id', torneosController.obtener);
    this.router.put('/modificar', torneosController.modificar);
    this.router.delete('/eliminar', torneosController.eliminar);
    this.router.post('/agregar', torneosController.agregar);
  }
}

const torneosRouter = new TorneosRouter();
export default torneosRouter.router;
