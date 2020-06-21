import styled from 'styled-components';
import FlexType from 'styles/flex';

export const Container = styled.div`
  ${FlexType.Container};
`;

export const Row = styled.div`
  ${FlexType.Hybrid}
`;

export const Column = styled.div`
  ${FlexType.Hybrid}

  flex-direction: column;
`;

export const Item = styled.div`
  ${FlexType.Item}
`;
