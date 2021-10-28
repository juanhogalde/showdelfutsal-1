export const prueba = 'prueba';
export const obtenerNoticiasFiltradas = 'obtenerNoticiasFiltradas';
export const prueba_accion = () => {
  return {
    type: prueba,
  };
};
export const obtenerNoticiasFiltradas_accion = filtro => {
  return {
    type: obtenerNoticiasFiltradas,
    filtro: filtro,
  };
};
