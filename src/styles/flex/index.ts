import { css } from 'styled-components';
import {
  FlexItemProps, FlexContainerProps, FlexHybridProps, FlexType,
} from 'types/Flex';

const Container = css<FlexContainerProps>((props) => `
  display: flex;
  flex-direction: ${props.direction || 'row'};
  flex-wrap: ${props.wrap || 'nowrap'};
  justify-content: ${props.justifyContent || 'flex-start'};
  align-items: ${props.alignItems || 'stretch'};
  align-content: ${props.alignContent || 'stretch'};
  width: ${props.width || 'auto'};
  height: ${props.height || 'auto'};
`);

const Item = css<FlexItemProps>((props) => `
  flex: ${props.flex || '0 1 auto'};
  flex-grow: ${props.grow || '0'};
  flex-shrink: ${props.shrink || '1'};
  flex-basis: ${props.basis || 'auto'};
  order: ${props.order || '0'};
  align-self: ${props.alignSelf || 'auto'};
`);

const Hybrid = css<FlexHybridProps>`
  ${Container}
  ${Item}
`;

const Type: FlexType = {
  Container,
  Item,
  Hybrid,
};

export default Type;
