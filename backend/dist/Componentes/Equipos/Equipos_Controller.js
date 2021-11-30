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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
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
                const datosBody = req.body;
                if (!datosBody) {
                    responder_1.default.error(req, res, 'No se ingresaron datos');
                }
                else {
                    let nameFile = '';
                    if (datosBody.escudo) {
                        let pathFile = datosBody.escudo.path.split('\\');
                        nameFile = pathFile[2];
                    }
                    const equipo = new Equipos_Model_1.default();
                    equipo.nombreClub = datosBody.nombreClub;
                    equipo.escudo = `${process.env.DNS_FRONT}/imagenes/${nameFile}`;
                    equipo.idCategorias = datosBody.idCategorias;
                    equipo.idSubcategorias = datosBody.idSubcategorias;
                    const resultado = yield equipo.save();
                    if (resultado) {
                        responder_1.default.sucess(req, res, resultado);
                    }
                    else {
                        responder_1.default.error(req, res, 'Error al agregar el equipo');
                    }
                }
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
                const equipo = yield Equipos_Model_1.default.findById(idEquipo);
                if (equipo) {
                    responder_1.default.sucess(req, res, equipo);
                }
                else {
                    responder_1.default.error(req, res, equipo, 'Equipo no encontrado', 400);
                }
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
                            let nameNewFile = '';
                            let oldFile = '';
                            if (equipo.escudo && equipoBody.escudo) {
                                oldFile = equipo.escudo.split('/');
                                let archivoEncontrado = fs_1.default.readFileSync(path_1.default.join(__dirname, '../../../public/imagenes', oldFile[4]));
                                if (archivoEncontrado) {
                                    fs_1.default.unlinkSync(path_1.default.join(__dirname, '../../../public/imagenes', oldFile[4]));
                                }
                                let pathFile = equipoBody.escudo.path.split('\\');
                                nameNewFile = `${process.env.DNS_FRONT}/imagenes/${pathFile[2]}`;
                                equipo.escudo = nameNewFile;
                            }
                            equipo.nombreClub = equipoBody.nombreClub;
                            if (equipoBody.idCategorias && equipoBody.idCategorias.length) {
                                equipo.idCategorias = equipoBody.idCategorias;
                            }
                            if (equipoBody.idSubcategorias && equipoBody.idSubcategorias.length) {
                                equipo.idSubcategorias = equipoBody.idSubcategorias;
                            }
                            const resultado = yield equipo.save();
                            if (resultado) {
                                responder_1.default.sucess(req, res, resultado);
                            }
                            else {
                                let error = new Error('Error al actualizar el equipo');
                                responder_1.default.error(req, res, error);
                            }
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
                if (!id) {
                    responder_1.default.error(req, res, 'No se ingresaron datos');
                }
                const equipo = yield Equipos_Model_1.default.findById(id);
                if (!equipo) {
                    throw new Error('Equipo no encontrado');
                }
                if (equipo.escudo) {
                    let nameEscudo = equipo.escudo.split('/');
                    let archivoEncontrado = fs_1.default.readFileSync(path_1.default.join(__dirname, '../../../public/imagenes', nameEscudo[4]));
                    if (archivoEncontrado) {
                        fs_1.default.unlinkSync(path_1.default.join(__dirname, '../../../public/imagenes', nameEscudo[4]));
                    }
                }
                const resultado = yield Equipos_Model_1.default.findByIdAndDelete(id);
                if (!resultado) {
                    console.log(resultado);
                    throw new Error('Error al intentar eliminar el equipo');
                }
                responder_1.default.sucess(req, res, resultado, 'Equipo eliminado correctamente');
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
}
exports.equiposController = new EquiposController();
