import React from 'react';
import {Link} from 'react-router-dom';
import './TarjetaPanel.css';
const TarjetaPanel = ({url = '', tituloPanel = 'Titulo', linkTo = ''}) => {
  return (
    <div className="CP-TarjetaPanel">
      <h5>{tituloPanel}</h5>
      <img className="imagen-TarjetaPanel" alt="" src={url}></img>
    </div>
  );
};
export default TarjetaPanel;
