import IUsuarios from '../Componentes/Usuarios/Usuarios_Interface';
import ICategorias from '../Componentes/Categorias/Categorias_Interface';
import ISubCategorias from 'src/Componentes/Subcategorias/Subcategorias_Interface';
import IMedidasPublicidad from 'src/Componentes/MedidasPublicidad/MedidasPublicidad_Interface';
import modeloUsuarios from '../Componentes/Usuarios/Usuarios_Model';
import modeloCategorias from '../Componentes/Categorias/Categorias_Model';
import modeloSubCategorias from '../Componentes/Subcategorias/Subcategorias_Model';
import modeloMedidasPublicidad from '../Componentes/MedidasPublicidad/MedidasPublicidad_Model';
import modeloNoticias from '../Componentes/Noticias/Noticias_Model';
import {keyCategoria, keySubcategoria} from './enumeradores';
import responder from '../Middlewares/responder';
import {Request, Response} from 'express';

let inicializarCategorias = async () => {
  let enumCategorias = Object.entries(keyCategoria);
  let categoriaArray = enumCategorias.slice(0, enumCategorias.length / 2);

  for await (const labelCategoria of categoriaArray) {
    let categoria: ICategorias = new modeloCategorias({
      _id: labelCategoria[0],
      nombreCategoria: labelCategoria[1].toString().replace('_', ' '),
      keyCategoria: parseInt(labelCategoria[0]),
    });

    await categoria.save();
  }
};

let inicializarSubCategorias = async () => {
  const subCategoriaArray = [
    {
      _id: keySubcategoria.Masc_divA.toString(),
      nombreSubcategoria: 'Divisional A',
      keySubcategoria: keySubcategoria.Masc_divA,
      keyCategoria: keyCategoria.Masculino,
    },

    {
      _id: keySubcategoria.Masc_divB.toString(),
      nombreSubcategoria: 'Divisional B',
      keySubcategoria: keySubcategoria.Masc_divB,
      keyCategoria: keyCategoria.Masculino,
    },

    {
      _id: keySubcategoria.Masc_divC.toString(),
      nombreSubcategoria: 'Divisional C',
      keySubcategoria: keySubcategoria.Masc_divC,
      keyCategoria: keyCategoria.Masculino,
    },
    {
      _id: keySubcategoria.Masc_divD.toString(),
      nombreSubcategoria: 'Divisional D',
      keySubcategoria: keySubcategoria.Masc_divD,
      keyCategoria: keyCategoria.Masculino,
    },
    {
      _id: keySubcategoria.Fem_divA.toString(),
      nombreSubcategoria: 'Divisional A',
      keySubcategoria: keySubcategoria.Fem_divA,
      keyCategoria: keyCategoria.Femenino,
    },
    {
      _id: keySubcategoria.Fem_divB.toString(),
      nombreSubcategoria: 'Divisional B',
      keySubcategoria: keySubcategoria.Fem_divB,
      keyCategoria: keyCategoria.Femenino,
    },
    {
      _id: keySubcategoria.Provincial.toString(),
      nombreSubcategoria: 'Provincial',
      keySubcategoria: keySubcategoria.Provincial,
      keyCategoria: keyCategoria.LNFA,
    },
    {
      _id: keySubcategoria.Regional.toString(),
      nombreSubcategoria: 'Regional',
      keySubcategoria: keySubcategoria.Regional,
      keyCategoria: keyCategoria.LNFA,
    },
    {
      _id: keySubcategoria.Nacional.toString(),
      nombreSubcategoria: 'Nacional',
      keySubcategoria: keySubcategoria.Nacional,
      keyCategoria: keyCategoria.LNFA,
    },
    {
      _id: keySubcategoria.Inferiores.toString(),
      nombreSubcategoria: 'Inferiores',
      keySubcategoria: keySubcategoria.Inferiores,
      keyCategoria: keyCategoria.Otras_Competiciones,
    },
    {
      _id: keySubcategoria.Ligas_Departamentales.toString(),
      nombreSubcategoria: 'Ligas Departamentales',
      keySubcategoria: keySubcategoria.Ligas_Departamentales,
      keyCategoria: keyCategoria.Otras_Competiciones,
    },
    {
      _id: keySubcategoria.Copas_y_Torneos.toString(),
      nombreSubcategoria: 'Copas y Torneos',
      keySubcategoria: keySubcategoria.Copas_y_Torneos,
      keyCategoria: keyCategoria.Otras_Competiciones,
    },
    {
      _id: keySubcategoria.Seleccion_Argentina.toString(),
      nombreSubcategoria: 'Selección Argentina',
      keySubcategoria: keySubcategoria.Seleccion_Argentina,
      keyCategoria: keyCategoria.Otras_Competiciones,
    },
  ];

  for await (const subcategoria of subCategoriaArray) {
    let subCategoria: ISubCategorias = new modeloSubCategorias(subcategoria);
    await subCategoria.save();
  }
};

