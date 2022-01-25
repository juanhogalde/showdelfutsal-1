import IUsuarios from '../Componentes/Usuarios/Usuarios_Interface';
import ICategorias from '../Componentes/Categorias/Categorias_Interface';
import ISubCategorias from 'src/Componentes/Subcategorias/Subcategorias_Interface';
import IMedidasPublicidad from 'src/Componentes/MedidasPublicidad/MedidasPublicidad_Interface';
import modeloUsuarios from '../Componentes/Usuarios/Usuarios_Model';
import modeloCategorias from '../Componentes/Categorias/Categorias_Model';
import modeloSubCategorias from '../Componentes/Subcategorias/Subcategorias_Model';
import modeloMedidasPublicidad from '../Componentes/MedidasPublicidad/MedidasPublicidad_Model';

let inicializarCategorias = async () => {
  const categoriaArray = [
    {
      nombreCategoria: 'Masculino',
      keyCategoria: 1,
      idSubcategorias: [],
    },
    {
      nombreCategoria: 'Femenino',
      keyCategoria: 2,
      idSubcategorias: [],
    },
    {
      nombreCategoria: 'Liga',
      keyCategoria: 3,
      idSubcategorias: [],
    },
    {
      nombreCategoria: 'Otras Competiciones',
      keyCategoria: 4,
      idSubcategorias: [],
    },
  ];
  for await (const categoria of categoriaArray) {
    modeloCategorias
      .findOne({keyCategoria: categoria.keyCategoria})
      .then((categoriaEncontrado: any) => {
        if (categoriaEncontrado) {
          categoriaEncontrado.nombreCategoria = categoria.nombreCategoria;
          categoriaEncontrado.keyCategoria = categoria.keyCategoria;
          categoriaEncontrado.idSubcategorias = categoria.idSubcategorias;
          categoriaEncontrado.save();
        } else {
          let categoriaa: ICategorias = new modeloCategorias(categoria);
          categoriaa.save();
        }
      });
  }
};

let inicializarSubCategorias = async () => {
  const subCategoriaArray = [
    {
      nombreSubcategoria: 'Divisional A',
      keySubcategoria: 1,
    },
    {
      nombreSubcategoria: 'Divisional B',
      keySubcategoria: 2,
    },
    {
      nombreSubcategoria: 'Divisional C',
      keySubcategoria: 3,
    },
    {
      nombreSubcategoria: 'Divisional D',
      keySubcategoria: 4,
    },
    {
      nombreSubcategoria: 'Provincial',
      keySubcategoria: 5,
    },
    {
      nombreSubcategoria: 'Regional',
      keySubcategoria: 6,
    },
    {
      nombreSubcategoria: 'Nacional',
      keySubcategoria: 7,
    },
    {
      nombreSubcategoria: 'Inferiores',
      keySubcategoria: 8,
    },
    {
      nombreSubcategoria: 'Liga Departamentales',
      keySubcategoria: 9,
    },
  ];
  for await (const subcategoria of subCategoriaArray) {
    modeloSubCategorias
      .findOne({keySubcategoria: subcategoria.keySubcategoria})
      .then((subcategoriaEncontrado: any) => {
        if (subcategoriaEncontrado) {
          subcategoriaEncontrado.nombreSubcategoria = subcategoria.nombreSubcategoria;
          subcategoriaEncontrado.keySubcategoria = subcategoria.keySubcategoria;
          subcategoriaEncontrado.save();
        } else {
          let subCategoria: ISubCategorias = new modeloSubCategorias(subcategoria);
          subCategoria.save();
        }
      });
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
    modeloUsuarios.findOne({email: usuario.email}).then((usuarioEncontrado: any) => {
      if (usuarioEncontrado) {
        usuarioEncontrado.nombreUsuario = usuario.nombreUsuario;
        usuarioEncontrado.email = usuario.email;
        usuarioEncontrado.password = usuario.password;
        usuarioEncontrado.keyRol = usuario.keyRol;
        usuarioEncontrado.token = usuario.token;
        usuarioEncontrado.save();
      } else {
        let user: IUsuarios = new modeloUsuarios(usuario);
        user.save();
      }
    });
  }
};

let incializarMedidasPublicitarias = async () => {
  const medidaArreglo = [
    {
      ancho: 245,
      alto: 245,
      ubicacion: 'cuadrado',
      direccion: 'Inicio->Partidos->Derecha1',
      keyMedidas: 1,
      disponible: true,
    },
    {
      ancho: 245,
      alto: 245,
      ubicacion: 'cuadrado',
      direccion: 'Inicio->Partidos->Derecha2',
      keyMedidas: 2,
      disponible: true,
    },
    {
      ancho: 1136,
      alto: 199,
      ubicacion: 'horizontal',
      direccion: 'Inicio->Vivo->Abajo',
      keyMedidas: 3,
      disponible: true,
    },
    {
      ancho: 700,
      alto: 500,
      ubicacion: 'modal',
      direccion: 'Inicio->Modal',
      keyMedidas: 5,
      disponible: true,
    },
    {
      ancho: 1136,
      alto: 199,
      ubicacion: 'horizontal',
      direccion: 'Inicio->Noticia->Abajo',
      keyMedidas: 6,
      disponible: true,
    },
    {
      ancho: 245,
      alto: 245,
      ubicacion: 'cuadrado',
      direccion: 'Desarrollada->Noticia->Derecha1',
      keyMedidas: 4,
      disponible: true,
    },
    {
      ancho: 1136,
      alto: 199,
      ubicacion: 'horizontal',
      direccion: 'Desarrollada->Noticia->Abajo',
      keyMedidas: 7,
      disponible: true,
    },
  ];
  for await (const medida of medidaArreglo) {
    modeloMedidasPublicidad
      .findOne({keyMedidas: medida.keyMedidas})
      .then((medidaEncontrada: any) => {
        if (medidaEncontrada) {
          medidaEncontrada.ancho = medida.ancho;
          medidaEncontrada.alto = medida.alto;
          medidaEncontrada.ubicacion = medida.ubicacion;
          medidaEncontrada.direccion = medida.direccion;
          medidaEncontrada.keyMedidas = medida.keyMedidas;
          if (medidaEncontrada.disponible) {
            medidaEncontrada.disponible = medida.disponible;
          }
          medidaEncontrada.save();
        } else {
          let medidaPublicidad: IMedidasPublicidad = new modeloMedidasPublicidad(medida);
          medidaPublicidad.save();
        }
      });
  }
};

export const instalarBD = async (bd: any) => {
  try {
    let eliminar = true;
    modeloMedidasPublicidad.find().then((medidaEncontrada: any) => {
      if (medidaEncontrada.length === 0) {
        eliminar = false;
      }
    });
    if (eliminar) {
      await bd.eliminarColeccion('modelomedidaspublicidads');
    }
    await inicializarCategorias();
    await inicializarSubCategorias();
    await inicializarUsuarios();
    await incializarMedidasPublicitarias();
    console.log('instalacion finalizada');
    return 'Instalacion finalizada';
  } catch (error) {
    console.log('Ocurrio un error: ' + error);
    return 'Ocurrio un error';
  }
};
