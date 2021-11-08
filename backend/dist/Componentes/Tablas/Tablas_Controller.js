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
exports.tablasController = void 0;
const responder_1 = __importDefault(require("../../Middlewares/responder"));
const Tablas_Model_1 = __importDefault(require("./Tablas_Model"));
class TablasController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listadoTablas = yield Tablas_Model_1.default.find();
                responder_1.default.sucess(req, res, listadoTablas);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    agregar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tabla = new Tablas_Model_1.default(req.body);
                yield tabla.save();
                responder_1.default.sucess(req, res);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    obtener(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let idTabla = req.params.id;
                const tabla = yield Tablas_Model_1.default.find({ _id: idTabla });
                responder_1.default.sucess(req, res, tabla);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    modificar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tablaBody = req.body;
                if (tablaBody._id) {
                    Tablas_Model_1.default.findById(tablaBody._id).then((tabla) => __awaiter(this, void 0, void 0, function* () {
                        if (tabla) {
                            tabla.idCampeonato = tablaBody.idCampeonato;
                            tabla.zona = tablaBody.zona;
                            tabla.puntos = tablaBody.puntos;
                            tabla.comentarios = tablaBody.comentarios;
                            const resultado = yield tabla.save({ new: true });
                            responder_1.default.sucess(req, res, resultado);
                        }
                        else {
                            let error = new Error('Tabla no encontrada');
                            responder_1.default.error(req, res, error);
                        }
                    }));
                }
                else {
                    let error = new Error('Tabla no encontrada');
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
                const tablaEliminada = yield Tablas_Model_1.default.findOneAndDelete({ _id: id }, { new: true });
                responder_1.default.sucess(req, res, tablaEliminada);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    equiposNoEliminados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const datosBody = req.body;
                console.log(datosBody);
                if (!datosBody) {
                    responder_1.default.error(req, res, 'No se ingresaron datos');
                }
                else {
                    const tablaDeCampeonato = yield Tablas_Model_1.default
                        .findOne({ idCampeonato: datosBody.idCampeonato })
                        .populate({
                        path: 'idCampeonato',
                        populate: {
                            path: 'idCategoria',
                            populate: { path: 'idSubcategoria' },
                        },
                    });
                    console.log(tablaDeCampeonato);
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
}
exports.tablasController = new TablasController();
