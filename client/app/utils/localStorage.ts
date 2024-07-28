interface Styles {
    primary: React.CSSProperties;
    secondary: React.CSSProperties;
  }
  
  export const getStoredConfig = (): Styles | null => {
    if (typeof window !== 'undefined') {
      const config = localStorage.getItem('componentConfig');
      return config ? JSON.parse(config) : null;
    }
    return null;
  };
  
  export const storeConfig = (config: Styles): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('componentConfig', JSON.stringify(config));
    }
  };
  