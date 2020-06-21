import styled, { css } from 'styled-components';
import FlexType from 'styles/flex';
import { HybridProps } from 'styles/flex/props';
import { MarginProps } from 'styles/spaces/props';

const MarginBase = css((props: MarginProps) => `
  &.margin-top {
    margin-top: ${props.marginSize};
  }
`);

type HybridBoxProps = HybridProps & MarginProps;

const HybridBoxBase = css<HybridBoxProps>`
  ${FlexType.Hybrid};
  ${MarginBase};
`;

export const Section = styled.section`
  ${HybridBoxBase}
`;
