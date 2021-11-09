import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import formData from 'express-form-data';
import {baseMongo} from './Config/baseDeDatos';
import dotenv from 'dotenv';
dotenv.config();
import {Request, Response, NextFunction} from 'express';
import noticiasRouter from './Componentes/Noticias/Noticias_Router';
import campeonatosRouter from './Componentes/Campeonatos/Campeonatos_Router';
import equiposRouter from './Componentes/Equipos/Equipos_Router';
import categoriasRouter from './Componentes/Categorias/Categorias_Router';
import partidosRouter from './Componentes/Partidos/Partidos_Router';
import subcategoriasRouter from './Componentes/Subcategorias/Subcategorias_Router';
import publicidadesRouter from './Componentes/Publicidades/Publicidades_Router';
import usuariosRouter from './Componentes/Usuarios/Usuarios_Router';
import estadiosRouter from './Componentes/Estadios/Estadios_Router';
import etiquetasRouter from './Componentes/Etiquetas/Etiquetas_Router';
import homeRouter from './Componentes/Home/Home_Router';
import imagenesRouter from './Componentes/Imagenes/Imagenes_Router';
import tablasRouter from './Componentes/Tablas/Tablas_Router';
import responder from './Middlewares/responder';
import manejadorErrores from './Middlewares/manejadorErrores';
import {importarDatos} from './Config/importarDatos';

///// VARIABLES DE ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'desarrollo';

///// DEPLOY
const deploy = 'v0.0.1';

class Server {
  public app: express.Application;
  private _cadenaDeConexion = process.env.DATABASE || 'mongodb://localhost:29017/Desarrollo';
  private options = {
    uploadDir: 'imagenes/',
    autoClean: false,
  };

  constructor() {
    this.app = express();
    this.conectarBd();
    this.configurar();
    this.routear();
    this.app.use(manejadorErrores);
  }

  conectarBd() {
    const bd = new baseMongo(this._cadenaDeConexion);
  }

  configurar() {
    this.app.set('port', process.env.PORT || 4000);
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(formData.parse(this.options));
    this.app.use(formData.union());
    this.app.use(formData.stream());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(express.static('/archivos'));
  }

  routear() {
    this.app.use('/campeonatos', campeonatosRouter);
    this.app.use('/categorias', categoriasRouter);
    this.app.use('/estadios', estadiosRouter);
    //this.app.use('/etiquetas', etiquetasRouter);
    this.app.use('/equipos', equiposRouter);
    this.app.use('/home', homeRouter);
    this.app.use('/imagenes', imagenesRouter);
    this.app.use('/noticias', noticiasRouter);
    this.app.use('/partidos', partidosRouter);
    this.app.use('/publicidades', publicidadesRouter);
    this.app.use('/subcategorias', subcategoriasRouter);
    this.app.use('/tablas', tablasRouter);
    this.app.use('/usuarios', usuariosRouter);

    //Rutas Basicas
    this.app.get('/', (req: Request, res: Response) => {
      res.send('iniciado');
    });
    this.app.get('/prueba', (req: Request, res: Response) => {
      throw new Error('Error loco');
    });
    this.app.get('/importar', (req: Request, res: Response) => {
      console.info('Importando BD...');
      importarDatos(req, res);
    });
    this.app.get('*', (req: Request, res: Response) => {
      console.info(`GET 404: ${req.originalUrl}`);
      responder.noEncontrado(req, res);
    });
  }

  iniciar() {
    this.app.listen(this.app.get('port'), () => {
      console.log(
        `⚡️[FUTSAL]: El Servidor de ${process.env.NODE_ENV} esta corriendo en el puerto ${process.env.PORT}`
      );
    });
  }
}

///// INICIANDO SERVIDOR
const srv = new Server();
srv.iniciar();

process.on('uncaughtException', function (err) {
  console.log('Error atrapado: ' + err);
});
