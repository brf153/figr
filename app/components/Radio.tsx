import React from 'react';
import { Styles } from '../consts/types';

interface RadioProps {
  variant: 'primary' | 'secondary';
  styles: Styles
}

const Radio: React.FC<RadioProps> = ({ variant, styles }) => {
  console.log("styles", styles[variant]);
  return (
    <input checked type="radio" style={{height: styles[variant].paddingTop, width:styles[variant].paddingTop,accentColor:styles[variant].backgroundColor}} />
  );
};

export default Radio;

// style={styles[variant]}