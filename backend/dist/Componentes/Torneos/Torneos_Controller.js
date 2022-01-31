"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.torneosController = void 0;
const responder_1 = __importDefault(require("../../Middlewares/responder"));
const Torneos_Model_1 = __importDefault(require("./Torneos_Model"));
const Zonas_Controller_1 = require("../Zonas/Zonas_Controller");
const Partidos_Controller_1 = require("../Partidos/Partidos_Controller");
const Tablas_Controller_1 = require("../Tablas/Tablas_Controller");
class TorneosController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listadoCampeonatos = yield Torneos_Model_1.default.find().populate('idSubcategoria');
                responder_1.default.sucess(req, res, listadoCampeonatos);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    agregar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const torneo = new Torneos_Model_1.default(req.body);
                const resultado = yield torneo.save();
                responder_1.default.sucess(req, res, resultado);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    obtener(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let idTorneo = req.params.id;
                const torneo = yield Torneos_Model_1.default.find({ _id: idTorneo });
                responder_1.default.sucess(req, res, torneo);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    modificar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let objetoResponse = {
                    torneoCreado: {},
                    partidoCreado: {},
                    zonaCreada: {},
                    tablaCreada: {},
                    fixtureCreado: {},
                };
                let creacionTabla;
                const torneoBody = req.body;
                if (torneoBody._id) {
                    Torneos_Model_1.default.findById(torneoBody._id).then((torneo) => __awaiter(this, void 0, void 0, function* () {
                        if (torneo) {
                            torneo.tituloTorneo = torneoBody.tituloTorneo;
                            torneo.fechaInicio = torneoBody.fechaInicio;
                            torneo.fechaFin = torneoBody.fechaFin;
                            if (torneoBody.nuevaCategoria) {
                                if (torneo.idCategoria.length) {
                                    if (!torneo.idCategoria.includes(torneoBody.nuevaCategoria)) {
                                        torneo.idCategoria.push(torneoBody.nuevaCategoria);
                                    }
                                }
                                else {
                                    torneo.idCategoria.push(torneoBody.nuevaCategoria);
                                }
                            }
                            if (torneoBody.nuevaSubcategoria) {
                                if (torneo.idSubcategoria.length) {
                                    if (!torneo.idSubcategoria.includes(torneoBody.nuevaSubcategoria)) {
                                        torneo.idSubcategoria.push(torneoBody.nuevaSubcategoria);
                                    }
                                }
                                else {
                                    torneo.idSubcategoria.push(torneoBody.nuevaSubcategoria);
                                }
                            }
                            if (torneoBody.nombreZona || torneoBody.tipoZona) {
                                const datos = {
                                    nombreZona: torneoBody.nombreZona,
                                    tipoZona: torneoBody.tipoZona,
                                    idSubcategoria: torneoBody.nuevaSubcategoria,
                                    idCategoria: torneoBody.nuevaSubcategoria,
                                    equipos: torneoBody.equipos,
                                };
                                const zona = yield Zonas_Controller_1.zonasController.crearZona(datos);
                                if (zona) {
                                    objetoResponse.zonaCreada = zona._doc;
                                    let datosCrearTabla = {
                                        tipoZona: torneoBody.tipoZona,
                                        zona: zona._id,
                                        idCampeonato: torneoBody._id,
                                        equipos: torneoBody.equipos,
                                    };
                                    creacionTabla = yield Tablas_Controller_1.tablasController.crearTabla(datosCrearTabla);
                                    if (creacionTabla) {
                                        objetoResponse.tablaCreada = creacionTabla;
                                    }
                                    else {
                                        let error = new Error('No se puede crear la Tabla');
                                        responder_1.default.error(req, res, error, 'No se puede crear la Tabla', 500);
                                    }
                                }
                                else {
                                    let error = new Error('No se puede crear la zona');
                                    responder_1.default.error(req, res, error, 'No se puede crear la zona', 500);
                                }
                            }
                            if (torneoBody.idEquipoLocal && torneoBody.idEquipoVisitante) {
                                if (torneoBody.idEquipoLocal !== torneoBody.idEquipoVisitante) {
                                    const datos = {
                                        fechaPorJugar: '',
                                        horaEnfrentamiento: '',
                                        fechaEnfrentamiento: '',
                                        idEstadio: '',
                                        idEquipoLocal: '',
                                        idEquipoVisitante: '',
                                        idPartido: '',
                                    };
                                    datos.idEquipoLocal = torneoBody.idEquipoLocal;
                                    datos.idEquipoVisitante = torneoBody.idEquipoVisitante;
                                    if (torneoBody.idPartido) {
                                        datos.idPartido = torneoBody.idPartido;
                                    }
                                    if (torneoBody.fechaEnfrentamiento) {
                                        datos.fechaEnfrentamiento = torneoBody.fechaEnfrentamiento;
                                    }
                                    if (torneoBody.horaEnfrentamiento) {
                                        datos.horaEnfrentamiento = torneoBody.horaEnfrentamiento;
                                    }
                                    if (torneoBody.idEstadio) {
                                        datos.idEstadio = torneoBody.idEstadio;
                                    }
                                    if (torneoBody.fechaPorJugar) {
                                        datos.fechaPorJugar = torneoBody.fechaPorJugar;
                                    }
                                    const partido = yield Partidos_Controller_1.partidosController.guardarEnfrentamiento(datos);
                                    if (partido) {
                                        objetoResponse.partidoCreado = partido;
                                    }
                                }
                                else {
                                    let error = new Error('No se puede crear un enfrentamiento entre un mismo equipo');
                                    responder_1.default.error(req, res, error);
                                }
                            }
                            const op = yield torneo.save();
                            if (op) {
                                responder_1.default.sucess(req, res, op._doc);
                            }
                            else {
                                responder_1.default.error(req, res, '', 'Error al actualizar el torneo', 500);
                            }
                        }
                        else {
                            let error = new Error('Torneo no encontrado');
                            responder_1.default.error(req, res, error);
                        }
                    }));
                }
                else {
                    let error = new Error('Torneo no encontrado');
                    responder_1.default.error(req, res, error);
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    cargarSubcategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const torneoBody = req.body;
                if (torneoBody._id) {
                    Torneos_Model_1.default.findById(torneoBody._id).then((torneo) => __awaiter(this, void 0, void 0, function* () {
                        if (torneo) {
                            if (torneoBody.nuevaCategoria) {
                                if (torneo.idCategoria.length) {
                                    if (!torneo.idCategoria.includes(torneoBody.nuevaCategoria)) {
                                        torneo.idCategoria.push(torneoBody.nuevaCategoria);
                                    }
                                }
                                else {
                                    torneo.idCategoria.push(torneoBody.nuevaCategoria);
                                }
                            }
                            if (torneoBody.nuevaSubcategoria) {
                                if (torneo.idSubcategoria.length) {
                                    if (!torneo.idSubcategoria.includes(torneoBody.nuevaSubcategoria)) {
                                        torneo.idSubcategoria.push(torneoBody.nuevaSubcategoria);
                                    }
                                }
                                else {
                                    torneo.idSubcategoria.push(torneoBody.nuevaSubcategoria);
                                }
                            }
                            const op = yield torneo.save();
                            if (op) {
                                responder_1.default.sucess(req, res, op._doc);
                            }
                            else {
                                responder_1.default.error(req, res, '', 'Error al actualizar el torneo', 500);
                            }
                        }
                        else {
                            responder_1.default.error(req, res, '', 'Torneo no encontrado', 400);
                        }
                    }));
                }
                else {
                    responder_1.default.error(req, res, '', 'Falta Id de torneo', 400);
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    cargarZona(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const torneoBody = req.body;
                if (torneoBody._id) {
                    Torneos_Model_1.default.findById(torneoBody._id).then((torneo) => __awaiter(this, void 0, void 0, function* () {
                        if (torneo) {
                            if (torneoBody.nombreZona || torneoBody.tipoZona) {
                                const datos = {
                                    nombreZona: torneoBody.nombreZona,
                                    tipoZona: torneoBody.tipoZona,
                                    idSubcategoria: torneoBody.nuevaSubcategoria,
                                    idCategoria: torneoBody.nuevaSubcategoria,
                                    equipos: torneoBody.equipos,
                                };
                                const zona = yield Zonas_Controller_1.zonasController.crearZona(datos);
                                if (zona) {
                                    torneo.zona = zona._doc;
                                    let datosCrearTabla = {
                                        tipoZona: torneoBody.tipoZona,
                                        zona: zona._id,
                                        idCampeonato: torneoBody._id,
                                        equipos: torneoBody.equipos,
                                    };
                                    const creacionTabla = yield Tablas_Controller_1.tablasController.crearTabla(datosCrearTabla);
                                    if (creacionTabla) {
                                        torneo.zona = creacionTabla._doc;
                                        responder_1.default.sucess(req, res, torneo);
                                    }
                                    else {
                                        responder_1.default.error(req, res, '', 'No se puede crear la Tabla', 500);
                                    }
                                }
                                else {
                                    responder_1.default.error(req, res, '', 'No se puede crear la zona', 500);
                                }
                            }
                            else {
                                responder_1.default.error(req, res, '', 'faltan datos de zona', 400);
                            }
                            const op = yield torneo.save();
                        }
                        else {
                            responder_1.default.error(req, res, '', 'Torneo no encontrado', 400);
                        }
                    }));
                }
                else {
                    responder_1.default.error(req, res, '', 'Falta Id de torneo', 400);
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.body.id;
                const torneoEliminado = yield Torneos_Model_1.default.findOneAndDelete({ _id: id }, { new: true });
                responder_1.default.sucess(req, res, torneoEliminado);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    obtenerTorneo(idTorneo, idCategoria) {
        return Torneos_Model_1.default
            .findOne({ _id: idTorneo, idCategoria: idCategoria })
            .populate('idCategoria')
            .populate('idSubcategoria');
    }
}
exports.torneosController = new TorneosController();
