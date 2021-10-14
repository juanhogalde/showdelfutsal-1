import {Router} from 'express';
const router: Router = Router();
import {categoriasController} from './Categorias_Controller';

class CategoriasRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/listar', categoriasController.listar);
    this.router.get('/obtener/:id', categoriasController.obtener);
    this.router.put('/modificar', categoriasController.modificar);
    this.router.delete('/eliminar', categoriasController.eliminar);
    this.router.post('/agregar', categoriasController.agregar);
  }
}

const categoriasRouter = new CategoriasRouter();
export default categoriasRouter.router;
