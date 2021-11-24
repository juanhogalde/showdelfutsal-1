import { Router } from 'express';
// import {comprimirImagen} from 'src/Middlewares/imagemin';
const router: Router = Router();
import { imagenesController } from './Imagenes_Controller';

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
		// this.router.post('/comprimir', imagenesController.cargarImagenPrueba);
	}
}

const imagenesRouter = new ImagenesRouter();
export default imagenesRouter.router;
