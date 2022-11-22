import React, {useState} from 'react';

const Button = ({type, className, children, clickHandler, toBeDisabled}) => {
    return (
        <button
            type={ type }
            className={ className }
            onClick={ clickHandler }
            disabled={ toBeDisabled }
            >
            { children }
        </button>
    );
};

export default Button;