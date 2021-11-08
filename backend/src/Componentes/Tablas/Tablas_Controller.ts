import { Request, Response } from 'express';
import responder from '../../Middlewares/responder';
import modeloTablas from './Tablas_Model';
import ITablas from './Tablas_Interface';
import ICampeonatos from '../Campeonatos/Campeonatos_Interface';
import { campeonatosController } from '../Campeonatos/Campeonatos_Controller';
import { TipoZona } from '../../Config/enumeradores';

class TablasController {
	public async listar(req: Request, res: Response) {
		try {
			const listadoTablas = await modeloTablas.find();
			responder.sucess(req, res, listadoTablas);
		} catch (error) {
			responder.error(req, res, error);
		}
	}

	public async agregar(req: Request, res: Response) {
		try {
			const tabla: ITablas = new modeloTablas(req.body);
			await tabla.save();
			responder.sucess(req, res);
		} catch (error) {
			responder.error(req, res, error);
		}
	}

	public async obtener(req: Request, res: Response) {
		try {
			let idTabla = req.params.id;
			const tabla = await modeloTablas.find({ _id: idTabla });
			responder.sucess(req, res, tabla);
		} catch (error) {
			responder.error(req, res, error);
		}
	}

	public async modificar(req: Request, res: Response) {
		try {
			const tablaBody = req.body;
			if (tablaBody._id) {
				modeloTablas.findById(tablaBody._id).then(async (tabla: any) => {
					if (tabla) {
						// tabla.equipo1 = tablaBody.equipo1;
						// tabla.equipo2 = tablaBody.equipo2;
						// tabla.isEquipo2Eliminado = tablaBody.isEquipo2Eliminado;
						tabla.idCampeonato = tablaBody.idCampeonato;
						tabla.zona = tablaBody.zona;
						// tabla.pGanados = tablaBody.pGanados;
						// tabla.pEmpatados = tablaBody.pEmpatados;
						// tabla.pPerdidos = tablaBody.pPerdidos;
						// tabla.pJugados = tablaBody.pJugados;
						// tabla.golesAFavor = tablaBody.golesAFavor;
						// tabla.golesEnContra = tablaBody.golesEnContra;
						// tabla.difGoles = tablaBody.difGoles;
						tabla.puntos = tablaBody.puntos;
						// tabla.posicionEnTabla = tablaBody.posicionEnTabla;
						tabla.comentarios = tablaBody.comentarios;

						const resultado = await tabla.save({ new: true });
						responder.sucess(req, res, resultado);
					} else {
						let error = new Error('Tabla no encontrada');
						responder.error(req, res, error);
					}
				});
			} else {
				let error = new Error('Tabla no encontrada');
				responder.error(req, res, error);
			}
		} catch (error) {
			responder.error(req, res, error);
		}
	}

	public async eliminar(req: Request, res: Response) {
		try {
			let id = req.body.id;
			const tablaEliminada = await modeloTablas.findOneAndDelete(
				{ _id: id },
				{ new: true }
			);
			responder.sucess(req, res, tablaEliminada);
		} catch (error) {
			responder.error(req, res, error);
		}
	}

	public async equiposNoEliminados(req: Request, res: Response) {
		try {
			let equiposNoEliminados: any = [];
			const datosBody = req.body;
			// console.log(datosBody);
			if (!datosBody) {
				responder.error(req, res, 'No se ingresaron datos');
			} else {
				const campeonato = await campeonatosController.obtenerCampeonato(
					datosBody.idCampeonato,
					datosBody.idCategoria
				);
				console.log(campeonato);

				if (campeonato && Object.keys(campeonato.idCategoria).length) {
					// Traer la tabla de ese campeonato
					const tablas = await modeloTablas
						.find({ idCampeonato: datosBody.idCampeonato })
						.populate('idEquipos');
					if (tablas.length) {
						tablas.forEach((tabla: ITablas) => {
							if (tabla.tipoZona === TipoZona.Eliminatoria) {
								if (campeonato.idSubcategoria.length) {
									campeonato.idSubcategoria.forEach((item: any) => {
										if (item._id.toString() === datosBody.idSubcategoria) {
											if (tabla.idEquipos.length) {
												tabla.idEquipos.forEach((equipo: any) => {
													if (!equipo.isEliminado) {
														console.log(equipo.nombreEquipo);
														equiposNoEliminados.push(equipo);
													}
												});
											}
										}
									});
								}
							}
						});
					} else {
						res
							.status(400)
							.send({ message: 'El campeonato ingresado no posee tabla' });
					}

					if (equiposNoEliminados.length) {
						res.status(200).send(equiposNoEliminados);
					} else {
						res.status(200).send([]);
					}
				} else {
					res
						.status(400)
						.send({ message: 'El campeonato ingresado no existe' });
				}
			}
		} catch (error) {
			responder.error(req, res, error);
		}
	}
}

export const tablasController = new TablasController();
