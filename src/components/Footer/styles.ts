import styled from 'styled-components';
import FlexType from 'styles/flex';
import * as Flex from 'styles/flex/components';
import { padding } from 'styles/spaces';
import * as Breakpoint from 'styles/template/breakpoints';
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
