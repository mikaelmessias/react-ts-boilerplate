type FontType = {
  size: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    p: {
      small: string;
      medium: string;
      big: string;
    };
  };
  weight: {
    bold: string;
    regular: string;
    light: string;
  };
};

export interface WeightProps {
  light?: boolean;
  regular?: boolean;
  bold?: boolean;
}

export default FontType;
