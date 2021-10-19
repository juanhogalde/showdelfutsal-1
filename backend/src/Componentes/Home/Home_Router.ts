import {Router} from 'express';
const router: Router = Router();
import {homesController} from './Home_Controller';

class HomesRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/datosIniciales', homesController.obtenerDatosIniciales);
    this.router.post('/agregar', homesController.agregar);
    /* this.router.get('/vivo', homesController.obtenerVivo);
    this.router.get('/radio', homesController.obtenerRadio);
    this.router.get('/partidos', homesController.obtenerPartidos);
    this.router.get('/destacadas', homesController.obtenerDestacadas);
    this.router.get('/galeriasImagenes', homesController.obtenerGaleriasImagenes);
    this.router.get('/galeriasVideos', homesController.obtenerGaleriasVideo); */
  }
}

const homesRouter = new HomesRouter();
export default homesRouter.router;
