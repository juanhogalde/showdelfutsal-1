import {Router} from 'express';
// import {comprimirImagen} from 'src/Middlewares/imagemin';
const router: Router = Router();
import {videosController} from './Videos_Controller';

class VideosRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/listar', videosController.listar);
    this.router.get('/obtener/:id', videosController.obtener);
    this.router.put('/modificar', videosController.modificar);
    this.router.delete('/eliminar', videosController.eliminar);
    this.router.post('/agregar', videosController.agregar);
    // this.router.post('/comprimir', videosController.cargarImagenPrueba);
  }
}

const videosRouter = new VideosRouter();
export default videosRouter.router;
