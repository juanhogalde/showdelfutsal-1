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
exports.VivoVideoController = void 0;
const responder_1 = __importDefault(require("../../Middlewares/responder"));
const Vivo_Model_1 = __importDefault(require("./Vivo_Model"));
class VivoController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let vivo = yield Vivo_Model_1.default.find();
                if (vivo) {
                    responder_1.default.sucess(req, res, vivo);
                }
                else {
                    responder_1.default.sucess(req, res, [], 'No hay vivo para mostrar');
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    agregarVivo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body) {
                    throw new Error('No se ingresaron datos');
                }
                else {
                    let fecha = new Date();
                    const vivo = new Vivo_Model_1.default(Object.assign(Object.assign({}, req.body), { fechaCreacion: fecha }));
                    yield vivo.save();
                    responder_1.default.sucess(req, res, vivo);
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    editarVivo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body._id) {
                    throw new Error('No se encontro id');
                }
                else {
                    const vivoBody = req.body;
                    Vivo_Model_1.default.findById(req.body._id).then((vivo) => __awaiter(this, void 0, void 0, function* () {
                        if (vivo) {
                            vivo.nombreVivo = vivoBody.nombreVivo;
                            vivo.urlVivo = vivoBody.urlVivo;
                            vivo.urlChat = vivoBody.urlChat;
                            vivo.isActivo = vivoBody.isActivo;
                            vivo.fechaCreacion = vivoBody.fechaCreacion;
                            vivo.fechaModificacion = new Date();
                            const resultado = yield vivo.save({ new: true });
                            responder_1.default.sucess(req, res, resultado);
                        }
                        else {
                            let error = new Error('Publicidad no encontrada');
                            responder_1.default.error(req, res, error);
                        }
                    }));
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    eliminarVivo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req.body._id) {
                    const id = req.body._id;
                    const vivoEliminado = yield Vivo_Model_1.default.findOneAndDelete({ _id: id }, { new: true });
                    responder_1.default.sucess(req, res, vivoEliminado);
                }
                else {
                    throw new Error('No se encontro id');
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
}
exports.VivoVideoController = new VivoController();
