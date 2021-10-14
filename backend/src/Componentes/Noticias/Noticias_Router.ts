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
    this.router.put('/modificar', noticiasController.modificar);
    this.router.delete('/eliminar', noticiasController.eliminar);
    this.router.post('/agregar', noticiasController.agregar);
  }
}
/*

/* router.post('/crear', CrearNoticias);
router.put('/modificar', ModificarNoticias);
router.delete('/eliminar', EliminarNoticias); */
const noticiasRouter = new NoticiasRouter();
export default noticiasRouter.router;
