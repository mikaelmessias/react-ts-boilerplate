import styled, { css } from 'styled-components';
import { FlexHybridProps } from 'types/Flex';
import { MarginProps } from 'types/Spaces';
import FlexType from '../flex';

const MarginBase = css((props: MarginProps) => `
  &.margin-top {
    margin-top: ${props.marginSize};
  }
`);

type HybridBoxProps = FlexHybridProps & MarginProps;

const HybridBoxBase = css<HybridBoxProps>`
  ${FlexType.Hybrid};
  ${MarginBase};
`;

export const Section = styled.section`
  ${HybridBoxBase}
`;
