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
exports.equiposController = void 0;
const responder_1 = __importDefault(require("../../Middlewares/responder"));
const Equipos_Model_1 = __importDefault(require("./Equipos_Model"));
class EquiposController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listadoEquipos = yield Equipos_Model_1.default.find();
                responder_1.default.sucess(req, res, listadoEquipos);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    agregar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const equipo = new Equipos_Model_1.default(req.body);
                yield equipo.save();
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
                let idEquipo = req.params.id;
                const equipo = yield Equipos_Model_1.default.find({ _id: idEquipo });
                responder_1.default.sucess(req, res, equipo);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    modificar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const equipoBody = req.body;
                if (equipoBody._id) {
                    Equipos_Model_1.default.findById(equipoBody._id).then((equipo) => __awaiter(this, void 0, void 0, function* () {
                        if (equipo) {
                            equipo.nombreClub = equipoBody.nombreClub;
                            equipo.escudo = equipoBody.escudo;
                            equipo.idCategorias = equipoBody.idCategorias;
                            equipo.idSubcategorias = equipoBody.idSubcategorias;
                            const resultado = yield equipo.save({ new: true });
                            responder_1.default.sucess(req, res, resultado);
                        }
                        else {
                            let error = new Error('Equipo no encontrado');
                            responder_1.default.error(req, res, error);
                        }
                    }));
                }
                else {
                    let error = new Error('Equipo no encontrado');
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
                const equipoEliminada = yield Equipos_Model_1.default.findOneAndDelete({ _id: id }, { new: true });
                responder_1.default.sucess(req, res, equipoEliminada);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
}
exports.equiposController = new EquiposController();
