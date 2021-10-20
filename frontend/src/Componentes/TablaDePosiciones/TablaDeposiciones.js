import React from 'react';
import './TablaDePosiciones.css';
import escudo_alianza from '../../Static/Img/escudo_alianza.png';
import escudo_huarpes from '../../Static/Img/escudo_huarpes.png';

var arrayTabla = [
  {clave: 1, valor: 10},
  {clave: 2, valor: 20},
  {clave: 3, valor: 30},
  {clave: 1, valor: 10},
  {clave: 2, valor: 20},
  {clave: 3, valor: 30},
  {clave: 1, valor: 10},
  {clave: 2, valor: 20},
];
const TablaDeposiciones = () => {
  return (
    <div className="CP-TablaDePosiciones">
      <div className="CI-Categoria-TablaDePosiciones">
        <p>Categoría</p>
      </div>
      <div className="CI-Cabecera-TablaDePosiciones">
        <p>Equipo</p>
        <p>Pts</p>
        <p>PJ</p>
        <p>PG</p>
        <p>PE</p>
        <p>PP</p>
        <p>GF</p>
        <p>GC</p>
        <p>Dif.</p>
      </div>
      {arrayTabla.map(() => {
        return (
          <div className="CI-Cuerpo-TablaDePosiciones">
            <div className="equipo-Cuerpo-Tabla">
              <div className="escudo-Tabla">
                <img alt="" src={escudo_alianza}></img>
              </div>
              <p>Club Atlético Alianza</p>
            </div>
            <div className="contadores-Cuerpo-Tabla">
              <p>2</p>
            </div>
            <div className="contadores-Cuerpo-Tabla">
              <p>2</p>
            </div>
            <div className="contadores-Cuerpo-Tabla">
              <p>2</p>
            </div>
            <div className="contadores-Cuerpo-Tabla">
              <p>2</p>
            </div>
            <div className="contadores-Cuerpo-Tabla">
              <p>2</p>
            </div>
            <div className="contadores-Cuerpo-Tabla">
              <p>2</p>
            </div>
            <div className="contadores-Cuerpo-Tabla">
              <p>2</p>
            </div>
            <div className="contadores-Cuerpo-Tabla">
              <p>2</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TablaDeposiciones;
