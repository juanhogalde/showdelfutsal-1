import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as env from 'env-var';

export default class generarClaves {
  hashClave = (clave: string): string => {
    let claveHasheada = bcrypt.hashSync(clave, 10);
    return claveHasheada;
  };

  generarToken = (datos: object) => {
    let token = jwt.sign({...datos}, env.get('TOKEN_SECRET').required().asString());
    return token;
  };

  compararClave = (keyBD: any, keyBody: string) => {
    const match = bcrypt.compareSync(keyBody, keyBD);
    return match;
  };
}