let inicializarUsuarios = async () => {
  const usuarioArray = [
    {
      nombreUsuario: 'juan.hogalde',
      email: 'juanhogalde@hotmail.com',
      password: 'juanchohoga8899',
      keyRol: 2,
      token: '',
    },
    {
      nombreUsuario: 'admin.lowa',
      email: 'admin@lowa.com',
      password: '0000',
      keyRol: 1,
      token: '',
    },
    {
      nombreUsuario: 'editor1',
      email: 'editor1@lowa.com',
      password: 12345,
      keyRol: 3,
      token: '',
    },
    {
      nombreUsuario: 'editor2',
      email: 'editor2@lowa.com',
      password: 12345,
      keyRol: 3,
      token: '',
    },
    {
      nombreUsuario: 'eliana',
      email: 'elianabernaldez@gmail.com',
      password: 12345,
      keyRol: 2,
      token: '',
    },
  ];
  for await (const usuario of usuarioArray) {
    let user: IUsuarios = new modeloUsuarios(usuario);
    await user.save();
  }
};

let incializarMedidasPublicitarias = async () => {
  const medidaArreglo = [
    {
      _id: '1',
      ancho: 245,
      alto: 245,
      ubicacion: 'cuadrado',
      direccion: 'Inicio->Partidos->Derecha1',
      keyMedidas: 1,
      disponible: true,
    },
    {
      _id: '2',
      ancho: 245,
      alto: 245,
      ubicacion: 'cuadrado',
      direccion: 'Inicio->Partidos->Derecha2',
      keyMedidas: 2,
      disponible: true,
    },
    {
      _id: '3',
      ancho: 1136,
      alto: 199,
      ubicacion: 'horizontal',
      direccion: 'Inicio->Vivo->Abajo',
      keyMedidas: 3,
      disponible: true,
    },
    {
      _id: '4',
      ancho: 245,
      alto: 245,
      ubicacion: 'cuadrado',
      direccion: 'Desarrollada->Noticia->Derecha1',
      keyMedidas: 4,
      disponible: true,
    },
    {
      _id: '5',
      ancho: 700,
      alto: 500,
      ubicacion: 'modal',
      direccion: 'Inicio->Modal',
      keyMedidas: 5,
      disponible: true,
    },
    {
      _id: '6',
      ancho: 1136,
      alto: 199,
      ubicacion: 'horizontal',
      direccion: 'Inicio->Noticia->Abajo',
      keyMedidas: 6,
      disponible: true,
    },

    {
      _id: '7',
      ancho: 1136,
      alto: 199,
      ubicacion: 'horizontal',
      direccion: 'Desarrollada->Noticia->Abajo',
      keyMedidas: 7,
      disponible: true,
    },
  ];

  for await (const medida of medidaArreglo) {
    let medidaPublicidad: IMedidasPublicidad = new modeloMedidasPublicidad(medida);
    await medidaPublicidad.save();
  }
};

