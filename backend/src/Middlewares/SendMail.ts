var nodemailer = require('nodemailer');
const path = require('path');

export const enviarNotificacionPorMail = async (
  asunto: string,
  listadoDeMails: [],
  cuerpoDelMensaje: any
) => {
  var transporter = nodemailer.createTransport({
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
    to: listadoDeMails,
    attachments: [
      {
        filename: 'correo-encabezado.png',
        path: path.join(__dirname, '../../archivosParaMail/correo-encabezado.png'),
        cid: 'correo-encabezado',
      },
      {
        filename: 'correo-pie.jpg',
        path: path.join(__dirname, '../../archivosParaMail/correo-pie.jpg'),
        cid: 'correo-pie',
      },
    ],
    subject: asunto,
    text: 'Notificacion Via Mail',
    html: `
    <img src="cid:correo-encabezado"/>
    ${cuerpoDelMensaje}
    <br>
    <br>
    <img src="cid:correo-pie"/>`,
  });
};

export const enviarMailConHash = async (nuevoUsuario: any) => {
  var link = 'http://localhost:3000';
  // Definimos el transporter
  var transporter = nodemailer.createTransport({
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
    to: nuevoUsuario.email,
    attachments: [
      {
        filename: 'correo-encabezado.png',
        path: path.join(__dirname, '../../archivosParaMail/correo-encabezado.png'),
        cid: 'correo-encabezado',
      },
      {
        filename: 'correo-pie.jpg',
        path: path.join(__dirname, '../../archivosParaMail/correo-pie.jpg'),
        cid: 'correo-pie',
      },
    ],
    subject: 'Registro',
    text: 'Este es un mail para registro',
    html: `
    <img src="cid:correo-encabezado"/>
    <div style="max-width:600px;font-size:15px;margin-left:38px;margin-right:38px">
      <dl style="margin-top:0%;margin-bottom:0%"><dd><h2>Hola</h2></dd>
      <dd>Gracias por registrarse en la <strong>Plataforma de Comunicación Social San Juan.</strong></dd>
      <dd>A continuación le facilitamos el link al sistema: <a href="http://localhost:3000" target="_blank">Click aquí para ingresar</a></dd></dl><br>
      <dl style="margin-top:0%;margin-bottom:0%"><dd>Al ingresar debe dirigirse a REGISTRAR y luego insertar el siguiente codigo y completar todos los campos.</dd>
      <dd>Código:</dd> 
      <dd><div style="margin-right:38px;font-family:sans-serif;font-size:14px;color:#000000;background:#c2c2c2"><center>${nuevoUsuario.hash}</center></div></dd></dl>
      <br>
      <dl style="margin-top:0%;margin-bottom:0%"><dd>Cuando el administrador de sistema chequee sus datos recibirá un mail con la confirmación.</dd></dl>
    </div>
    <br>
    <br>
    <img src="cid:correo-pie"/>`,
  });
};

export const enviarMailConNuevaClave = async (
  email: string,
  nombreUsuario: string,
  nuevaClave: string
) => {
  //TODO: Modificar datos de email
  // console.log(process.env.EMAIL_SISTEMA);
  // console.log(process.env.PASS_EMAIL_SISTEMA);

  // Definimos el transporter
  var transporter = nodemailer.createTransport({
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
    to: email,
    subject: 'Reestablecimiento de contraseña',
    text: 'Este es un mail para reestablecer su contraseña',
    html: `Hola
                <p>Este correo le informa su nueva clave.</p>

                <p><strong>Datos de acceso</strong></p>
                <p>Nombre de Usuario: ${nombreUsuario}</p>
                <p>Contraseña: ${nuevaClave}</p>

               <p> Dirijase al siguiente link para proseguir con el inicio de sesión:
                <a href=" https://pcssj-back-dev.herokuapp.com">Click aqui!</a></p>
                `,
  });
};
