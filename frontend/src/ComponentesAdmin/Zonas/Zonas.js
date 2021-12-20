import React, {useState} from 'react';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputLowa from '../InputLowa/InputLowa';
import Selector from '../Selector/Selector';
import TarjetaZona from '../TarjetaZona/TarjetaZona';
import './Zonas.css';
import {BsPlusCircle} from 'react-icons/bs';

const options = [
  {value: 'Eliminatoria', label: 'Eliminatoria'},
  {value: 'Grupo', label: 'Grupo'},
  {value: 'Eliminatoria con Dif. Goles', label: 'Eliminatoria con Dif. Goles'},
];
const Zonas = () => {
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
  return (
    <div className="CP-Zonas">
      <div>
        <h6>Divisional A</h6>
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
              return <TarjetaZona key={index} indice={index} datos={zona}></TarjetaZona>;
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
