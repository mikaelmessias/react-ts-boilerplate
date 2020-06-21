import { css } from 'styled-components';
import { MarginProps, PaddingProps } from 'styles/spaces/props';

export const margin = {
  heading: {
    bottom: '4px',
  },
  header: {
    top: '40px',
  },
  nav: {
    horizontal: '4px',
  },
};

export const padding = {
  box: {
    min: '16px',
    max: '32px',
  },
  nav: {
    horizontal: '16px',
    vertical: '24px',
    switch: {
      vertical: '24px',
      horizontal: '32px',
    },
  },
};

export const MarginBase = css((props: MarginProps) => `
  margin-left: ${props.marginLeft};
  margin-top: ${props.marginTop};
  margin-right: ${props.marginRight};
  margin-bottom: ${props.marginBottom};
`);

export const PaddingBase = css((props: PaddingProps) => `
  padding-left: ${props.paddingLeft};
  padding-top: ${props.paddingTop};
  padding-right: ${props.paddingRight};
  padding-bottom: ${props.paddingBottom};
`);

export * from './props';
