import styled from 'styled-components';
import * as Breakpoint from 'styles/breakpoints';
import FlexType from 'styles/flex';
import { padding, margin } from 'styles/spaces';

export const ContainerFluid = styled.div`
  ${FlexType.Hybrid}
  ${Breakpoint.Fluid}
  height: 100%;
  flex-direction: column;
`;

export const Container = styled.div`
  ${FlexType.Hybrid}
  ${Breakpoint.ExtraLarge}
  flex-direction: column;
  padding: 0 ${padding.box.max};

  @media(min-width: 768px) {
    padding: 0 ${padding.box.min};
  }
`;

export const Header = styled.header`
  ${FlexType.Hybrid}
  flex-direction: column;
  margin-top: ${margin.header.top};
`;
