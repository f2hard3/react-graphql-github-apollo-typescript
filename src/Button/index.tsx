/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import './style.css';

interface ButtonProps {
  children: any;
  className: string;
  color?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  color = 'black',
  type = 'button',
  ...props
}) => (
  // eslint-disable-next-line react/button-has-type
  <button className={`${className} Button Button_${color}`} type={type} {...props}>
    {children}
  </button>
);

export default Button;
