import {Router} from 'express';
// import {comprimirImagen} from 'src/Middlewares/imagemin';
const router: Router = Router();
import {galeriaController} from './Galeria_Controller';

class GaleriasRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/listar', galeriaController.listar);
    this.router.get('/obtener/:id', galeriaController.obtener);
    this.router.put('/modificar', galeriaController.modificar);
    this.router.delete('/eliminar', galeriaController.eliminar);
    this.router.post('/agregar', galeriaController.agregar);
    this.router.post('/agregar/galeriaVideo', galeriaController.agregarGaleriaParaVideo);
    this.router.put('/modificar/galeriaVideo', galeriaController.editarGaleriaParaVideo);
    this.router.get('/listarGaleriaVideos', galeriaController.listarGaleriaVideos);
    // this.router.post('/comprimir', galeriaController.cargarImagenPrueba);
  }
}

const galeriasRouter = new GaleriasRouter();
export default galeriasRouter.router;
