import styled from 'styled-components';
import FlexType from 'styles/flex';
import * as Breakpoint from 'styles/template/breakpoints';

export const ContainerFluid = styled.div`
  ${FlexType.Hybrid}
  ${Breakpoint.Fluid}
  height: 100%;
  flex-direction: column;
`;
