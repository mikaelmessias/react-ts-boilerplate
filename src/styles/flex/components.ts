import styled from 'styled-components';
import Flex from '.';

export const Container = styled.div`
  ${Flex.Container}
`;

export const Row = styled.div`
  ${Flex.Hybrid}
`;

export const Column = styled.div`
  ${Flex.Hybrid}

  flex-direction: column;
`;

export const Item = styled.div`
  ${Flex.Item}
`;
