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
exports.zonasController = void 0;
const Zonas_Model_1 = __importDefault(require("./Zonas_Model"));
const responder_1 = __importDefault(require("../../Middlewares/responder"));
class ZonasController {
    agregar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body.idSubcategoria || !req.body.idCategoria || !req.body.idTorneo) {
                    responder_1.default.error(req, res, '', `Faltan datos requeridos ${!req.body.idSubcategoria ? 'idSubcategoria ' : ''}${!req.body.idCategoria ? 'idCategoria ' : ''},${!req.body.idTorneo ? 'id de torneo ' : ''}`, 400);
                }
                else {
                    const nuevaZona = new Zonas_Model_1.default(req.body);
                    nuevaZona
                        .save()
                        .then((resultado) => {
                        responder_1.default.sucess(req, res, {
                            _id: resultado._id,
                            tipoZona: resultado.tipoZona,
                            keyCategoria: resultado.idSubcategoria.keyCategoria,
                            keySubcategoria: resultado.idSubcategoria.keySubcategoria,
                            equipos: resultado.equipos,
                            idSubcategoria: resultado.idSubcategoria._id,
                            idCategoria: resultado.idCategoria,
                            nombreZona: resultado.nombreZona,
                        });
                    })
                        .catch((error) => {
                        console.error(error);
                        responder_1.default.error(req, res, error);
                    });
                }
            }
            catch (error) {
                console.error(error);
                responder_1.default.error(req, res, error);
            }
        });
    }
    crearZona(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pr = new Promise((resolve, reject) => {
                    Zonas_Model_1.default
                        .findOne({ nombreZona: data.nombreZona })
                        .then((zona) => __awaiter(this, void 0, void 0, function* () {
                        var e_1, _a;
                        if (zona) {
                            zona.nombreZona = data.nombreZona;
                            zona.tipoZona = data.tipoZona;
                            zona.idSubcategoria = data.idSubcategoria;
                            zona.idCategoria = data.idCategoria;
                            if (data.equipos && data.equipos.length) {
                                try {
                                    for (var _b = __asyncValues(data.equipos), _c; _c = yield _b.next(), !_c.done;) {
                                        const equipo = _c.value;
                                        if (!zona.equipos.includes(equipo)) {
                                            zona.equipos.push(equipo);
                                        }
                                    }
                                }
                                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                finally {
                                    try {
                                        if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                                    }
                                    finally { if (e_1) throw e_1.error; }
                                }
                            }
                            const resultado = yield zona.save();
                            if (resultado) {
                                resolve(resultado);
                            }
                            else {
                                reject(new Error('Error al insertar la zona'));
                            }
                        }
                        else {
                            const nuevaZona = new Zonas_Model_1.default(data);
                            resolve(nuevaZona.save());
                        }
                    }))
                        .catch((error) => {
                        console.log(error);
                        reject(error);
                    });
                });
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
exports.zonasController = new ZonasController();
