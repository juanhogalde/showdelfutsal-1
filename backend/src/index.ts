import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import formData from 'express-form-data';
import {baseMongo} from './Config/baseDeDatos';
import dotenv from 'dotenv';
dotenv.config();
import {Request, Response, NextFunction} from 'express';
import noticiasRouter from './Componentes/Noticias/Noticias_Router';
import torneosRouter from './Componentes/Torneos/Torneos_Router';
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
import videosRouter from './Componentes/Videos/Videos_Router';
import galeriaRouter from './Componentes/Galeria/Galeria_Router';
import zonasRouter from './Componentes/Zonas/Zonas_Router';
import tablasRouter from './Componentes/Tablas/Tablas_Router';
import responder from './Middlewares/responder';
import manejadorErrores from './Middlewares/manejadorErrores';
import {instalarBD} from './Config/instalacionInicial';
import medidasPublicidad_Router from './Componentes/MedidasPublicidad/MedidasPublicidad_Router';
import vivoRouter from './Componentes/Vivo/Vivo_Router';
import modeloImagenes from './Componentes/Imagenes/Imagenes_Model';
import {findConfigFile} from 'typescript';

///// VARIABLES DE ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'desarrollo';

///// DEPLOY
const deploy = 'v0.0.32 - 26/03/22';

class Server {
  public app: express.Application;
  private _cadenaDeConexion =
    process.env.DATABASE || `mongodb://localhost:27017/${process.env.NODE_ENV}`;
  private options = {
    uploadDir: 'public/imagenes/',
    autoClean: false,
  };
  private bd: any;
  constructor() {
    this.app = express();
    this.conectarBd();
    this.configurar();
    this.routear();
    this.app.use(manejadorErrores);
  }

  conectarBd() {
    this.bd = new baseMongo(this._cadenaDeConexion);
  }

  configurar() {
    this.app.set('port', process.env.PORT || 4000);
    this.app.use(morgan('dev'));
    this.app.use(cors());
    // this.app.use(helmet());
    // this.app.use(compression());
    this.app.use(formData.parse(this.options));
    this.app.use(formData.union());
    this.app.use(formData.stream());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(express.static('public'));
  }

  routear() {
    this.app.use('/torneos', torneosRouter);
    this.app.use('/categorias', categoriasRouter);
    this.app.use('/estadios', estadiosRouter);
    this.app.use('/equipos', equiposRouter);
    this.app.use('/home', homeRouter);
    this.app.use('/imagenes', imagenesRouter);
    this.app.use('/videos', videosRouter);
    this.app.use('/galeria', galeriaRouter);
    this.app.use('/noticias', noticiasRouter);
    this.app.use('/zonas', zonasRouter);
    this.app.use('/partidos', partidosRouter);
    this.app.use('/anuncios', publicidadesRouter);
    this.app.use('/subcategorias', subcategoriasRouter);
    this.app.use('/tablas', tablasRouter);
    this.app.use('/usuarios', usuariosRouter);
    this.app.use('/medidasPublicidad', medidasPublicidad_Router);
    this.app.use('/videosVivo', vivoRouter);

    //Rutas Basicas
    this.app.get('/', (req: Request, res: Response) => {
      res.send('iniciado');
    });

    this.app.get('/instalar', (req: Request, res: Response) => {
      instalarBD(req, res);
    });
    /*
    this.app.get('/limpiarImg', async (req: Request, res: Response) => {
     
      const fs = require('fs');
      const path = require('path');
      const files = fs.readdirSync('./public/imagenes/');
      
      let eliminar: any[] = [];
      const imagenesbd = await modeloImagenes.find({});
      let imgid: string[] = imagenesbd.map((img: any) => {
        return img._id.toString();
      });

      // filtrar aquellos files que no esten en la base de datos
      eliminar = files.filter((ff: string) => !imgid.includes(ff));

      console.group('elim----------');
      console.warn(eliminar);
      console.group('elim----------');
      const dataArr = new Set(eliminar);
      let result = [...dataArr];
      eliminar.map(r => {
        //fs.unlinkSync(path.join('./public/imagenes/', r));
      });


      const imagenesbd = await modeloImagenes.find({
        _id: {$in: files},
      });

      res.status(200).json(imagenesbd);
    });
*/

    this.app.get('*', (req: Request, res: Response) => {
      console.info(`GET 404: ${req.originalUrl}`);
      responder.noEncontrado(req, res);
    });
  }

  iniciar() {
    if (process.env.NODE_ENV === 'produccion') {
      var fs = require('fs');
      var https = require('https');
      var credenciales = {
        key: fs.readFileSync(path.join(__dirname, '../crt/private.key')).toString(),
        cert: fs.readFileSync(path.join(__dirname, '../crt/certificate.crt')).toString(),
        ca: fs.readFileSync(path.join(__dirname, '../crt/ca_bundle.crt')).toString(),
      };
      https.createServer(credenciales, this.app).listen(process.env.PORT, () => {
        console.log(
          `⚡️[FUTSAL ${deploy}]: Servidor https de ${process.env.NODE_ENV} esta corriendo en el puerto ${process.env.PORT}`
        );
      });
    } else {
      this.app.listen(process.env.PORT, () => {
        console.log(
          `⚡️[FUTSAL ${deploy}]: El Servidor http de ${process.env.NODE_ENV} esta corriendo en el puerto ${process.env.PORT}`
        );
      });
    }
  }
}

///// INICIANDO SERVIDOR
const srv = new Server();
srv.iniciar();

process.on('uncaughtException', function (err) {
  console.log('Error atrapado: ' + err);
});
