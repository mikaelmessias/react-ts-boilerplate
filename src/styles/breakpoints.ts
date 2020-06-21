import { css } from 'styled-components';

export const Small = css`
  width: 100%;

  @media(min-width: 576px) {
    width: 540px;
    margin: 0 auto;
  }

  @media(min-width: 768px) {
    width: 720px;
    margin: 0 auto;
  }

  @media(min-width: 992px) {
    width: 960px;
    margin: 0 auto;
  }

  @media(min-width: 1200px) {
    width: 1140px;
    margin: 0 auto;
  }
`;

export const Medium = css`
  width: 100%;

  @media(min-width: 768px) {
    width: 720px;
    margin: 0 auto;
  }

  @media(min-width: 992px) {
    width: 960px;
    margin: 0 auto;
  }

  @media(min-width: 1200px) {
    width: 1140px;
    margin: 0 auto;
  }
`;

export const Large = css`
  width: 100%;

  @media(min-width: 992px) {
    width: 960px;
    margin: 0 auto;
  }

  @media(min-width: 1200px) {
    width: 1140px;
    margin: 0 auto;
  }
`;

export const ExtraLarge = css`
  width: 100%;

  @media(min-width: 1200px) {
    width: 1140px;
    margin: 0 auto;
  }
`;

export const Fluid = css`
  width: 100%;
`;
