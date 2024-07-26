import React from 'react';
import { Styles } from '../consts/types';

interface CheckboxProps {
  variant: 'primary' | 'secondary';
  styles: Styles
}

const Checkbox: React.FC<CheckboxProps> = ({ variant, styles }) => {
  return (
    <input checked type="checkbox" style={{height: styles[variant].paddingTop, width:styles[variant].paddingTop,accentColor:styles[variant].backgroundColor}} />
  );
};

export default Checkbox;
