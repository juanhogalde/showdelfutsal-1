import {Router} from 'express';
const router: Router = Router();
import {zonasController} from './Zonas_Controller';

class ZonasRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.post('/listar', zonasController.listar);
    this.router.get('/obtenerEquiposPorZona/:idZona', zonasController.obtenerEquiposPorZona);

    this.router.post('/agregar', zonasController.agregar);
    this.router.delete('/eliminar', zonasController.eliminar);
    this.router.delete('/eliminarPorSubcategoria', zonasController.eliminarPorSubcategoria);
    this.router.post('/agregarEquipos', zonasController.agregarEquipos);
    this.router.delete('/eliminarEquipo', zonasController.eliminarEquipo);
  }
}

const zonasRouter = new ZonasRouter();
export default zonasRouter.router;
