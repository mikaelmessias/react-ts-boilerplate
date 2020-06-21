import styled from 'styled-components';
import * as Flex from 'components/Styled/Flex';
import * as Breakpoint from 'styles/breakpoints';
import FlexType from 'styles/flex';
import { padding } from 'styles/spaces';
import * as theme from 'styles/theme';

export const ContainerFluid = styled.footer`
  ${FlexType.Hybrid};
  height: 100%;
  align-items: flex-end;
`;

export const Row = styled(Flex.Row)`
  ${Breakpoint.Fluid}

  padding: ${padding.box.min};
  border-top: 1px solid ${theme.border.gray};
  font-size: 13px;
`;

export const Column = styled(Flex.Column)`
  ${Breakpoint.ExtraLarge}
`;
