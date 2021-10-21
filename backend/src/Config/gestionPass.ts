export const generatePasswordRand = async (length: number, type?: string) => {
  let caracteres: string = '';
  switch (type) {
    case 'num':
      caracteres = '0123456789';
      break;
    case 'alf':
      caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      break;
    case 'rand':
      //FOR ↓
      break;
    default:
      caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      break;
  }
  let pass: string = '';
  for (let i: number = 0; i < length; i++) {
    if (type == 'rand') {
      pass += String.fromCharCode((Math.floor(Math.random() * 100) % 94) + 33);
    } else {
      pass += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
  }
  return pass;
};
