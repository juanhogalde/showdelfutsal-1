import {Router} from 'express';
const router: Router = Router();
import {tablasController} from './Tablas_Controller';

class TablasRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/listar', tablasController.listar);
    this.router.get('/obtener/:id', tablasController.obtener);
    this.router.put('/modificar', tablasController.modificar);
    this.router.delete('/eliminar', tablasController.eliminar);
    this.router.post('/agregar', tablasController.agregar);
    this.router.post('/equiposNoEliminados', tablasController.equiposNoEliminados);
  }
}

const tablasRouter = new TablasRouter();
export default tablasRouter.router;
