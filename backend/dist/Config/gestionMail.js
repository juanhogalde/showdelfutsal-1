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
exports.envioMail = void 0;
const nodemailer = require('nodemailer');
const path_1 = __importDefault(require("path"));
class envioMail {
    recuperarPassword(emailUsuario, nuevaContrasenia) {
        return __awaiter(this, void 0, void 0, function* () {
            const asunto = 'Reestablecimiento de contraseña';
            let cuerpoDelMensaje = `<div style="width:600px;font-size:15px;margin-left:70px;margin-right:38px">
      <dl style="margin-top:0%;margin-bottom:0%"><dd><h2>Hola</h2></dd>
      <dd>Su clave ha sido reestablecida.</dd>
      <dd>En caso de no haber solicitado un cambio de contraseña comuniquese con el administrador de sistema.</dd>
      <dd>Su nueva contraseña de usuario es: ${nuevaContrasenia}</dd></dl>
    </div>`;
            let transporter = nodemailer.createTransport({
                host: process.env.HOST_EMAIL_SISTEMA,
                port: process.env.PORT_EMAIL_SISTEMA,
                secure: true,
                auth: {
                    user: process.env.EMAIL_SISTEMA,
                    pass: process.env.PASS_EMAIL_SISTEMA,
                },
            });
            yield transporter.sendMail({
                from: process.env.EMAIL_SISTEMA,
                to: emailUsuario,
                attachments: [
                    {
                        filename: 'encabezado.png',
                        path: path_1.default.join(__dirname, '../../archivos/Encabezado_mail.png'),
                        cid: 'correo-encabezado',
                    },
                    {
                        filename: 'piePagina.png',
                        path: path_1.default.join(__dirname, '../../archivos/piePagina.png'),
                        cid: 'correo-pie',
                    },
                ],
                subject: asunto,
                text: 'Pedido de reestablecimiento de contraseña',
                html: `
      
          <img style="width:100%; padding-Left:100px; padding-Right:100px; max-width:600px" src="cid:correo-encabezado"/>
          ${cuerpoDelMensaje}
          <br>

          <img style="width:100%; padding-Left:100px; padding-Right:100px; max-width:600px" src="cid:correo-pie"/>`,
            });
        });
    }
}
exports.envioMail = envioMail;
