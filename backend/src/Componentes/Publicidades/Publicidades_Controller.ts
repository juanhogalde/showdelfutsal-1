import { Request, Response } from 'express';
import responder from '../../Middlewares/responder';
import modeloPublicidades from './Publicidades_Model';
import IPublicidades from './Publicidades_Interface';

class PublicidadesController {
	public async listar(req: Request, res: Response) {
		try {
			const listadoPublicidades = await modeloPublicidades.find();
			responder.sucess(req, res, listadoPublicidades);
		} catch (error) {
			responder.error(req, res, error);
		}
	}

	public async agregar(req: Request, res: Response) {
		try {
			const publicidad: IPublicidades = new modeloPublicidades(req.body);
			await publicidad.save();
			responder.sucess(req, res);
		} catch (error) {
			responder.error(req, res, error);
		}
	}

	public async obtener(req: Request, res: Response) {
		try {
			let idPublicidad = req.params.id;
			const publicidad = await modeloPublicidades.find({ _id: idPublicidad });
			responder.sucess(req, res, publicidad);
		} catch (error) {
			responder.error(req, res, error);
		}
	}

	public async modificar(req: Request, res: Response) {
		try {
			const publicidadBody = req.body;
			if (publicidadBody._id) {
				modeloPublicidades
					.findById(publicidadBody._id)
					.then(async (publicidad: any) => {
						if (publicidad) {
							publicidad.nombrePublicidad = publicidadBody.nombrePublicidad;
							publicidad.ancho = publicidadBody.ancho;
							publicidad.alto = publicidadBody.alto;
							publicidad.isActiva = publicidadBody.isActiva;
							publicidad.ubicacion = publicidadBody.ubicacion;
							publicidad.direccion = publicidadBody.direccion;

							const resultado = await publicidad.save({ new: true });
							responder.sucess(req, res, resultado);
						} else {
							let error = new Error('Publicidad no encontrada');
							responder.error(req, res, error);
						}
					});
			} else {
				let error = new Error('Publicidad no encontrada');
				responder.error(req, res, error);
			}
		} catch (error) {
			responder.error(req, res, error);
		}
	}

	public async eliminar(req: Request, res: Response) {
		try {
			let id = req.body.id;
			const publicidadEliminada = await modeloPublicidades.findOneAndDelete(
				{ _id: id },
				{ new: true }
			);
			responder.sucess(req, res, publicidadEliminada);
		} catch (error) {
			responder.error(req, res, error);
		}
	}

	public async desactivarPublicidad(req: Request, res: Response) {
		try {
			const datosBody = req.body;
			if (!datosBody) {
				responder.error(req, res, 'No se ingresaron datos');
			} else {
				const publicidad = await modeloPublicidades.findById(
					datosBody.idPublicidad
				);
				if (publicidad) {
					if (publicidad.ancho <= 245 && publicidad.alto <= 245) {
						// Direccion de la imagen por defecto
					} else if (publicidad.ancho <= 1136 && publicidad.alto <= 99) {
						// Direccion de imagen por defecto
					}
				} else {
					responder.error(req, res, 'La publicidad ingresada no existe');
				}
			}
		} catch (error) {
			console.log(error);
			responder.error(req, res);
		}
	}
}
export const publicidadesController = new PublicidadesController();
