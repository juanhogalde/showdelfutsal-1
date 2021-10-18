import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloEstadios from './Estadios_Model';
import IEstadios from './Estadios_Interface';

class EstadiosController {
  public async listar(req: Request, res: Response) {
    try {
      const listadoEstadios = await modeloEstadios.find();
      responder.sucess(req, res, listadoEstadios);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      const estadio: IEstadios = new modeloEstadios(req.body);
      await estadio.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtener(req: Request, res: Response) {
    try {
      let idEstadio = req.params.id;
      const estadio = await modeloEstadios.find({_id: idEstadio});
      responder.sucess(req, res, estadio);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      const estadioBody = req.body;
      if (estadioBody._id) {
        modeloEstadios.findById(estadioBody._id).then(async (estadio: any) => {
          if (estadio) {
            estadio.nombreEstadio = estadioBody.nombreEstadio;
            estadio.direccion = estadioBody.direccion;

            const resultado = await estadio.save({new: true});
            responder.sucess(req, res, resultado);
          } else {
            let error = new Error('Estadio no encontrado');
            responder.error(req, res, error);
          }
        });
      } else {
        let error = new Error('Estadio no encontrado');
        responder.error(req, res, error);
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
      let id = req.body.id;
      const estadioEliminada = await modeloEstadios.findOneAndDelete({_id: id}, {new: true});
      responder.sucess(req, res, estadioEliminada);
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const estadiosController = new EstadiosController();
