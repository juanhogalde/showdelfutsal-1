import React, {useEffect, useLayoutEffect, useState} from 'react';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputLowa from '../InputLowa/InputLowa';
import Selector from '../Selector/Selector';
import TarjetaZona from '../TarjetaZona/TarjetaZona';
import './Zonas.css';
import {BsPlusCircle} from 'react-icons/bs';
import {useHistory, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const options = [
  {value: 'Eliminatoria', label: 'Eliminatoria'},
  {value: 'Grupo', label: 'Grupo'},
  {value: 'Eliminatoria con Dif. Goles', label: 'Eliminatoria con Dif. Goles'},
];
const Zonas = () => {
  const history = useHistory();
  const {idCategoria, idSubcategoria} = useParams();
  const categoria = useSelector(state =>
    state.sotreDatosIniciales.categorias.find(categoria => categoria.value === idCategoria)
  );
  const subcategoria = useSelector(state =>
    state.sotreDatosIniciales.subcategorias.find(
      subcategoria => subcategoria.value === idSubcategoria
    )
  );
  console.log(subcategoria);
  const [datosZona, setDatosZona] = useState('');
  const [tipo, setTipo] = useState('');
  const [arrayZonasCreadas, setArrayZonasCreadas] = useState('');

  const escucharCambios = (name, value) => {
    console.log(name);
    console.log(value);

    setDatosZona({...datosZona, [name]: value});
  };
  const agregarZona = () => {
    let auxDatosZona = {};
    auxDatosZona.tituloZona = datosZona.tituloZona;
    auxDatosZona.tipo = tipo.value;
    setArrayZonasCreadas([...arrayZonasCreadas, auxDatosZona]);
  };
  const redireccionarEnfrentamiento = () => {
    console.log('redireccionar enfrentamiento');
    history.push('/Torneo/Nuevo/Campeonato/Zonas/Enfrentamiento');
  };

  /* useLayoutEffect(() => {
    if(categoria)
    return () => {};
  }, [categoria]); */

  return (
    <div className="CP-Zonas">
      <div>
        <h5>{categoria.label ? categoria.label : <Skeleton width="15%" />}</h5>
        <h6>{subcategoria.label ? subcategoria.label : <Skeleton width="10%" />}</h6>

        <InputLowa
          name="tituloZona"
          placeholder={'Ingrese Nombre/Zona'}
          onChange={e => escucharCambios(e.target.name, e.target.value)}
        ></InputLowa>
        <Selector
          placeholder="Seleccione Tipo"
          selectorConIcono={<BsPlusCircle />}
          options={options ? options : []}
          onChange={setTipo}
        ></Selector>
        <BotonLowa tituloboton="Agregar" onClick={() => agregarZona()}></BotonLowa>
        {arrayZonasCreadas && (
          <div className="CI-ZonasCreadas">
            <p className="titulo-ZonasCreadas">Zonas creadas</p>

            {arrayZonasCreadas.map((zona, index) => {
              console.log(zona);
              return (
                <TarjetaZona
                  redireccionarEnfrentamiento={redireccionarEnfrentamiento}
                  key={index}
                  indice={index}
                  datos={zona}
                ></TarjetaZona>
              );
            })}
          </div>
        )}
      </div>
      <div className="CI-BotonSiguiente-TarjetaZona">
        <BotonLowa tituloboton="Siguiente"></BotonLowa>
      </div>
    </div>
  );
};
export default Zonas;
