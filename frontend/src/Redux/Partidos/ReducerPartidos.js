import {} from './AccionPartidos';

const partidosPorDefecto = {
  partidos: [],
  isPartido: {isMostrar: false, tipo: '', mensaje: '', isExito: false, isError: false},
};
const storePartidos = (state = partidosPorDefecto, accion) => {
  switch (accion.type) {
    default:
      return state;
  }
};
export default storePartidos;
