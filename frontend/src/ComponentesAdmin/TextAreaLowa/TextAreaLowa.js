import React from 'react';
import './TextAreaLowa.css';

const TextAreaLowa = props => {
  const {name, value, id, autoRize, placeholder, disabled, required, onChange, readOnly} = props;

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
        value={value}
        autorize={autoRize}
        readOnly={readOnly}
      ></textarea>
    </div>
  );
};
TextAreaLowa.defaultProps = {
  id: '',
  name: '',
  placeholder: 'Placeholder',
  disabled: false,
  required: false,
};
export default TextAreaLowa;
