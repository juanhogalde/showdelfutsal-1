import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloHomes from './Home_Model';
import IHomes from './Home_Interface';
import {noticiasController} from '../Noticias/Noticias_Controller';
import {partidosController} from '../Partidos/Partidos_Controller';
import {imagenesController} from '../Imagenes/Imagenes_Controller';
import {keyCategoria} from '../../Config/enumeradores';

class HomesController {
  public async obtenerDatosIniciales(req: Request, res: Response) {
    try {
      var contNoticiaMasc: number = 0;
      var contNoticiaFem: number = 0;
      var contNoticiaInf: number = 0;

      var objetoFinal = {
        noticias: <any>[],
        vivo: {},
        partidos: <any>[],
        galeriaFoto: {},
        galeriaVideo: {},
      };

      const noticiasDestacadas = await noticiasController.obtenerNoticiasDestacadas();

      if (noticiasDestacadas && noticiasDestacadas.length) {
        for await (const noticia of noticiasDestacadas) {
          if (noticia.keyCategoria === keyCategoria.Masculino) {
            contNoticiaMasc++;
            if (contNoticiaMasc !== 3) {
              objetoFinal.noticias.push(noticia);
            }
          } else if (noticia.keyCategoria === keyCategoria.Femenino) {
            contNoticiaFem++;
            if (contNoticiaFem !== 3) {
              objetoFinal.noticias.push(noticia);
            }
          } else if (noticia.keyCategoria === keyCategoria.LNFA) {
            contNoticiaInf++;
            if (contNoticiaInf !== 3) {
              objetoFinal.noticias.push(noticia);
            }
          }
        }
      }

      const vivo = await modeloHomes.find({isVivoActivo: true});

      if (vivo && vivo.length) {
        objetoFinal.vivo = {...vivo};
      }

      const partidos = await partidosController.obtenerPartidos();
      if (partidos && partidos.lenght) {
        objetoFinal.partidos = [...partidos];
      }

      if (req.body.galeria) {
        const galeria = await imagenesController.obtenerGaleria(req.body.galeria);
        if (galeria && galeria.length) {
          objetoFinal.galeriaFoto = [...galeria];
        }
      }

      if (req.body.galeriaVideo) {
        const galeriaVideo = await imagenesController.obtenerGaleriaVideo(req.body.galeriaVideo);
        if (galeriaVideo && galeriaVideo.length) {
          objetoFinal.galeriaVideo = [...galeriaVideo];
        }
      }

      responder.sucess(req, res, objetoFinal);
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

/*

Que espera el front como modelo de galeria
[
{
fuente:string, // para video el id y para imagen el path
descripcion:string
}
]

que espera el front como modelo de partidos
partido: {
_id: ObjectId,
equipoA: {
	nombreClub: string,
	escudo:  string (ruta a una imagen),
	resultado:int,
	penales: int,
}
}


 */
