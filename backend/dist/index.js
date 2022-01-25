"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const express_form_data_1 = __importDefault(require("express-form-data"));
const baseDeDatos_1 = require("./Config/baseDeDatos");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const Noticias_Router_1 = __importDefault(require("./Componentes/Noticias/Noticias_Router"));
const Torneos_Router_1 = __importDefault(require("./Componentes/Torneos/Torneos_Router"));
const Equipos_Router_1 = __importDefault(require("./Componentes/Equipos/Equipos_Router"));
const Categorias_Router_1 = __importDefault(require("./Componentes/Categorias/Categorias_Router"));
const Partidos_Router_1 = __importDefault(require("./Componentes/Partidos/Partidos_Router"));
const Subcategorias_Router_1 = __importDefault(require("./Componentes/Subcategorias/Subcategorias_Router"));
const Publicidades_Router_1 = __importDefault(require("./Componentes/Publicidades/Publicidades_Router"));
const Usuarios_Router_1 = __importDefault(require("./Componentes/Usuarios/Usuarios_Router"));
const Estadios_Router_1 = __importDefault(require("./Componentes/Estadios/Estadios_Router"));
const Home_Router_1 = __importDefault(require("./Componentes/Home/Home_Router"));
const Imagenes_Router_1 = __importDefault(require("./Componentes/Imagenes/Imagenes_Router"));
const Videos_Router_1 = __importDefault(require("./Componentes/Videos/Videos_Router"));
const Galeria_Router_1 = __importDefault(require("./Componentes/Galeria/Galeria_Router"));
const Tablas_Router_1 = __importDefault(require("./Componentes/Tablas/Tablas_Router"));
const responder_1 = __importDefault(require("./Middlewares/responder"));
const manejadorErrores_1 = __importDefault(require("./Middlewares/manejadorErrores"));
const importarDatos_1 = require("./Config/importarDatos");
const instalacionInicial_1 = require("./Config/instalacionInicial");
const MedidasPublicidad_Router_1 = __importDefault(require("./Componentes/MedidasPublicidad/MedidasPublicidad_Router"));
const Vivo_Router_1 = __importDefault(require("./Componentes/Vivo/Vivo_Router"));
process.env.NODE_ENV = process.env.NODE_ENV || 'desarrollo';
const deploy = 'v0.0.13';
class Server {
    constructor() {
        this._cadenaDeConexion = process.env.DATABASE || 'mongodb://localhost:29017/Desarrollo';
        this.options = {
            uploadDir: 'public/imagenes/',
            autoClean: false,
        };
        this.app = (0, express_1.default)();
        this.conectarBd();
        this.configurar();
        this.routear();
        this.app.use(manejadorErrores_1.default);
    }
    conectarBd() {
        this.bd = new baseDeDatos_1.baseMongo(this._cadenaDeConexion);
    }
    configurar() {
        this.app.set('port', process.env.PORT || 4000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_form_data_1.default.parse(this.options));
        this.app.use(express_form_data_1.default.union());
        this.app.use(express_form_data_1.default.stream());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.static('public'));
    }
    routear() {
        this.app.use('/torneos', Torneos_Router_1.default);
        this.app.use('/categorias', Categorias_Router_1.default);
        this.app.use('/estadios', Estadios_Router_1.default);
        this.app.use('/equipos', Equipos_Router_1.default);
        this.app.use('/home', Home_Router_1.default);
        this.app.use('/imagenes', Imagenes_Router_1.default);
        this.app.use('/videos', Videos_Router_1.default);
        this.app.use('/galeria', Galeria_Router_1.default);
        this.app.use('/noticias', Noticias_Router_1.default);
        this.app.use('/partidos', Partidos_Router_1.default);
        this.app.use('/publicidades', Publicidades_Router_1.default);
        this.app.use('/subcategorias', Subcategorias_Router_1.default);
        this.app.use('/tablas', Tablas_Router_1.default);
        this.app.use('/usuarios', Usuarios_Router_1.default);
        this.app.use('/medidasPublicidad', MedidasPublicidad_Router_1.default);
        this.app.use('/videosVivo', Vivo_Router_1.default);
        this.app.get('/', (req, res) => {
            res.send('iniciado');
        });
        this.app.get('/prueba', (req, res) => {
            throw new Error('Error loco');
        });
        this.app.get('/importar', (req, res) => {
            console.info('Importando BD...');
            (0, importarDatos_1.importarDatos)(req, res);
        });
        this.app.get('/instalar', (req, res) => {
            (0, instalacionInicial_1.instalarBD)(this.bd)
                .then((respuesta) => {
                res.status(200).send(respuesta);
            })
                .catch((e) => {
                console.log(e);
                res.status(500).send('ocurrio un error');
            });
        });
        this.app.get('*', (req, res) => {
            console.info(`GET 404: ${req.originalUrl}`);
            responder_1.default.noEncontrado(req, res);
        });
    }
    iniciar() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`⚡️[FUTSAL]: El Servidor de ${process.env.NODE_ENV} esta corriendo en el puerto ${process.env.PORT}`);
            process.env.NODE_ENV == 'desarrollo' ? console.warn(`${deploy}`) : console.log(`${deploy}`);
        });
    }
}
const srv = new Server();
srv.iniciar();
process.on('uncaughtException', function (err) {
    console.log('Error atrapado: ' + err);
});
