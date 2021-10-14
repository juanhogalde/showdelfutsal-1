import {Router} from 'express';
const router: Router = Router();
import {etiquetasController} from './Etiquetas_Controller';

class EtiquetasRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/listar', etiquetasController.listar);
    this.router.get('/obtener/:id', etiquetasController.obtener);
    this.router.put('/modificar', etiquetasController.modificar);
    this.router.delete('/eliminar', etiquetasController.eliminar);
    this.router.post('/agregar', etiquetasController.agregar);
  }
}

const etiquetasRouter = new EtiquetasRouter();
export default etiquetasRouter.router;
