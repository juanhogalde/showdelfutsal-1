import {Router} from 'express';
const router: Router = Router();
import {subcategoriasController} from './Subcategorias_Controller';

class SubcategoriasRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/listar', subcategoriasController.listar);
    this.router.get('/obtener/:id', subcategoriasController.obtener);
    this.router.put('/modificar', subcategoriasController.modificar);
    this.router.delete('/eliminar', subcategoriasController.eliminar);
    this.router.post('/agregar', subcategoriasController.agregar);
  }
}

const subcategoriasRouter = new SubcategoriasRouter();
export default subcategoriasRouter.router;
