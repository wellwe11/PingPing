import React from 'react';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  hover?: boolean;
  textPos?: 'start' | 'end' | 'center';
  textClass: string;
}

const Button = ({
  children = 'Please add text',
  size = 'medium',
  hover = false, // Effect enabled if user hovers
  textPos = 'center',
  className = '',
  textClass = '',
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`main-button main-button--${size} ${hover && 'main-button--hover'} main-button--${textPos} ${className}`}

      {...rest}
    >
      <span className={textClass}>{children}</span>
    </button>
  );
};

export default Button;
