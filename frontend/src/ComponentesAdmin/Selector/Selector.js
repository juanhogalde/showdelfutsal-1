import React from 'react';
import './Selector.css';
import Select from 'react-select';
import {IoIosArrowDown} from 'react-icons/io';
/* import {colourOptions} from '../data'; */
// const options = [
//   {value: 'chocolate', label: 'Chocolate'},
//   {value: 'strawberry', label: 'Strawberry'},
//   {value: 'vanilla', label: 'Vanilla'},
// ];

const estilosPersonalizados = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid #00000020',
    /* color: state.isSelected ? 'red' : 'blue', */
    padding: 10,
  }),

  control: (provided, state) => ({
    // none of react-select's styles are passed to <Control />
    width: '100%',
    border: 'none',
    display: 'flex',
    boxShadow: '0px 3px 16px #00000014',
    paddingLeft: 10,
  }),

  /* valueContainer: () => ({
    bacground: 'red',
  }), */
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return {...provided, opacity, transition};
  },
};

const Selector = props => {
  const {
    // opciones,
    isMultipleOpcion,
    isCerrarMenuAlSeleccionar,
    onChange,
    placeholder,
    selectorConIcono,
    isDisabled,
    isCargando,
    isOpcionBuscar,
    name,
    options,
    noOptionsMessage,
  } = props;

  const componenteConIcono = {
    DropdownIndicator: () => {
      return (
        <div className="CI-IconoSelect">
          {selectorConIcono ? (
            <div className="icono-Control-Selector-Perzonalizado">{selectorConIcono}</div>
          ) : (
            <IoIosArrowDown className="icono-Control-Selector"></IoIosArrowDown>
          )}
        </div>
      );
    },
  };
  return (
    <div className="CP-Selector">
      <Select
        name={name}
        styles={estilosPersonalizados}
        closeMenuOnSelect={!isCerrarMenuAlSeleccionar}
        isMulti={isMultipleOpcion}
        options={options}
        onChange={onChange}
        /* value={opcionSeleccionada} */
        placeholder={placeholder}
        components={componenteConIcono}
        className={`${isDisabled ? '' : 'contenedorSelector'}`}
        isDisabled={isDisabled}
        isLoading={isCargando}
        isSearchable={isOpcionBuscar}
        noOptionsMessage={() => noOptionsMessage}
        autoFocus
      ></Select>
    </div>
  );
};
Selector.defaultProps = {
  isMultipleOpcion: false,
  isCerrarMenuAlSeleccionar: false,
  placeholder: 'Seleccionar',
  isDisabled: false,
  isCargando: false,
  isOpcionBuscar: true,
  noOptionsMessage: 'No hay opciones',
};
export default Selector;
