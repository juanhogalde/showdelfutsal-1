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
exports.publicidadesController = void 0;
const responder_1 = __importDefault(require("../../Middlewares/responder"));
const Publicidades_Model_1 = __importDefault(require("./Publicidades_Model"));
class PublicidadesController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listadoPublicidades = yield Publicidades_Model_1.default.find();
                responder_1.default.sucess(req, res, listadoPublicidades);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    agregar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const publicidad = new Publicidades_Model_1.default(req.body);
                yield publicidad.save();
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
                let idPublicidad = req.params.id;
                const publicidad = yield Publicidades_Model_1.default.find({ _id: idPublicidad });
                responder_1.default.sucess(req, res, publicidad);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    modificar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const publicidadBody = req.body;
                if (publicidadBody._id) {
                    Publicidades_Model_1.default.findById(publicidadBody._id).then((publicidad) => __awaiter(this, void 0, void 0, function* () {
                        if (publicidad) {
                            publicidad.nombrePublicidad = publicidadBody.nombrePublicidad;
                            publicidad.ancho = publicidadBody.ancho;
                            publicidad.alto = publicidadBody.alto;
                            publicidad.isActiva = publicidadBody.isActiva;
                            publicidad.ubicacion = publicidadBody.ubicacion;
                            publicidad.direccion = publicidadBody.direccion;
                            const resultado = yield publicidad.save({ new: true });
                            responder_1.default.sucess(req, res, resultado);
                        }
                        else {
                            let error = new Error('Publicidad no encontrada');
                            responder_1.default.error(req, res, error);
                        }
                    }));
                }
                else {
                    let error = new Error('Publicidad no encontrada');
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
                const publicidadEliminada = yield Publicidades_Model_1.default.findOneAndDelete({ _id: id }, { new: true });
                responder_1.default.sucess(req, res, publicidadEliminada);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
}
exports.publicidadesController = new PublicidadesController();
