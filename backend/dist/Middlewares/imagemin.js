"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comprimirImagen = void 0;
const compress_images = require('compress-images');
const fs_1 = __importDefault(require("fs"));
const OUTPUT_path = 'public/imagenes/';
const comprimirImagen = (pathFile) => {
    const pr = new Promise((resolve, reject) => {
        compress_images(pathFile, OUTPUT_path, { compress_force: false, statistic: true, autoupdate: true }, false, { jpg: { engine: 'mozjpeg', command: ['-quality', '60'] } }, { png: { engine: 'pngquant', command: ['--quality=20-50', '-o'] } }, { svg: { engine: 'svgo', command: '--multipass' } }, { gif: { engine: 'gifsicle', command: ['--colors', '64', '--use-col=web'] } }, (error, completed, statistic) => {
            if (!error) {
                fs_1.default.unlinkSync(statistic.input);
                resolve(statistic);
            }
            else {
                console.log(error);
                reject(error);
            }
        });
    });
    return pr;
};
exports.comprimirImagen = comprimirImagen;
