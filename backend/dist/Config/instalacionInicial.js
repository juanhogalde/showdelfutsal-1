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
exports.instalarBD = void 0;
const Usuarios_Model_1 = __importDefault(require("../Componentes/Usuarios/Usuarios_Model"));
const Categorias_Model_1 = __importDefault(require("../Componentes/Categorias/Categorias_Model"));
const Subcategorias_Model_1 = __importDefault(require("../Componentes/Subcategorias/Subcategorias_Model"));
const MedidasPublicidad_Model_1 = __importDefault(require("../Componentes/MedidasPublicidad/MedidasPublicidad_Model"));
let inicializarCategorias = () => __awaiter(void 0, void 0, void 0, function* () {
    var e_1, _a;
    const categoriaArray = [
        {
            nombreCategoria: 'Masculino',
            keyCategoria: 1,
            idSubcategorias: [],
        },
        {
            nombreCategoria: 'Femenino',
            keyCategoria: 2,
            idSubcategorias: [],
        },
        {
            nombreCategoria: 'Liga',
            keyCategoria: 3,
            idSubcategorias: [],
        },
        {
            nombreCategoria: 'Otras Competiciones',
            keyCategoria: 4,
            idSubcategorias: [],
        },
    ];
    try {
        for (var categoriaArray_1 = __asyncValues(categoriaArray), categoriaArray_1_1; categoriaArray_1_1 = yield categoriaArray_1.next(), !categoriaArray_1_1.done;) {
            const categoria = categoriaArray_1_1.value;
            Categorias_Model_1.default
                .findOne({ keyCategoria: categoria.keyCategoria })
                .then((categoriaEncontrado) => {
                if (categoriaEncontrado) {
                    categoriaEncontrado.nombreCategoria = categoria.nombreCategoria;
                    categoriaEncontrado.keyCategoria = categoria.keyCategoria;
                    categoriaEncontrado.idSubcategorias = categoria.idSubcategorias;
                    categoriaEncontrado.save();
                }
                else {
                    let categoriaa = new Categorias_Model_1.default(categoria);
                    categoriaa.save();
                }
            });
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (categoriaArray_1_1 && !categoriaArray_1_1.done && (_a = categoriaArray_1.return)) yield _a.call(categoriaArray_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
});
let inicializarSubCategorias = () => __awaiter(void 0, void 0, void 0, function* () {
    var e_2, _b;
    const subCategoriaArray = [
        {
            nombreSubcategoria: 'Divisional A',
            keySubcategoria: 1,
        },
        {
            nombreSubcategoria: 'Divisional B',
            keySubcategoria: 2,
        },
        {
            nombreSubcategoria: 'Divisional C',
            keySubcategoria: 3,
        },
        {
            nombreSubcategoria: 'Divisional D',
            keySubcategoria: 4,
        },
    ];
    try {
        for (var subCategoriaArray_1 = __asyncValues(subCategoriaArray), subCategoriaArray_1_1; subCategoriaArray_1_1 = yield subCategoriaArray_1.next(), !subCategoriaArray_1_1.done;) {
            const subcategoria = subCategoriaArray_1_1.value;
            Subcategorias_Model_1.default
                .findOne({ keySubcategoria: subcategoria.keySubcategoria })
                .then((subcategoriaEncontrado) => {
                if (subcategoriaEncontrado) {
                    subcategoriaEncontrado.nombreSubcategoria = subcategoria.nombreSubcategoria;
                    subcategoriaEncontrado.keySubcategoria = subcategoria.keySubcategoria;
                    subcategoriaEncontrado.save();
                }
                else {
                    let subCategoria = new Subcategorias_Model_1.default(subcategoria);
                    subCategoria.save();
                }
            });
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (subCategoriaArray_1_1 && !subCategoriaArray_1_1.done && (_b = subCategoriaArray_1.return)) yield _b.call(subCategoriaArray_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
});
let inicializarUsuarios = () => __awaiter(void 0, void 0, void 0, function* () {
    var e_3, _c;
    const usuarioArray = [
        {
            nombreUsuario: 'admin',
            email: 'admin@lowa.com',
            password: 12345,
            keyRol: 2,
            token: '',
        },
        {
            nombreUsuario: 'eliana',
            email: 'elianabernaldez@gmail.com',
            password: 12345,
            keyRol: 2,
            token: '',
        },
    ];
    try {
        for (var usuarioArray_1 = __asyncValues(usuarioArray), usuarioArray_1_1; usuarioArray_1_1 = yield usuarioArray_1.next(), !usuarioArray_1_1.done;) {
            const usuario = usuarioArray_1_1.value;
            Usuarios_Model_1.default.findOne({ email: usuario.email }).then((usuarioEncontrado) => {
                if (usuarioEncontrado) {
                    usuarioEncontrado.nombreUsuario = usuario.nombreUsuario;
                    usuarioEncontrado.email = usuario.email;
                    usuarioEncontrado.password = usuario.password;
                    usuarioEncontrado.keyRol = usuario.keyRol;
                    usuarioEncontrado.token = usuario.token;
                    usuarioEncontrado.save();
                }
                else {
                    let user = new Usuarios_Model_1.default(usuario);
                    user.save();
                }
            });
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (usuarioArray_1_1 && !usuarioArray_1_1.done && (_c = usuarioArray_1.return)) yield _c.call(usuarioArray_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
});
let incializarMedidasPublicitarias = () => __awaiter(void 0, void 0, void 0, function* () {
    var e_4, _d;
    const medidaArreglo = [
        {
            ancho: 245,
            alto: 245,
            ubicacion: 'cuadrado',
            direccion: 'Inicio->Partidos->Derecha1',
            keyMedidas: 1,
            disponible: true,
        },
        {
            ancho: 245,
            alto: 245,
            ubicacion: 'cuadrado',
            direccion: 'Inicio->Partidos->Derecha2',
            keyMedidas: 2,
            disponible: true,
        },
        {
            ancho: 1136,
            alto: 199,
            ubicacion: 'horizontal',
            direccion: 'Inicio->Vivo->Abajo',
            keyMedidas: 3,
            disponible: true,
        },
        {
            ancho: 245,
            alto: 245,
            ubicacion: 'cuadrado',
            direccion: 'Desarrollada->Noticia->Derecha1',
            keyMedidas: 4,
            disponible: true,
        },
        {
            ancho: 700,
            alto: 500,
            ubicacion: 'modal',
            direccion: 'Inicio->Modal',
            keyMedidas: 5,
            disponible: true,
        },
        {
            ancho: 1136,
            alto: 199,
            ubicacion: 'horizontal',
            direccion: 'Inicio->Noticia->Abajo',
            keyMedidas: 6,
            disponible: true,
        },
        {
            ancho: 1136,
            alto: 199,
            ubicacion: 'horizontal',
            direccion: 'Desarrollada->Noticia->Abajo',
            keyMedidas: 7,
            disponible: true,
        },
    ];
    try {
        for (var medidaArreglo_1 = __asyncValues(medidaArreglo), medidaArreglo_1_1; medidaArreglo_1_1 = yield medidaArreglo_1.next(), !medidaArreglo_1_1.done;) {
            const medida = medidaArreglo_1_1.value;
            MedidasPublicidad_Model_1.default
                .findOne({ keyMedidas: medida.keyMedidas })
                .then((medidaEncontrada) => {
                if (medidaEncontrada) {
                    medidaEncontrada.ancho = medida.ancho;
                    medidaEncontrada.alto = medida.alto;
                    medidaEncontrada.ubicacion = medida.ubicacion;
                    medidaEncontrada.direccion = medida.direccion;
                    medidaEncontrada.keyMedidas = medida.keyMedidas;
                    if (medidaEncontrada.disponible) {
                        medidaEncontrada.disponible = medida.disponible;
                    }
                    medidaEncontrada.save();
                }
                else {
                    let medidaPublicidad = new MedidasPublicidad_Model_1.default(medida);
                    medidaPublicidad.save();
                }
            });
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (medidaArreglo_1_1 && !medidaArreglo_1_1.done && (_d = medidaArreglo_1.return)) yield _d.call(medidaArreglo_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
});
const instalarBD = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield inicializarCategorias();
        yield inicializarSubCategorias();
        yield inicializarUsuarios();
        yield incializarMedidasPublicitarias();
        console.log('instalacion finalizada');
        return 'Instalacion finalizada';
    }
    catch (error) {
        console.log('Ocurrio un error: ' + error);
        return 'Ocurrio un error';
    }
});
exports.instalarBD = instalarBD;
