import Compressor from 'compressorjs';

const compresor = async (archivo = {}, calidadCompresion = 0.8) => {
  return await new Promise((resolve, reject) => {
    new Compressor(archivo, {
      quality: calidadCompresion,
      success(archivoComprimido) {
        resolve(archivoComprimido);
      },
      error(err) {
        reject(err);
      },
    });
  });
};
export default compresor;
