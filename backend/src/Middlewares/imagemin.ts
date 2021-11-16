const compress_images = require('compress-images');
import fs from 'fs';

const INPUT_path_to_your_images = 'public/cargaImagenes/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
const OUTPUT_path = 'public/imagenes/';

export const comprimirImagen = (pathFile?: string) => {
  // let pathImage: string = ``;
  // INPUT_path_to_your_images,
  const pr = new Promise((resolve: any, reject: any) => {
    compress_images(
      pathFile,
      OUTPUT_path,
      {compress_force: false, statistic: true, autoupdate: true},
      false,
      {jpg: {engine: 'mozjpeg', command: ['-quality', '60']}},
      {png: {engine: 'pngquant', command: ['--quality=20-50', '-o']}},
      {svg: {engine: 'svgo', command: '--multipass'}},
      {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}},
      (error: any, completed: any, statistic: any) => {
        if (!error) {
          fs.unlinkSync(statistic.input);
          resolve(statistic);
        } else {
          console.log(error);
          reject(error);
        }
        // console.log('-------------');
        // console.log(error);
        // console.log(completed);
        // console.log(statistic);
        // console.log('-------------');
      }
    );
  });
  return pr;
};
