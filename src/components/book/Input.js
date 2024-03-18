import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
    const {name, placeholder, onChange, onBlur, value, error, type, className} = props;
    return (
        <div className={`form__input_box ${error ? "error" : ""} ${className}`}>
            <input type={type}
                   name={name}
                   onBlur={onBlur}
                   value={value}
                   onChange={onChange}
                   placeholder={placeholder}
                   autoComplete="off"
            />
            <p>{error}</p>
        </div>
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    className: PropTypes.string
};

Input.defaultProps = {
    type: 'text',
    className: ''
};

export default Input;
