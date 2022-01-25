import {Router} from 'express';
const router: Router = Router();
import {VivoVideoController} from './Vivo_Controller';
class VivoRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }
  routes() {
    this.router.get('/listar', VivoVideoController.listar);
    this.router.post('/agregar', VivoVideoController.agregarVivo);
    this.router.put('/modificar', VivoVideoController.editarVivo);
    this.router.delete('/eliminar', VivoVideoController.eliminarVivo);
  }
}
const vivoRouter = new VivoRouter();
export default vivoRouter.router;