export const instalarBD = async (req: Request, res: Response) => {
  try {
    await inicializarCategorias();
    await inicializarSubCategorias();
    await inicializarUsuarios();
    await incializarMedidasPublicitarias();
    responder.sucess(req, res, 'Instalacion finalizada');
  } catch (error) {
    responder.error(req, res, error);
  }
};

export const migrar = async (req: Request, res: Response) => {
  try {
    let noticias = await modeloNoticias.find({});
    noticias.map(async n => {
      switch (n.keySubcategoria) {
        case 1: //M A
          if (n.keyCategoria == 2) {
            //fem a
            n.keyCategoria = 2;
            n.keySubcategoria = 6;
            n.idSubcategoria = '6';
            n.idCategoria = '2';
            await n.save();
          } else {
            n.keyCategoria = 1;
            n.keySubcategoria = 1;
            n.idSubcategoria = '1';
            n.idCategoria = '1';
            await n.save();
          }

          break;
        case 2: //M B
          if (n.keyCategoria == 2) {
            //fem b
            n.keyCategoria = 2;
            n.keySubcategoria = 7;
            n.idSubcategoria = '7';
            n.idCategoria = '2';
            await n.save();
          } else {
            n.keyCategoria = 1;
            n.keySubcategoria = 2;
            n.idSubcategoria = '2';
            n.idCategoria = '1';
            await n.save();
          }
          break;
        case 3: //M C
          n.keyCategoria = 1;
          n.keySubcategoria = 3;
          n.idSubcategoria = '3';
          n.idCategoria = '1';
          await n.save();
          break;
        case 4: //M D
          n.keyCategoria = 1;
          n.keySubcategoria = 4;
          n.idSubcategoria = '4';
          n.idCategoria = '1';
          await n.save();
          break;
        case 10: //F A
          n.keyCategoria = 2;
          n.keySubcategoria = 6;
          n.idSubcategoria = '6';
          n.idCategoria = '2';
          await n.save();
          break;
        case 11: //F B
          n.keyCategoria = 2;
          n.keySubcategoria = 7;
          n.idSubcategoria = '7';
          n.idCategoria = '2';
          await n.save();
          break;
        case 6: //Regio
          n.keyCategoria = 3;
          n.keySubcategoria = 10;
          n.idSubcategoria = '10';
          n.idCategoria = '3';
          await n.save();
          break;
        case 5: //Prov
          n.keyCategoria = 3;
          n.keySubcategoria = 9;
          n.idSubcategoria = '9';
          n.idCategoria = '3';
          await n.save();
          break;
        case 7: //Nac
          n.keyCategoria = 3;
          n.keySubcategoria = 11;
          n.idSubcategoria = '11';
          n.idCategoria = '3';
          await n.save();
          break;
        case 8: //inf
          n.keyCategoria = 4;
          n.keySubcategoria = 12;
          n.idSubcategoria = '12';
          n.idCategoria = '4';
          await n.save();
          break;
        case 9: //depa
          n.keyCategoria = 4;
          n.keySubcategoria = 13;
          n.idSubcategoria = '13';
          n.idCategoria = '4';
          await n.save();
          break;
        case 12: //Copa
          n.keyCategoria = 4;
          n.keySubcategoria = 14;
          n.idSubcategoria = '14';
          n.idCategoria = '4';
          await n.save();
          break;
        case 13: //Seleccion
          n.keyCategoria = 4;
          n.keySubcategoria = 15;
          n.idSubcategoria = '15';
          n.idCategoria = '4';
          await n.save();
          break;

        default:
          throw new Error('No se encontro la categoria');
          break;
      }
    });
    responder.sucess(req, res, 'Migracion finalizada');
  } catch (error) {
    responder.error(req, res, error);
  }
};
