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
exports.etiquetasController = void 0;
const responder_1 = __importDefault(require("../../Middlewares/responder"));
const Etiquetas_Model_1 = __importDefault(require("./Etiquetas_Model"));
class EtiquetasController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listadoEtiquetas = yield Etiquetas_Model_1.default.find();
                responder_1.default.sucess(req, res, listadoEtiquetas);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    agregar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const etiqueta = new Etiquetas_Model_1.default(req.body);
                yield etiqueta.save();
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
                let idEtiqueta = req.params.id;
                const etiqueta = yield Etiquetas_Model_1.default.find({ _id: idEtiqueta });
                responder_1.default.sucess(req, res, etiqueta);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    modificar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const etiquetaBody = req.body;
                if (etiquetaBody._id) {
                    Etiquetas_Model_1.default.findById(etiquetaBody._id).then((etiqueta) => __awaiter(this, void 0, void 0, function* () {
                        if (etiqueta) {
                            etiqueta.tag = etiquetaBody.tag;
                            const resultado = yield etiqueta.save({ new: true });
                            responder_1.default.sucess(req, res, resultado);
                        }
                        else {
                            let error = new Error('Etiqueta no encontrada');
                            responder_1.default.error(req, res, error);
                        }
                    }));
                }
                else {
                    let error = new Error('Etiqueta no encontrada');
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
                const etiquetaEliminada = yield Etiquetas_Model_1.default.findOneAndDelete({ _id: id }, { new: true });
                responder_1.default.sucess(req, res, etiquetaEliminada);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
}
exports.etiquetasController = new EtiquetasController();
