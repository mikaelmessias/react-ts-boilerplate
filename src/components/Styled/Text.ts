import styled from 'styled-components';
import { font, WeightBase, WeightProps } from 'styles/sizes';
import { MarginBase, MarginProps } from 'styles/spaces';

type HeadingProps = MarginProps & WeightProps;

const H1 = styled.h1<HeadingProps>`
  font-weight: ${font.weight.bold};
  font-size: ${font.size.h1};
  ${MarginBase};
  ${WeightBase};
`;

const H2 = styled.h2<HeadingProps>`
  font-weight: ${font.weight.bold};
  font-size: ${font.size.h2};
  ${MarginBase};
  ${WeightBase};
`;

const H3 = styled.h3<HeadingProps>`
  font-weight: ${font.weight.light};
  font-size: ${font.size.h3};
  ${MarginBase};
  ${WeightBase};
`;

const H4 = styled.h4<HeadingProps>`
  font-weight: ${font.weight.light};
  font-size: ${font.size.h4};
  ${MarginBase};
  ${WeightBase};
`;

export const Heading = {
  H1, H2, H3, H4,
};

const Big = styled.p`
  font-size: ${font.size.p.big};
  ${WeightBase};
`;

const Medium = styled.p`
  font-size: ${font.size.p.medium};
  ${WeightBase};
`;

const Small = styled.p`
  font-size: ${font.size.p.small};
  ${WeightBase};
`;

export const Paragraph = {
  Big, Medium, Small,
};
