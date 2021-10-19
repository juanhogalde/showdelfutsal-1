import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloUsuarios from './Usuarios_Model';
import IUsuarios from './Usuarios_Interface';
import generarClaves from '../../Middlewares/generadorClaves';
const genClaves = new generarClaves();

const proyeccion: object = {password: 0, token: 0};

class UsuariosController {
  public async listar(req: Request, res: Response) {
    try {
      const listadoUsuarios = await modeloUsuarios.find({}, proyeccion);
      responder.sucess(req, res, listadoUsuarios);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      const usuario: IUsuarios = new modeloUsuarios(req.body);
      await usuario.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  // public async test(req: Request, res: Response) {
  //   try {
  //     responder.sucess(req, res, 'TODO OK loco');
  //   } catch (error) {
  //     responder.error(req, res, error);
  //   }
  // }

  public async login(req: Request, res: Response) {
    try {
      const datosUsuario = req.body;
      if (datosUsuario && datosUsuario.email) {
        const usuarioBD = await modeloUsuarios
          .findOne({$and: [{email: datosUsuario.email}, {isActivo: true}]})
          .exec();

        if (usuarioBD) {
          const match = genClaves.compararClave(usuarioBD.password, datosUsuario.password);
          if (match) {
            let {password, ...usuarioSinPass} = usuarioBD;
            const tokenGenerado = genClaves.generarToken(usuarioSinPass);
            if (tokenGenerado) {
              responder.sucess(req, res, tokenGenerado);
            } else {
              throw new Error('Error al generar el token');
            }
          } else {
            throw new Error('Clave incorrecta');
          }
        } else {
          throw new Error('Usuario no encontrado o desactivado.');
        }
      } else {
        throw new Error('No se ingresaron datos de usuario');
      }
      //responder.sucess(req, res, usuario); //devolver sin pass el token
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      const usuarioBody = req.body;
      if (usuarioBody._id) {
        modeloUsuarios.findById(usuarioBody._id).then(async (usuario: any) => {
          if (usuario) {
            usuario.nombreUsuario = usuarioBody.nombreUsuario;
            usuario.email = usuarioBody.email;
            usuario.keyRol = usuarioBody.keyRol;
            usuario.token = usuarioBody.token;
            usuario.isActivo = usuarioBody.isActivo;

            const resultado = await usuario.save({new: true});
            responder.sucess(req, res, resultado);
          } else {
            let error = new Error('Usuario no encontrado');
            responder.error(req, res, error);
          }
        });
      } else {
        let error = new Error('Usuario no encontrado');
        responder.error(req, res, error);
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
      let id = req.body.id;
      const usuarioEliminada = await modeloUsuarios.findOneAndDelete({_id: id}, {new: true});
      responder.sucess(req, res, usuarioEliminada);
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const usuariosController = new UsuariosController();