import IUsuarios from '../Componentes/Usuarios/Usuarios_Interface';
import ICategorias from '../Componentes/Categorias/Categorias_Interface';
import ISubCategorias from 'src/Componentes/Subcategorias/Subcategorias_Interface';
import IMedidasPublicidad from 'src/Componentes/MedidasPublicidad/MedidasPublicidad_Interface';
import modeloUsuarios from '../Componentes/Usuarios/Usuarios_Model';
import modeloCategorias from '../Componentes/Categorias/Categorias_Model';
import modeloSubCategorias from '../Componentes/Subcategorias/Subcategorias_Model';
import modeloMedidasPublicidad from '../Componentes/MedidasPublicidad/MedidasPublicidad_Model';

let inicializarCategorias = async () => {
  const categoria1: ICategorias = new modeloCategorias({
    nombreCategoria: 'Femenino',
    keyCategoria: 2,
    idSubcategorias: [],
  });
  categoria1.save();
  const categoria2: ICategorias = new modeloCategorias({
    nombreCategoria: 'Masculino',
    keyCategoria: 1,
    idSubcategorias: [],
  });
  categoria2.save();
};

let inicializarSubCategorias = async () => {
  const subCategoria1: ISubCategorias = new modeloSubCategorias({
    nombreSubcategoria: 'Divisional A',
    keySubcategoria: 1,
  });
  subCategoria1.save();
  const subCategoria2: ISubCategorias = new modeloSubCategorias({
    nombreSubcategoria: 'Divisional B',
    keySubcategoria: 2,
  });
  subCategoria2.save();
  const subCategoria3: ISubCategorias = new modeloSubCategorias({
    nombreSubcategoria: 'Divisional C',
    keySubcategoria: 3,
  });
  subCategoria3.save();
  const subCategoria4: ISubCategorias = new modeloSubCategorias({
    nombreSubcategoria: 'Divisional D',
    keySubcategoria: 4,
  });
  subCategoria4.save();
};

let inicializarUsuarios = async () => {
  const usuario1: IUsuarios = new modeloUsuarios({
    nombreUsuario: 'emanuel',
    email: 'emanuelledesma.9427@gmail.com',
    password: 12345,
    keyRol: 2,
    token: '',
  });
  usuario1.save();
  const usuario2: IUsuarios = new modeloUsuarios({
    nombreUsuario: 'eliana',
    email: 'elianabernaldez@gmail.com',
    password: 12345,
    keyRol: 2,
    token: '',
  });
  usuario2.save();
};

let incializarMedidasPublicitarias = async () => {
  const medida1: IMedidasPublicidad = new modeloMedidasPublicidad({
    ancho: 245,
    alto: 245,
    ubicacion: 'cuadrado',
    direccion: 'Inicio->Partidos->Derecha1',
    keyMedidas: 1,
  });
  medida1.save();
  const medida2: IMedidasPublicidad = new modeloMedidasPublicidad({
    ancho: 245,
    alto: 245,
    ubicacion: 'cuadrado',
    direccion: 'Inicio->Partidos->Derecha2',
    keyMedidas: 2,
  });
  medida2.save();
  const medida3: IMedidasPublicidad = new modeloMedidasPublicidad({
    ancho: 1136,
    alto: 99,
    ubicacion: 'horizontal',
    direccion: 'Inicio->Vivo->Abajo',
    keyMedidas: 3,
  });
  medida3.save();
  const medida4: IMedidasPublicidad = new modeloMedidasPublicidad({
    ancho: 245,
    alto: 245,
    ubicacion: 'cuadrado',
    direccion: 'Desarrollada->Noticia->Derecha1',
    keyMedidas: 4,
  });
  medida4.save();
  const medida5: IMedidasPublicidad = new modeloMedidasPublicidad({
    ancho: 300,
    alto: 300,
    ubicacion: 'modal',
    direccion: 'Inicio->Modal->xxxxxxx',
    keyMedidas: 5,
  });
  medida5.save();
};

export const instalarBD = async () => {
  try {
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
