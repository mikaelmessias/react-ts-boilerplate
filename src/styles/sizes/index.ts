import { css } from 'styled-components';
import FontType, { WeightProps } from './props';

export const border = {
  outer: '1px',
  inner: '1px',
};

export const heading = {
  h1: '40px',
  h2: '32px',
  h3: '26px',
  h4: '18px',
};

export const p = {
  small: '12px',
  medium: '16px',
  big: '20px',
};

export const weight = {
  bold: '700',
  regular: '500',
  light: '300',
};

export const font: FontType = {
  size: {
    h1: '40px',
    h2: '32px',
    h3: '26px',
    h4: '18px',
    p,
  },
  weight,
};

export const WeightBase = css((props: WeightProps) => `
  font-weight: ${props.bold && font.weight.bold};
  font-weight: ${props.regular && font.weight.regular};
  font-weight: ${props.light && font.weight.light};
`);

export * from './props';
