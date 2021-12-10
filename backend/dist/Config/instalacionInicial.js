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
exports.instalarBD = void 0;
const Usuarios_Model_1 = __importDefault(require("../Componentes/Usuarios/Usuarios_Model"));
const Categorias_Model_1 = __importDefault(require("../Componentes/Categorias/Categorias_Model"));
const Subcategorias_Model_1 = __importDefault(require("../Componentes/Subcategorias/Subcategorias_Model"));
let inicializarCategorias = () => __awaiter(void 0, void 0, void 0, function* () {
    const categoria1 = new Categorias_Model_1.default({
        nombreCategoria: 'Femenino',
        keyCategoria: 2,
        idSubcategorias: [],
    });
    categoria1.save();
    const categoria2 = new Categorias_Model_1.default({
        nombreCategoria: 'Masculino',
        keyCategoria: 1,
        idSubcategorias: [],
    });
    categoria2.save();
});
let inicializarSubCategorias = () => __awaiter(void 0, void 0, void 0, function* () {
    const subCategoria1 = new Subcategorias_Model_1.default({
        nombreSubcategoria: 'Divisional A',
        keySubcategoria: 1,
    });
    subCategoria1.save();
    const subCategoria2 = new Subcategorias_Model_1.default({
        nombreSubcategoria: 'Divisional B',
        keySubcategoria: 2,
    });
    subCategoria2.save();
    const subCategoria3 = new Subcategorias_Model_1.default({
        nombreSubcategoria: 'Divisional C',
        keySubcategoria: 3,
    });
    subCategoria3.save();
    const subCategoria4 = new Subcategorias_Model_1.default({
        nombreSubcategoria: 'Divisional D',
        keySubcategoria: 4,
    });
    subCategoria4.save();
});
let inicializarUsuarios = () => __awaiter(void 0, void 0, void 0, function* () {
    const usuario1 = new Usuarios_Model_1.default({
        nombreUsuario: 'emanuel',
        email: 'emanuelledesma.9427@gmail.com',
        password: 12345,
        keyRol: 2,
        token: '',
    });
    usuario1.save();
    const usuario2 = new Usuarios_Model_1.default({
        nombreUsuario: 'eliana',
        email: 'elianabernaldez@gmail.com',
        password: 12345,
        keyRol: 2,
        token: '',
    });
    usuario2.save();
});
const instalarBD = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield inicializarCategorias();
        yield inicializarSubCategorias();
        yield inicializarUsuarios();
        console.log('instalacion finalizada');
        return 'Instalacion finalizada';
    }
    catch (error) {
        console.log('Ocurrio un error: ' + error);
        return 'Ocurrio un error';
    }
});
exports.instalarBD = instalarBD;