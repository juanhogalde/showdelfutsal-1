import { Router } from 'express';
const router: Router = Router();
import { publicidadesController } from './Publicidades_Controller';

class PublicidadesRouter {
	router: Router;
	constructor() {
		this.router = Router();
		this.routes();
	}

	routes() {
		this.router.get('/listar', publicidadesController.listar);
		this.router.get('/obtener/:id', publicidadesController.obtener);
		this.router.put('/modificar', publicidadesController.modificar);
		this.router.put('/desactivar', publicidadesController.desactivarPublicidad);
		this.router.delete('/eliminar', publicidadesController.eliminar);
		this.router.post('/agregar', publicidadesController.agregar);
	}
}

const publicidadesRouter = new PublicidadesRouter();
export default publicidadesRouter.router;
