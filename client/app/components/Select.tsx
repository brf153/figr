import React from 'react';
import { Styles } from '../consts/types';

interface SelectProps {
  variant: 'primary' | 'secondary';
  styles: Styles
}

const Select: React.FC<SelectProps> = ({ variant, styles }) => {
  return (
    <select style={styles[variant]}>
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
  );
};

export default Select;
