import React from 'react';
import './TextAreaLowa.css';

const TextAreaLowa = props => {
  const {name, id, autoRize, placeholder, disabled, required, onChange} = props;

  return (
    <div className="CP-TextareaLowa">
      <textarea
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        disabled={props.disabled}
        required={props.required}
        autoCapitalize="sentences"
        className="componente-TextAreaLowa"
        onChange={props.onChange}
        autoComplete="off"
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
