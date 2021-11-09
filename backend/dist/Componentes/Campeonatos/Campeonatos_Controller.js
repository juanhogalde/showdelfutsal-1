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
exports.campeonatosController = void 0;
const responder_1 = __importDefault(require("../../Middlewares/responder"));
const Campeonatos_Model_1 = __importDefault(require("./Campeonatos_Model"));
class CampeonatosController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listadoCampeonatos = yield Campeonatos_Model_1.default.find();
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
                const campeonato = new Campeonatos_Model_1.default(req.body);
                yield campeonato.save();
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
                let idCampeonato = req.params.id;
                const campeonato = yield Campeonatos_Model_1.default.find({ _id: idCampeonato });
                responder_1.default.sucess(req, res, campeonato);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    modificar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const campeonatoBody = req.body;
                if (campeonatoBody._id) {
                    Campeonatos_Model_1.default
                        .findById(campeonatoBody._id)
                        .then((campeonato) => __awaiter(this, void 0, void 0, function* () {
                        if (campeonato) {
                            campeonato.tituloCampeonato = campeonatoBody.tituloCampeonato;
                            campeonato.fechaInicio = campeonatoBody.fechaInicio;
                            campeonato.fechaFin = campeonatoBody.fechaFin;
                            campeonato.idCategoria = campeonatoBody.idCategoria;
                            campeonato.idSubcategoria = campeonatoBody.idSubcategoria;
                            const resultado = yield campeonato.save({ new: true });
                            responder_1.default.sucess(req, res, resultado);
                        }
                        else {
                            let error = new Error('Campeonato no encontrado');
                            responder_1.default.error(req, res, error);
                        }
                    }));
                }
                else {
                    let error = new Error('Campeonato no encontrado');
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
                const campeonatoEliminada = yield Campeonatos_Model_1.default.findOneAndDelete({ _id: id }, { new: true });
                responder_1.default.sucess(req, res, campeonatoEliminada);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    obtenerCampeonato(idCampeonato) {
        return Campeonatos_Model_1.default
            .findById(idCampeonato)
            .populate('idCategoria')
            .populate('idSubcategoria');
    }
}
exports.campeonatosController = new CampeonatosController();
