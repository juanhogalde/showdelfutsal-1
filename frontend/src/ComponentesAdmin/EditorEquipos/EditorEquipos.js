import Selector from '../Selector/Selector';
import InputLowa from '../InputLowa/InputLowa';
import BotonLowa from '../BotonLowa/BotonLowa';
import Alertas from '../Alertas/Alertas';
import React, {useState, useLayoutEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './EditorEquipos.css';
import {
  agregarEquipoNuevo,
  controlModalGenericoEditorEquipo_accion,
  modificarEquipo,
} from '../../Redux/DatosInciales/AccionesDatosIniciales';

const EditorEquipos = () => {
  const dispatch = useDispatch();
  const [equipos, setEquipos] = useState();
  const [equipo, setEquipo] = useState();
  const [equipoSeleccionado, setEquipoSeleccionado] = useState();
  const {categorias, subcategorias, listaEquipos, modalGenericoEditorEquipo} = useSelector(
    store => store.sotreDatosIniciales
  );

  //TODO: REVISAR ESTO
  const escucharSelectorEquipos = e => {
    setEquipo(e.data);
    setEquipoSeleccionado(e);
  };

  const guardarEquipos = () => {
    if (equipo._id) {
      dispatch(
        modificarEquipo({
          nombre: equipo.nombre,
          subcategoria: equipo.subcategoria.key,
          categoria: equipo.categoria.key,
          escudo: equipo.escudo !== equipoSeleccionado.data.escudo ? equipo.escudo : null,
          _id: equipoSeleccionado.data._id,
        })
      );
      //llamar accion editar equipo ()
    } else {
      dispatch(
        agregarEquipoNuevo({
          nombre: equipo.nombre,
          subcategoria: equipo.subcategoria.key,
          categoria: equipo.categoria.key,
          escudo: equipo.escudo,
        })
      );
      // llamar accion crear equipo (equipo)
    }
  };
  const cancelarGuardar = () => {
    setEquipoSeleccionado(null);
    setEquipo();
  };
  const respuestaModalGenerico = respuesta => {
    setEquipo(null);
    setEquipoSeleccionado(null);
    dispatch(
      controlModalGenericoEditorEquipo_accion({isMostrar: false, tipo: '', mensaje: '', data: null})
    );
  };

  return (
    <div className="CP-EditarEquipos">
      <div className="CI-EditarEquipos-Grilla">
        <div className="CI-Grilla-Form">
          <Selector
            name="equipos"
            placeholder="Seleccione Equipo"
            opcionSeleccionada={equipoSeleccionado}
            options={[
              {
                value: 'agregarEquipo',
                label: 'Agregar Equipo ...',
                data: {nombre: '', categoria: '', subcategoria: '', escudo: ''},
              },
              ...listaEquipos?.map(equipo => {
                return {value: equipo._id, label: equipo.nombre, data: equipo};
              }),
            ]}
            isDisabled={equipoSeleccionado}
            noOptionsMessage={'No hay equipos cargados.'}
            onChange={!equipoSeleccionado ? value => escucharSelectorEquipos(value) : null}
          />
          {equipo && (
            <>
              <InputLowa
                name="nombre"
                value={equipo.nombre}
                onChange={e => setEquipo({...equipo, [e.target.name]: e.target.value})}
                placeholder="Nombre Equipo"
              ></InputLowa>
              <Selector
                name="categoria"
                placeholder="Seleccione Categoria"
                options={categorias}
                opcionSeleccionada={equipo.categoria}
                noOptionsMessage={'No hay equipos cargados.'}
                onChange={value => setEquipo({...equipo, categoria: value})}
              />
              <Selector
                name="subcategoria"
                options={subcategorias}
                placeholder="Seleccione Subcategoria"
                opcionSeleccionada={equipo.subcategoria}
                noOptionsMessage={'No hay equipos cargados.'}
                onChange={value => {
                  setEquipo({...equipo, subcategoria: value});
                }}
              />
              <InputLowa
                name="escudo"
                type="file"
                onChange={(name, value) => setEquipo({...equipo, [name]: value[0]})}
              />
              <BotonLowa tituloboton="Guardar Cambios" onClick={() => guardarEquipos()} />
              <BotonLowa tituloboton="Cancelar" onClick={() => cancelarGuardar()} />
            </>
          )}
        </div>
      </div>
      <Alertas
        mostrarSweet={modalGenericoEditorEquipo.isMostrar}
        tipoDeSweet={modalGenericoEditorEquipo.tipo}
        subtitulo={modalGenericoEditorEquipo.mensaje}
        RespuestaDeSweet={respuestaModalGenerico}
      ></Alertas>
    </div>
  );
};

export default EditorEquipos;
