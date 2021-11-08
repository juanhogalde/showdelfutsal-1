import React from 'react';
import './TextAreaLowa.css';

const TextAreaLowa = props => {
  const {name, id, autoRize, placeholder, disabled, required, onChange} = props;

  return (
    <div className="CP-TextareaLowa">
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        autoCapitalize="sentences"
        className="componente-TextAreaLowa"
        onChange={onChange}
        autoComplete="off"
        autorize={autoRize}
      ></textarea>
    </div>
  );
};
TextAreaLowa.defaultProps = {
  id: '',
  neame: '',
  placeholder: 'Placeholder',
  disabled: false,
  required: false,
};
export default TextAreaLowa;
