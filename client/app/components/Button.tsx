import React from 'react';

interface Styles {
    primary: React.CSSProperties;
    secondary: React.CSSProperties;
  }

interface ButtonProps {
  variant: 'primary' | 'secondary';
  styles: Styles;
}

const Button: React.FC<ButtonProps> = ({ variant, styles }) => {
  return (
    <button style={styles[variant]}>
      Button
    </button>
  );
};

export default Button;

// style={styles[variant]}