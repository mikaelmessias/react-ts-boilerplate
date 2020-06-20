import styled, { css } from 'styled-components';
import { MarginProps } from 'types/Spaces';
import { font } from '../sizes';

const MarginBase = css((props: MarginProps) => `
  &.margin-bottom {
    margin-bottom: ${props.marginSize};
  }
`);

const WeightBase = css`
  &.bold {
    font-weight: ${font.weight.bold};
  }

  &.regular {
    font-weight: ${font.weight.regular};
  }

  &.light {
    font-weight: ${font.weight.light};
  }
`;

const H1 = styled.h1`
  ${MarginBase};
  ${WeightBase};
  font-weight: ${font.weight.bold};
  font-size: ${font.size.h1};
`;

const H2 = styled.h2`
  ${MarginBase};
  ${WeightBase};
  font-weight: ${font.weight.bold};
  font-size: ${font.size.h2};
`;

const H3 = styled.h3`
  ${MarginBase};
  ${WeightBase};
  font-weight: ${font.weight.light};
  font-size: ${font.size.h3};
`;

const H4 = styled.h4`
  ${MarginBase};
  ${WeightBase};
  font-weight: ${font.weight.light};
  font-size: ${font.size.h4};
`;

export const Heading = {
  H1, H2, H3, H4,
};

const Big = styled.p`
  ${WeightBase};
  font-size: ${font.size.p.big};
`;

const Medium = styled.p`
  ${WeightBase};
  font-size: ${font.size.p.medium};
`;

const Small = styled.p`
  ${WeightBase};
  font-size: ${font.size.p.small};
`;

export const Paragraph = {
  Big, Medium, Small,
};
