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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.partidosController = void 0;
const responder_1 = __importDefault(require("../../Middlewares/responder"));
const Partidos_Model_1 = __importDefault(require("./Partidos_Model"));
class PartidosController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listadoPartidos = yield Partidos_Model_1.default.find();
                responder_1.default.sucess(req, res, listadoPartidos);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    guardarEnfrentamiento(datos) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pr = new Promise((resolve, reject) => {
                    if (datos.idPartido) {
                        Partidos_Model_1.default
                            .findById(datos.idPartido)
                            .then((partido) => {
                            if (partido) {
                                partido.equipoLocal = datos.idEquipoLocal;
                                partido.equipoVisitante = datos.idEquipoVisitante;
                                partido.fechaPartido = datos.fechaEnfrentamiento ? datos.fechaEnfrentamiento : '';
                                partido.horaPartido = datos.horaEnfrentamiento ? datos.horaEnfrentamiento : '';
                                if (datos.idEstadio) {
                                    partido.idEstadio = datos.idEstadio;
                                }
                                resolve(partido.save());
                            }
                            else {
                                reject(new Error('Enfrentamiento inexistente'));
                            }
                        })
                            .catch((error) => {
                            reject(error);
                        });
                    }
                    else {
                        const nuevoEnfrentamiento = new Partidos_Model_1.default();
                        nuevoEnfrentamiento.equipoLocal = datos.idEquipoLocal;
                        nuevoEnfrentamiento.equipoVisitante = datos.idEquipoVisitante;
                        nuevoEnfrentamiento.fechaPartido = datos.fechaEnfrentamiento
                            ? datos.fechaEnfrentamiento
                            : '';
                        nuevoEnfrentamiento.horaPartido = datos.horaEnfrentamiento
                            ? datos.horaEnfrentamiento
                            : '';
                        if (datos.idEstadio) {
                            nuevoEnfrentamiento.idEstadio = datos.idEstadio;
                        }
                        resolve(nuevoEnfrentamiento.save());
                    }
                });
                return pr;
            }
            catch (error) {
                return new Promise(reject => {
                    reject(error);
                });
            }
        });
    }
    agregar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const partido = new Partidos_Model_1.default(req.body);
                yield partido.save();
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
                let idPartido = req.params.id;
                const partido = yield Partidos_Model_1.default.find({ _id: idPartido });
                responder_1.default.sucess(req, res, partido);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    modificar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const partidoBody = req.body;
                if (partidoBody._id) {
                    Partidos_Model_1.default.findById(partidoBody._id).then((partido) => __awaiter(this, void 0, void 0, function* () {
                        if (partido) {
                            partido.equipoLocal = partidoBody.equipoLocal;
                            partido.equipoVisitante = partidoBody.equipoVisitante;
                            partido.resultadoLocal = partidoBody.resultadoLocal;
                            partido.resultadoVisitante = partidoBody.resultadoVisitante;
                            partido.penalesLocal = partidoBody.penalesLocal;
                            partido.penalesVisitante = partidoBody.penalesVisitante;
                            partido.fechaPartido = partidoBody.fechaPartido;
                            partido.idEstadio = partidoBody.idEstadio;
                            partido.posicionFixture = partidoBody.posicionFixture;
                            partido.comentarios = partidoBody.comentarios;
                            partido.campeonato = partidoBody.campeonato;
                            partido.idTabla = partidoBody.idTabla;
                            const resultado = yield partido.save({ new: true });
                            responder_1.default.sucess(req, res, resultado);
                        }
                        else {
                            let error = new Error('Partido no encontrado');
                            responder_1.default.error(req, res, error);
                        }
                    }));
                }
                else {
                    let error = new Error('Partido no encontrado');
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
                const partidoEliminada = yield Partidos_Model_1.default.findOneAndDelete({ _id: id }, { new: true });
                responder_1.default.sucess(req, res, partidoEliminada);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    obtenerPartidos() {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function* () {
            var dia = 1000 * 60 * 60 * 24;
            var partidosARetornar = [];
            var fechaActual = new Date();
            var fechaActualParse = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDay());
            const partidos = yield Partidos_Model_1.default.find({});
            if (partidos && partidos.length) {
                try {
                    for (var partidos_1 = __asyncValues(partidos), partidos_1_1; partidos_1_1 = yield partidos_1.next(), !partidos_1_1.done;) {
                        const partido = partidos_1_1.value;
                        let fechaPartido = new Date(partido.fechaPartido);
                        let fechaPartidoParse = new Date(fechaPartido.getFullYear(), fechaPartido.getMonth(), fechaPartido.getDay());
                        let diferenciaEntreFechasAnterior = (fechaPartidoParse - fechaActualParse) / dia;
                        if (diferenciaEntreFechasAnterior > 0 && diferenciaEntreFechasAnterior <= 30) {
                            partidosARetornar.push(partido);
                        }
                        let diferenciaEntreFechasPosterior = (fechaActualParse - fechaPartidoParse) / dia;
                        if (diferenciaEntreFechasPosterior >= 90) {
                            partidosARetornar.push(partido);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (partidos_1_1 && !partidos_1_1.done && (_a = partidos_1.return)) yield _a.call(partidos_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return partidosARetornar;
        });
    }
}
exports.partidosController = new PartidosController();
