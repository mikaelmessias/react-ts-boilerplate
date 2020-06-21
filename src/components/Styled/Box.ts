import styled, { css } from 'styled-components';
import FlexType from 'styles/flex';
import { HybridProps } from 'styles/flex/props';
import { MarginBase } from 'styles/spaces';
import { MarginProps } from 'styles/spaces/props';

type HybridBoxProps = HybridProps & MarginProps;

const HybridBoxBase = css<HybridBoxProps>`
  ${FlexType.Hybrid};
  ${MarginBase};
`;

export const Section = styled.section`
  ${HybridBoxBase}
`;
