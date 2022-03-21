import {Router} from 'express';
const router: Router = Router();
import {noticiasController} from './Noticias_Controller';

class NoticiasRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/listar', noticiasController.listar);
    this.router.get('/obtener/:id', noticiasController.obtener);
    this.router.get('/obtenerPorSubCategoria/:id', noticiasController.obtenerPorSubcategoria);
    this.router.put('/modificar', noticiasController.modificar);
    this.router.put('/destacar', noticiasController.destacarNoticia);
    this.router.put('/desestacar', noticiasController.desestacarNoticia);
    this.router.delete('/eliminar', noticiasController.eliminar);
    this.router.post('/agregar', noticiasController.agregar);
    this.router.post('/filtrar', noticiasController.filtrar);
    this.router.post('/listarDestacadas', noticiasController.listardestacadas);
    this.router.post('/buscar', noticiasController.buscar);
  }
}

const noticiasRouter = new NoticiasRouter();
export default noticiasRouter.router;
