import Compressor from 'compressorjs';

const compresorMultiple = async (archivos = {}) => {
  return await new Promise((resolve, reject) => {
    new Compressor(archivos, {
      quality: 0.8,
      success(archivoComprimido) {
        resolve(archivoComprimido);
      },
      error(err) {
        reject(err);
      },
    });
  });
};
export default compresorMultiple;
