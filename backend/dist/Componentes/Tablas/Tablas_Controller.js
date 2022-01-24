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
exports.tablasController = void 0;
const responder_1 = __importDefault(require("../../Middlewares/responder"));
const Tablas_Model_1 = __importDefault(require("./Tablas_Model"));
const Torneos_Controller_1 = require("../Torneos/Torneos_Controller");
const enumeradores_1 = require("../../Config/enumeradores");
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
                let equiposNoEliminados = [];
                const datosBody = req.body;
                if (!datosBody) {
                    responder_1.default.error(req, res, 'No se ingresaron datos');
                }
                else {
                    const campeonato = yield Torneos_Controller_1.torneosController.obtenerTorneo(datosBody.idCampeonato, datosBody.idCategoria);
                    if (campeonato && Object.keys(campeonato.idCategoria).length) {
                        const tablas = yield Tablas_Model_1.default
                            .find({ idCampeonato: datosBody.idCampeonato })
                            .populate('idEquipos');
                        if (tablas.length) {
                            tablas.forEach((tabla) => {
                                if (tabla.tipoZona === enumeradores_1.TipoZona.Eliminatoria) {
                                    if (campeonato.idSubcategoria.length) {
                                        campeonato.idSubcategoria.forEach((item) => {
                                            if (item._id.toString() === datosBody.idSubcategoria) {
                                                if (tabla.idEquipos.length) {
                                                    tabla.idEquipos.forEach((equipo) => {
                                                        if (!equipo.isEliminado) {
                                                            console.log(equipo.nombreEquipo);
                                                            equiposNoEliminados.push(equipo);
                                                        }
                                                    });
                                                }
                                            }
                                        });
                                    }
                                }
                            });
                        }
                        else {
                            res.status(400).send({ message: 'El campeonato ingresado no posee tabla' });
                        }
                        if (equiposNoEliminados.length) {
                            res.status(200).send(equiposNoEliminados);
                        }
                        else {
                            res.status(200).send([]);
                        }
                    }
                    else {
                        res.status(400).send({ message: 'El campeonato ingresado no existe' });
                    }
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    crearTabla(datos) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let tablaPrimera;
                let tablaReserva;
                const pr = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
                    if (datos) {
                        if (datos.tipoZona === enumeradores_1.TipoZona.FaseGrupo) {
                            const nuevaTablaPrimera = new Tablas_Model_1.default();
                            nuevaTablaPrimera.idCampeonato = datos.idCampeonato;
                            nuevaTablaPrimera.zona = datos.zona;
                            nuevaTablaPrimera.tipoZona = datos.tipoZona;
                            nuevaTablaPrimera.division = enumeradores_1.Division.Primera;
                            if (datos.equipos && datos.equipos.length) {
                                try {
                                    for (var _e = __asyncValues(datos.equipos), _f; _f = yield _e.next(), !_f.done;) {
                                        const equipo = _f.value;
                                        if (!nuevaTablaPrimera.idEquipos.includes(equipo)) {
                                            nuevaTablaPrimera.idEquipos.push(equipo);
                                        }
                                    }
                                }
                                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                finally {
                                    try {
                                        if (_f && !_f.done && (_a = _e.return)) yield _a.call(_e);
                                    }
                                    finally { if (e_1) throw e_1.error; }
                                }
                            }
                            if (datos.comentarios && datos.comentarios.length) {
                                try {
                                    for (var _g = __asyncValues(datos.comentarios), _h; _h = yield _g.next(), !_h.done;) {
                                        const comentario = _h.value;
                                        if (!nuevaTablaPrimera.comentarios.includes(comentario)) {
                                            nuevaTablaPrimera.comentarios.push(comentario);
                                        }
                                    }
                                }
                                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                finally {
                                    try {
                                        if (_h && !_h.done && (_b = _g.return)) yield _b.call(_g);
                                    }
                                    finally { if (e_2) throw e_2.error; }
                                }
                            }
                            const operacion = yield nuevaTablaPrimera.save();
                            if (operacion) {
                                tablaPrimera = operacion._doc;
                                const nuevaTablaReserva = new Tablas_Model_1.default();
                                nuevaTablaReserva.idCampeonato = datos.idCampeonato;
                                nuevaTablaReserva.zona = datos.zona;
                                nuevaTablaReserva.tipoZona = datos.tipoZona;
                                nuevaTablaReserva.division = enumeradores_1.Division.Reserva;
                                if (datos.equipos && datos.equipos.length) {
                                    try {
                                        for (var _j = __asyncValues(datos.equipos), _k; _k = yield _j.next(), !_k.done;) {
                                            const equipo = _k.value;
                                            if (!nuevaTablaReserva.idEquipos.includes(equipo)) {
                                                nuevaTablaReserva.idEquipos.push(equipo);
                                            }
                                        }
                                    }
                                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                    finally {
                                        try {
                                            if (_k && !_k.done && (_c = _j.return)) yield _c.call(_j);
                                        }
                                        finally { if (e_3) throw e_3.error; }
                                    }
                                }
                                if (datos.comentarios && datos.comentarios.length) {
                                    try {
                                        for (var _l = __asyncValues(datos.comentarios), _m; _m = yield _l.next(), !_m.done;) {
                                            const comentario = _m.value;
                                            if (!nuevaTablaReserva.comentarios.includes(comentario)) {
                                                nuevaTablaReserva.comentarios.push(comentario);
                                            }
                                        }
                                    }
                                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                                    finally {
                                        try {
                                            if (_m && !_m.done && (_d = _l.return)) yield _d.call(_l);
                                        }
                                        finally { if (e_4) throw e_4.error; }
                                    }
                                }
                                const resultado = yield nuevaTablaReserva.save();
                                if (resultado) {
                                    tablaReserva = resultado._doc;
                                    resolve(tablaPrimera);
                                }
                                else {
                                    reject(new Error('Ocurrio un error al crear la tabla para reserva'));
                                }
                            }
                            else {
                                reject(new Error('Ocurrio un error al agregar la tabla para primera división'));
                            }
                        }
                    }
                    else {
                        reject(new Error('No se ingresaron datos para crear la tabla'));
                    }
                }));
                return pr;
            }
            catch (error) {
                return new Promise((reject) => {
                    reject(error);
                });
            }
        });
    }
}
exports.tablasController = new TablasController();
