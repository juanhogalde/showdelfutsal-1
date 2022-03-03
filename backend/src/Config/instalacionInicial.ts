import IUsuarios from '../Componentes/Usuarios/Usuarios_Interface';
import ICategorias from '../Componentes/Categorias/Categorias_Interface';
import ISubCategorias from 'src/Componentes/Subcategorias/Subcategorias_Interface';
import IMedidasPublicidad from 'src/Componentes/MedidasPublicidad/MedidasPublicidad_Interface';
import IImagenes from 'src/Componentes/Imagenes/Imagenes_Interface';
import INoticias from 'src/Componentes/Noticias/Noticias_Interface';
import IGaleria from 'src/Componentes/Galeria/Galeria_Interface';
import modeloUsuarios from '../Componentes/Usuarios/Usuarios_Model';
import modeloCategorias from '../Componentes/Categorias/Categorias_Model';
import modeloSubCategorias from '../Componentes/Subcategorias/Subcategorias_Model';
import modeloEquipos from '../Componentes/Equipos/Equipos_Model';
import modeloGalerias from '../Componentes/Galeria/Galeria_Model';
import modeloNoticias from '../Componentes/Noticias/Noticias_Model';
import modeloImagenes from '../Componentes/Imagenes/Imagenes_Model';
import modeloMedidasPublicidad from '../Componentes/MedidasPublicidad/MedidasPublicidad_Model';
import {keyCategoria, keySubcategoria} from './enumeradores';
import responder from '../Middlewares/responder';
import {Request, Response} from 'express';
import IEquipos from 'src/Componentes/Equipos/Equipos_Interface';
import listadoEquipos from './listadoEquipos';
import listadoImagenes from './listadoImagenes';
import listadoNoticias from './listadoNoticias';
import listadoGalerias from './listadoGalerias';

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
    {
      _id: '8',
      ancho: 1136,
      alto: 199,
      ubicacion: 'horizontal',
      direccion: 'Inicio->Partidos->Abajo',
      keyMedidas: 8,
      disponible: true,
    },
    {
      _id: '9',
      ancho: 1136,
      alto: 199,
      ubicacion: 'horizontal',
      direccion: 'Inicio->Galeria->Abajo',
      keyMedidas: 9,
      disponible: true,
    },
    {
      _id: '10',
      ancho: 1136,
      alto: 199,
      ubicacion: 'horizontal',
      direccion: 'Noticias->Galeria->Masculino->Abajo',
      keyMedidas: 10,
      disponible: true,
    },
    {
      _id: '11',
      ancho: 1136,
      alto: 199,
      ubicacion: 'horizontal',
      direccion: 'Noticias->Galeria->Femenino->Abajo',
      keyMedidas: 11,
      disponible: true,
    },
    {
      _id: '12',
      ancho: 1136,
      alto: 199,
      ubicacion: 'horizontal',
      direccion: 'Noticias->Galeria->LNFA->Abajo',
      keyMedidas: 12,
      disponible: true,
    },
    {
      _id: '13',
      ancho: 245,
      alto: 245,
      ubicacion: 'cuadrado',
      direccion: 'Desarrollada->Noticia->Derecha->Inferior',
      keyMedidas: 13,
      disponible: true,
    },
  ];

  for await (const medida of medidaArreglo) {
    let medidaPublicidad: IMedidasPublicidad = new modeloMedidasPublicidad(medida);
    await medidaPublicidad.save();
  }
};

let inicializarEquipos = async () => {
  for await (const equipo of listadoEquipos) {
    let equipos: IEquipos = new modeloEquipos(equipo);
    await equipos.save();
  }
};

let inicializarNoticias = async () => {
  for await (const noticia of listadoNoticias) {
    let equipos: INoticias = new modeloNoticias(noticia);
    await equipos.save();
  }
};
let inicializarImagenes = async () => {
  for await (const imagen of listadoImagenes) {
    let imagenes: IImagenes = new modeloImagenes(imagen);
    await imagenes.save();
  }
};

let inicializarGalerias = async () => {
  for await (const galeria of listadoGalerias) {
    let galerias: IGaleria = new modeloGalerias(galeria);
    await galerias.save();
  }
};

export const instalarBD = async (req: Request, res: Response) => {
  try {
    await inicializarCategorias();
    await inicializarSubCategorias();
    await inicializarUsuarios();
    await incializarMedidasPublicitarias();
    await inicializarEquipos();
    await inicializarGalerias();
    await inicializarNoticias();
    await inicializarImagenes();
    responder.sucess(req, res, 'Instalacion finalizada');
  } catch (error) {
    responder.error(req, res, error);
  }
};
