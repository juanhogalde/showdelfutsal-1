import React, {useState} from 'react';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputLowa from '../InputLowa/InputLowa';
import Selector from '../Selector/Selector';
import TarjetaZona from '../TarjetaZona/TarjetaZona';
import './Zonas.css';
import {BsPlusCircle} from 'react-icons/bs';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Alertas from '../Alertas/Alertas';
import {editarTorneo_accion} from '../../Redux/Torneos/AccionesTorneos';

const options = [
  {value: 1, label: 'Eliminatoria'},
  {value: 2, label: 'Grupo'},
  {value: 3, label: 'Eliminatoria con Dif. Goles'},
];
const Zonas = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {idCategoria, idSubcategoria} = useParams();
  const {torneo} = useSelector(state => state.storeTorneos);
  const categoria = useSelector(state =>
    state.sotreDatosIniciales.categorias.find(categoria => categoria.value === idCategoria)
  );
  const subcategoria = useSelector(state =>
    state.sotreDatosIniciales.subcategorias.find(
      subcategoria => subcategoria.value === idSubcategoria
    )
  );

  const [datosZona, setDatosZona] = useState('');
  const [tipo, setTipo] = useState('');
  const [arrayZonasCreadas, setArrayZonasCreadas] = useState('');

  const escucharCambios = (name, value) => {
    setDatosZona({...datosZona, [name]: value});
  };
  const agregarZona = () => {
    let auxDatosZona = {};
    Object.assign(auxDatosZona, torneo);
    auxDatosZona.nombreZona = datosZona.tituloZona;
    auxDatosZona.tipoZona = tipo.value;
    dispatch(editarTorneo_accion(auxDatosZona));
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
          name="nombreZona"
          placeholder={'Ingrese Nombre/Zona'}
          onChange={e => escucharCambios(e.target.name, e.target.value)}
        ></InputLowa>
        <Selector
          name="tipoZona"
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
      <Alertas mostrarSweet={false}></Alertas>
    </div>
  );
};
export default Zonas;
