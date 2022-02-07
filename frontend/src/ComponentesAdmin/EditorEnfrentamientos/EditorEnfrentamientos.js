import React, {useLayoutEffect, useState} from 'react';
import Selector from '../Selector/Selector';
import TarjetaEnfrentamiento from '../TarjetaEnfrentamiento/TarjetaEnfrentamiento';
import './EditorEnfrentamientos.css';
import {useSelector} from 'react-redux';
import Cargando from '../Cargando/Cargando';

const EditorEnfrentamientos = () => {
  const {torneos} = useSelector(state => state.storeTorneos);
  const {categorias, subcategorias} = useSelector(state => state.sotreDatosIniciales);

  const [torneoSeleccionado, setTorneoSeleccionado] = useState('');
  const [isDatosCargados, setIsDatosCargados] = useState(false);
  const [arrayTorneos, setArrayTorneos] = useState('');
  const [arrayCategorias, setArrayCategorias] = useState('');

  const escucharSelectorTorneo = value => {
    let auxTorneo = torneos.find(torneo => torneo._id === value.idTorneo);
    setTorneoSeleccionado(auxTorneo);
    setArrayCategorias('');
  };

  useLayoutEffect(() => {
    if (!arrayTorneos) {
      if (torneos) {
        let auxTorneos = [];
        if (torneos.length > 0) {
          auxTorneos = torneos.map((torneo, index) => {
            return {
              idTorneo: torneo._id,
              label: torneo.tituloTorneo,
              value: `${index + 1}`,
            };
          });
          setArrayTorneos(auxTorneos);
          setIsDatosCargados(true);
        }
      }
    }

    if (torneoSeleccionado) {
      if (!arrayCategorias) {
        let auxCategorias = [];
        torneoSeleccionado.idCategoria.forEach(keyCategoria => {
          let aux = categorias.find(categoria => categoria.value === keyCategoria);
          auxCategorias.push(aux);
        });
        console.log(auxCategorias);
        setArrayCategorias(auxCategorias);
      }
    }

    return () => {};
  }, [
    setArrayTorneos,
    setIsDatosCargados,
    torneos,
    torneoSeleccionado,
    arrayCategorias,
    arrayTorneos,
    categorias,
  ]);

  if (isDatosCargados) {
    return (
      <div className="CP-EditorEnfrentamientos">
        <Selector
          name="torneo"
          placeholder="Seleccione Torneo"
          options={arrayTorneos}
          onChange={value => escucharSelectorTorneo(value)}
        ></Selector>
        <Selector
          /* isDisabled={isHabilitarCategorias} */
          placeholder="Seleccione Categoría"
          options={arrayCategorias ? arrayCategorias : []}
          noOptionsMessage="Debe seleccionar un torneo."
        ></Selector>
        <Selector
          placeholder="Seleccione Subcategoría"
          noOptionsMessage="Debe seleccionar categoría."
        ></Selector>
        <Selector placeholder="Seleccione Zona"></Selector>
        <TarjetaEnfrentamiento></TarjetaEnfrentamiento>
      </div>
    );
  } else {
    return (
      <div className="CP-Cargando-EditorEnfrentamientos">
        <Cargando></Cargando>
        <h5>Obteniendo Datos...</h5>
      </div>
    );
  }
};
export default EditorEnfrentamientos;
