//*** Info Deploy */
let _version = 'Version Front v0.0.16';
let Enviroment = 'Produccion';
let _dominio = 'localhost';
let _api = 'localhost';
let _puerto = '4000';

switch (Enviroment) {
  case 'Produccion':
    _dominio = 'http://testingfutsal.c1470936.ferozo.com';
    _api = '194.113.73.194';
    _puerto = '4200';
    break;

  case 'Testing':
    _dominio = 'http://testingfutsal.lowa.com.ar';
    _api = '194.113.73.194';
    _puerto = '4000';
    console.log(_version);
    break;

  case 'Desarrollo':
    console.log(_version);
    break;

  default:
    console.error('ERROR: Debe setear una variable de entorno');
    break;
}

export const api = _api;
export const dominio = _dominio;
export const puerto = _puerto;
