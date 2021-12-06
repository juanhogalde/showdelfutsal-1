import {Router} from 'express';
import {medidasPublicidadController} from './MedidasPublicidad_Controller';
const router: Router = Router();

class MedidasPublicidadRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/listar', medidasPublicidadController.listar);
    this.router.post('/agregar', medidasPublicidadController.agregar);
  }
}

const medidasPublicidadRouter = new MedidasPublicidadRouter();
export default medidasPublicidadRouter.router;
