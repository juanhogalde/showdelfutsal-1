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
exports.estadiosController = void 0;
const responder_1 = __importDefault(require("../../Middlewares/responder"));
const Estadios_Model_1 = __importDefault(require("./Estadios_Model"));
class EstadiosController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listadoEstadios = yield Estadios_Model_1.default.find();
                responder_1.default.sucess(req, res, listadoEstadios);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    agregar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const estadio = new Estadios_Model_1.default(req.body);
                yield estadio.save();
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
                let idEstadio = req.params.id;
                const estadio = yield Estadios_Model_1.default.find({ _id: idEstadio });
                responder_1.default.sucess(req, res, estadio);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    modificar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const estadioBody = req.body;
                if (estadioBody._id) {
                    Estadios_Model_1.default.findById(estadioBody._id).then((estadio) => __awaiter(this, void 0, void 0, function* () {
                        if (estadio) {
                            estadio.nombreEstadio = estadioBody.nombreEstadio;
                            estadio.direccion = estadioBody.direccion;
                            const resultado = yield estadio.save({ new: true });
                            responder_1.default.sucess(req, res, resultado);
                        }
                        else {
                            let error = new Error('Estadio no encontrado');
                            responder_1.default.error(req, res, error);
                        }
                    }));
                }
                else {
                    let error = new Error('Estadio no encontrado');
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
                const estadioEliminada = yield Estadios_Model_1.default.findOneAndDelete({ _id: id }, { new: true });
                responder_1.default.sucess(req, res, estadioEliminada);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
}
exports.estadiosController = new EstadiosController();
