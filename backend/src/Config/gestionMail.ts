const nodemailer = require('nodemailer');
import path from 'path';

export class envioMail {
  public async recuperarPassword(emailUsuario: string, nuevaContrasenia: string) {
    const asunto: string = 'Reestablecimiento de contraseña';

    let cuerpoDelMensaje: string = `<div style="width:600px;font-size:15px;margin-left:70px;margin-right:38px">
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

    await transporter.sendMail({
      from: process.env.EMAIL_SISTEMA,
      to: emailUsuario,
      attachments: [
        {
          filename: 'encabezado.png',
          path: path.join(__dirname, '../../public/archivos/Encabezado_mail.png'),
          cid: 'correo-encabezado',
        },
        {
          filename: 'piePagina.png',
          path: path.join(__dirname, '../../public/archivos/piePagina.png'),
          cid: 'correo-pie',
        },
      ],
      subject: asunto,
      text: 'Pedido de reestablecimiento de contraseña',
      // html: `${cuerpoDelMensaje}`,
      html: `
      
          <img style="width:100%; padding-Left:100px; padding-Right:100px; max-width:600px" src="cid:correo-encabezado"/>
          ${cuerpoDelMensaje}
          <br>

          <img style="width:100%; padding-Left:100px; padding-Right:100px; max-width:600px" src="cid:correo-pie"/>`,
    });
  }
}
