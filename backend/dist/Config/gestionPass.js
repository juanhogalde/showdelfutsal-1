"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePasswordRand = void 0;
const generatePasswordRand = (length, type) => __awaiter(void 0, void 0, void 0, function* () {
    let caracteres = '';
    switch (type) {
        case 'num':
            caracteres = '0123456789';
            break;
        case 'alf':
            caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            break;
        case 'rand':
            break;
        default:
            caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            break;
    }
    let pass = '';
    for (let i = 0; i < length; i++) {
        if (type == 'rand') {
            pass += String.fromCharCode((Math.floor(Math.random() * 100) % 94) + 33);
        }
        else {
            pass += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
    }
    return pass;
});
exports.generatePasswordRand = generatePasswordRand;
