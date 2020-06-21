import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import * as Breakpoint from 'styles/breakpoints';
import FlexType from 'styles/flex';
import { border } from 'styles/sizes';
import { padding, margin } from 'styles/spaces';
import * as theme from 'styles/theme';
import keyframes from './keyframes';

export const ContainerFluid = styled.div`
  ${Breakpoint.Fluid};
  background-color: ${theme.background.white};
  box-shadow: 0px 0px 3px ${theme.shadow.gray};
`;

export const Row = styled.header`
  ${FlexType.Container};
  ${Breakpoint.ExtraLarge};
`;

export const Logo = styled.div`
  ${FlexType.Hybrid};
  align-items: center;
  z-index: 1;
  padding: ${padding.box.min} ${padding.box.max};
  background-color: ${theme.background.white};
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;

  @media(min-width: 768px) {
    padding: ${padding.box.min};
  }
`;

export const Nav = styled.nav`
  ${FlexType.Hybrid};
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: -260px;
  z-index: 0;
  text-align: center;
  background-color: ${theme.background.white};
  border-top: 1px solid ${theme.border.gray};
  border-bottom: 1px solid ${theme.border.gray};

  &.show {
    animation: ${keyframes.nav.show} 0.3s;
    top: 72px;
  }

  &.hide{
    animation: ${keyframes.nav.hide} 0.3s;
    top: -260px;
  }

  @media(min-width: 768px) {
    /* Reset */
    position: initial;
    width: initial;
    z-index: auto;
    top: 0px;
    border-top: 0;
    border-bottom: 0;
    box-shadow: none;
    /* Definições */
    flex-direction: row;
    justify-content: flex-end;
    align-items: stretch;
  }
`;

export const Link = styled(RouterLink)`
  padding: ${padding.nav.vertical} 0;
  transition: background-color 0.1s, color 0.1s;
  background-color: ${theme.background.white};
  color: ${theme.link.gray};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;

  &:not(:first-child) {
    border-top: ${border.inner} solid ${theme.border.gray};
  }

  &:hover, 
  &:hover.active {
    color: white;
    background-color: ${theme.background.gray};
  }

  &.active {
    color: ${theme.link.gray};
  }

  @media(min-width: 768px) {
    padding: 0 ${padding.nav.horizontal};

    .nav-item {
      display: flex;
      height: 100%;
      align-items: center;
    }

    &:not(:first-child) {
      border-top: unset;
    }

    &:not(:last-child){
      margin-right: ${margin.nav.horizontal};
    }
  }
`;

export const NavDisplaySwitch = styled.button`
  ${FlexType.Hybrid}
  z-index: 1;
  padding: ${padding.nav.switch.vertical} ${padding.nav.switch.horizontal};
  font-weight: 900;
  background-color: ${theme.background.white};
  transition: background-color 0.2s, color 0.2s;
  font-size: 24px;

  &.show {
    color: white;
    background-color: ${theme.background.gray};
  }
  
  @media (min-width: 768px) {
    display: none;
    z-index: auto;
  }
`;
