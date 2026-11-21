import React from 'react';
import './Button.scss';

interface ButtonProps {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  hover?: boolean;
  textPos?: 'start' | 'end' | 'center';
}

const Button = ({
  children = 'Please add text',
  size = 'medium',
  hover = false, // Effect enabled if user hovers
  textPos = 'center',
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`main-button main-button--${size} ${hover ? 'main-button-hover' : ''} main-button--${textPos}`}

      {...rest}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
