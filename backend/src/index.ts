import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import {Request, Response} from 'express';
import noticiasRouter from './Componentes/Noticias/Noticias_Router';
import responder from './Middlewares/responder';

///// CONFIGURACIONES
process.env.NODE_ENV = process.env.NODE_ENV || 'desarrollo';
const deploy = 'v0.0.1';

class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    this.app.set('port', process.env.PORT || 4000);
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
  }

  routes() {
    this.app.use('/noticias', noticiasRouter);
    /* 
    this.app.use('/paginas', noticiasRouter);
    this.app.use('/equipos', Router);
    this.app.use('/categorias', categoriasRouter);
    this.app.use('/subcategorias', subcategoriasRouter);
    this.app.use('/publicidades', publicidadesRouter);
    this.app.use('/campeonatos', campeonatosRouter);
    this.app.use('/zonas', zonasRouter);
    this.app.use('/partidos', partidosRouter);
    this.app.use('/usuarios', usuariosRouter);
    */
    //Rutas Basicas
    this.app.get('/', (req: Request, res: Response) => {
      res.send('iniciado');
    });
    this.app.get('*', (req: Request, res: Response) => {
      console.info(`GET 404: ${req.originalUrl}`);
      responder.noEncontrado(req, res);
    });
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(
        `⚡️[FUTSAL]: El Servidor de ${process.env.NODE_ENV} esta corriendo en el puerto ${process.env.PORT}`
      );
    });
  }
}

///// INICIANDO SERVIDOR
const server = new Server();
server.start();
//capturar todos los errores
