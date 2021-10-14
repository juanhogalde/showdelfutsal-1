import {Router} from 'express';
const router: Router = Router();
import {imagenesController} from './Imagenes_Controller';

class ImagenesRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/listar', imagenesController.listar);
    this.router.get('/obtener/:id', imagenesController.obtener);
    this.router.put('/modificar', imagenesController.modificar);
    this.router.delete('/eliminar', imagenesController.eliminar);
    this.router.post('/agregar', imagenesController.agregar);
  }
}

const imagenesRouter = new ImagenesRouter();
export default imagenesRouter.router;
