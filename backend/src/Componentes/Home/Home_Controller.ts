import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloHomes from './Home_Model';
import IHomes from './Home_Interface';
import Vivo_Model from '../Vivo/Vivo_Model';
import {keyCategoria} from '../../Config/enumeradores';
import Noticias_Model from '../Noticias/Noticias_Model';
import Imagenes_Model from '../Imagenes/Imagenes_Model';
import Partidos_Model from '../Partidos/Partidos_Model';
import Publicidades_Model from '../Publicidades/Publicidades_Model';

class HomesController {
  public async obtenerDatosIniciales(req: Request, res: Response) {
    try {
      let datosIniciales: any = {
        noticias: {
          masculino: {
            noticiaP: {},
            noticia1: {},
            noticia2: {},
          },
          femenino: {
            noticiaP: {},
            noticia1: {},
            noticia2: {},
          },
          liga: {
            noticiaP: {},
            noticia1: {},
            noticia2: {},
          },
        },
      };
      //Publicidades
      await Publicidades_Model.find({})
        .then(publicidades => {
          datosIniciales.publicaciones = publicidades;
        })
        .catch(error => {
          responder.error(req, res, error);
        });
      // Vivo
      Vivo_Model.find({})
        .then(vivo => {
          if (vivo.length > 0) {
            datosIniciales.videoVivo = vivo[0];
          }
        })
        .catch(error => {
          responder.error(req, res, error);
        });
      //imagenes con populate galerias
      await Imagenes_Model.find({isGaleria: true})
        .populate('galeriaId')
        .then(async (imagenes: any) => {
          datosIniciales.galerias = imagenes;
        })
        .catch(error => {
          responder.error(req, res, error);
        });
      //filtrado de noticias destacadas
      await Noticias_Model.find({isDestacada: true})
        .sort({fecha: 1})
        .then(noticias => {
          let noticias_masc = noticias.filter(x => x.keyCategoria === keyCategoria.Masculino);
          let noticias_fem = noticias.filter(x => x.keyCategoria === keyCategoria.Femenino);
          let noticias_liga = noticias.filter(x => x.keyCategoria === keyCategoria.LNFA);
          datosIniciales.noticias.masculino.noticiaP = noticias_masc[0] ? noticias_masc[0] : {};
          datosIniciales.noticias.masculino.noticia1 = noticias_masc[1] ? noticias_masc[0] : {};
          datosIniciales.noticias.masculino.noticia2 = noticias_masc[2] ? noticias_masc[0] : {};
          datosIniciales.noticias.femenino.noticiaP = noticias_fem[0] ? noticias_fem[0] : {};
          datosIniciales.noticias.femenino.noticia1 = noticias_fem[1] ? noticias_fem[1] : {};
          datosIniciales.noticias.femenino.noticia2 = noticias_fem[2] ? noticias_fem[2] : {};
          datosIniciales.noticias.liga.noticiaP = noticias_liga[0] ? noticias_liga[0] : {};
          datosIniciales.noticias.liga.noticia1 = noticias_liga[1] ? noticias_liga[1] : {};
          datosIniciales.noticias.liga.noticia2 = noticias_liga[2] ? noticias_liga[2] : {};
          console.log(datosIniciales.noticias.masculino.noticiaP);
        })
        .catch(error => {
          responder.error(req, res, error);
        });
      //filtrado de partidos
      await Partidos_Model.find({})
        .populate('idTorneo')
        .sort({fecha: 1})
        .then((partidos: any[]) => {
          datosIniciales.partidos = [
            ...partidos.filter(
              (partido: any) =>
                new Date().getFullYear() === new Date(partido.idTorneo.fechaInicio).getFullYear()
            ),
          ];
        });
      responder.sucess(req, res, datosIniciales);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public obtenerVivoHome() {
    return modeloHomes.find({isVivoActivo: true});
  }

  public async obtenerVivo(req: Request, res: Response) {
    try {
      const listadoHomes = await modeloHomes.find();
      responder.sucess(req, res, listadoHomes);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtenerRadio(req: Request, res: Response) {
    try {
      const listadoHomes = await modeloHomes.find();
      responder.sucess(req, res, listadoHomes);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtenerPartidos(req: Request, res: Response) {
    try {
      const listadoHomes = await modeloHomes.find();
      responder.sucess(req, res, listadoHomes);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtenerDestacadas(req: Request, res: Response) {
    try {
      const listadoHomes = await modeloHomes.find();
      responder.sucess(req, res, listadoHomes);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtenerGaleriasImagenes(req: Request, res: Response) {
    try {
      const listadoHomes = await modeloHomes.find();
      responder.sucess(req, res, listadoHomes);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtenerGaleriasVideo(req: Request, res: Response) {
    try {
      const listadoHomes = await modeloHomes.find();
      responder.sucess(req, res, listadoHomes);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      const home: IHomes = new modeloHomes(req.body);
      await home.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const homesController = new HomesController();
