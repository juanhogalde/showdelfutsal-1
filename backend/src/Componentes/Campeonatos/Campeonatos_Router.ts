import {Router} from 'express';
const router: Router = Router();
import {campeonatosController} from './Campeonatos_Controller';

class CampeonatosRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/listar', campeonatosController.listar);
    this.router.get('/obtener/:id', campeonatosController.obtener);
    this.router.put('/modificar', campeonatosController.modificar);
    this.router.delete('/eliminar', campeonatosController.eliminar);
    this.router.post('/agregar', campeonatosController.agregar);
  }
}

const campeonatosRouter = new CampeonatosRouter();
export default campeonatosRouter.router;
