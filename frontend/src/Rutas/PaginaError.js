import React from 'react';

const PaginaError = ({mensaje}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <span>{mensaje ? mensaje : 'Error desconocido'}</span>;
    </div>
  );
};

export default PaginaError;
