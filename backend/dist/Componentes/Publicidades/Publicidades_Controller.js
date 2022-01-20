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
                Publicidades_Model_1.default
                    .find({})
                    .populate('idImagen')
                    .populate('idMedidas')
                    .then((publicidades) => {
                    responder_1.default.sucess(req, res, publicidades);
                });
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    agregar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var fechaActual = new Date();
                const publicidad = new Publicidades_Model_1.default(Object.assign(Object.assign({}, req.body), { fecha: fechaActual }));
                publicidad.populate('idImagen');
                publicidad.populate('idMedidas');
                yield publicidad.save();
                responder_1.default.sucess(req, res, publicidad);
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
                            publicidad.isActiva = publicidadBody.isActiva;
                            publicidad.idMedidas = publicidadBody.idMedidas;
                            publicidad.idImagen = publicidadBody.idImagen;
                            const resultado = yield publicidad.save({ new: true });
                            responder_1.default.sucess(req, res, Object.assign(Object.assign({}, publicidadBody), { _id: resultado._id }));
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
    desactivarPublicidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const datosBody = req.body;
                if (!datosBody) {
                    responder_1.default.error(req, res, 'No se ingresaron datos');
                }
                else {
                    const publicidad = yield Publicidades_Model_1.default.findById(datosBody.idPublicidad);
                    if (publicidad) {
                        let DNS = process.env.DNS_FRONT;
                        if (publicidad.ancho <= 245 && publicidad.alto <= 245) {
                            publicidad.direccion = `${DNS}/archivos/publicidadCorta.jpg`;
                        }
                        else if (publicidad.ancho <= 1136 && publicidad.alto <= 99) {
                            publicidad.direccion = `${DNS}/archivos/publicidadLarga.jpg`;
                        }
                        const resultado = yield publicidad.save();
                        if (resultado) {
                            responder_1.default.sucess(req, res, resultado);
                        }
                        else {
                            responder_1.default.error(req, res, 'Error al desactivar la publicidad');
                        }
                    }
                    else {
                        responder_1.default.error(req, res, 'La publicidad ingresada no existe');
                    }
                }
            }
            catch (error) {
                console.log(error);
                responder_1.default.error(req, res);
            }
        });
    }
}
exports.publicidadesController = new PublicidadesController();
