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
const Subcategorias_Controller_1 = require("../Subcategorias/Subcategorias_Controller");
const Partidos_Controller_1 = require("../Partidos/Partidos_Controller");
class TorneosController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listadoCampeonatos = yield Torneos_Model_1.default.find();
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
                let resultadoOperacion = {
                    torneo: false,
                    idCategoria: false,
                    idSubcategoria: false,
                    zona: false,
                    enfrentamiento: false,
                };
                const torneoBody = req.body;
                if (torneoBody._id) {
                    Torneos_Model_1.default.findById(torneoBody._id).then((torneo) => __awaiter(this, void 0, void 0, function* () {
                        if (torneo) {
                            torneo.tituloTorneo = torneoBody.tituloTorneo;
                            torneo.fechaInicio = torneoBody.fechaInicio;
                            torneo.fechaFin = torneoBody.fechaFin;
                            if (torneoBody.idCategoria) {
                                torneo.idCategoria.push(torneoBody.idCategoria);
                            }
                            if (torneoBody.idSubcategoria) {
                                const datos = {
                                    idCategoria: torneoBody.idCategoria,
                                    idSubcategoria: torneoBody.idSubcategoria,
                                    keySubcategoria: torneoBody.keySubcategoria,
                                };
                                const subcateg = yield Subcategorias_Controller_1.subcategoriasController.modificarSubcategoriaTorneo(datos);
                                if (subcateg) {
                                    resultadoOperacion.idSubcategoria = true;
                                }
                            }
                            if (torneoBody.nombreZona) {
                                const datos = {
                                    nombreZona: torneoBody.nombreZona,
                                    tipoZona: torneoBody.tipoZona,
                                    idSubcategoria: torneoBody.idSubcategoria,
                                };
                                const zona = yield Zonas_Controller_1.zonasController.crearZona(datos);
                                if (zona) {
                                    resultadoOperacion.zona = true;
                                }
                            }
                            if (torneoBody.idEquipoLocal && torneoBody.idEquipoVisitante) {
                                if (torneoBody.idEquipoLocal !== torneoBody.idEquipoVisitante) {
                                    const datos = {
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
                                    const partido = yield Partidos_Controller_1.partidosController.guardarEnfrentamiento(datos);
                                    if (partido) {
                                        resultadoOperacion.enfrentamiento = true;
                                    }
                                    const resultado = yield torneo.save({ new: true });
                                    if (resultado) {
                                        resultadoOperacion.torneo = true;
                                        responder_1.default.sucess(req, res, resultado);
                                    }
                                    else {
                                        responder_1.default.error(req, res);
                                    }
                                }
                                else {
                                    let error = new Error('No se puede crear un enfrentamiento entre un mismo equipo');
                                    responder_1.default.error(req, res, error);
                                }
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
