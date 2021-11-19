import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloUsuarios from './Usuarios_Model';
import IUsuarios from './Usuarios_Interface';
import generarClaves from '../../Middlewares/generadorClaves';
import {envioMail} from '../../Config/gestionMail';
import {generatePasswordRand} from '../../Config/gestionPass';
import {Rol} from '../../Config/enumeradores';
const sendMail = new envioMail();
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
      console.log(req.body);
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

  public async modificarPassword(req: Request, res: Response) {
    try {
      const usuarioBody = req.body;
      if (usuarioBody.idUsuraio && usuarioBody.passwordNueva) {
        modeloUsuarios.findById(usuarioBody.idUsuraio).then(async (usuario: any) => {
          if (usuario) {
            usuario.nombreUsuario = usuario.nombreUsuario;
            usuario.email = usuario.email;
            usuario.keyRol = usuario.keyRol;
            usuario.token = usuario.token;
            usuario.isActivo = usuario.isActivo;
            usuario.password = usuarioBody.passwordNueva;
            usuario.isRecuperarContraseña = false;

            const resultado = await usuario.save({new: true});
            const token = genClaves.generarToken({...resultado, password: ''});
            responder.sucess(req, res, token);
          } else {
            let error = new Error('Usuario no encontrado');
            responder.error(req, res, error);
          }
        });
      } else {
        let error = new Error('Faltan datos');
        responder.error(req, res, error);
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
      let id = req.body.id;
      if (!id) {
        responder.error(req, res, 'No se ingresaron datos');
      } else {
        const usuario = await modeloUsuarios.findOne({_id: id});
        if (usuario) {
          if (usuario.keyRol === Rol.Administrador) {
            usuario.isActivo = false;
            const resultado = await usuario.save();
            if (resultado) {
              responder.sucess(req, res, 'Usuario administrador desactivado.');
            } else {
              console.info(resultado);
              responder.error(req, res, 'Ocurrio un error al cambiar el estado del usuario');
            }
          } else {
            const valor = await usuario.deleteOne({_id: id});
            if (valor) {
              responder.sucess(req, res, 'Usuario eliminado.');
            } else {
              console.info(valor);
              responder.error(req, res, 'Ocurrio un error al eliminar el usuario');
            }
          }
        } else {
          responder.error(req, res, 'Usuario no encontrado');
        }
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async recuperarPassword(req: Request, res: Response) {
    try {
      const datosBody = req.body;
      if (datosBody) {
        const usuario = await modeloUsuarios.findOne({email: datosBody.email});
        if (usuario) {
          const nuevaContrasenia = await generatePasswordRand(8);
          if (nuevaContrasenia && usuario.email) {
            sendMail.recuperarPassword(usuario.email, nuevaContrasenia);

            //
            modeloUsuarios.findById(usuario._id).then(async (usuario: any) => {
              if (usuario) {
                usuario.nombreUsuario = usuario.nombreUsuario;
                usuario.email = usuario.email;
                usuario.keyRol = usuario.keyRol;
                usuario.token = usuario.token;
                usuario.isActivo = usuario.isActivo;
                usuario.isRecuperarContraseña = true;
                usuario.password = nuevaContrasenia;
                const resultado = await usuario.save({new: true});
                responder.sucess(req, res, 'Correo de reestablecimiento enviado');
              } else {
                let error = new Error('Usuario no encontrado');
                responder.error(req, res, error);
              }
            });

            //responder.sucess(req, res, 'Correo de reestablecimiento enviado');
          } else {
            console.log(usuario.email);
            console.log(nuevaContrasenia);
            responder.error(req, res);
          }
        } else {
          responder.sucess(req, res, 'El email ingresado no está registrado.');
        }
      } else {
        responder.error(req, res, 'No se ingresaron datos.');
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const usuariosController = new UsuariosController();
