import Compressor from 'compressorjs';

const compresor = async (archivo = {}, calidadCompresion = 0.8) => {
  console.log(archivo);
  return await new Promise((resolve, reject) => {
    if (archivo.size > 1000000) {
      new Compressor(archivo, {
        quality: calidadCompresion,
        success(archivoComprimido) {
          resolve(archivoComprimido);
        },
        error(err) {
          reject(err);
        },
      });
    } else resolve(archivo);
  });
};
export default compresor;
