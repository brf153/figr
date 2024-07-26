import React from 'react';
import { Styles } from '../consts/types';

interface InputProps {
  type: string;
  variant: 'primary' | 'secondary';
  styles: Styles
}

const Input: React.FC<InputProps> = ({ type, variant, styles }) => {
  return (
    <input placeholder='Type' type={type} style={styles[variant]} />
  );
};

export default Input;
