import { ThemedStyledProps, FlattenInterpolation } from 'styled-components';

export interface ContainerProps {
  readonly direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  readonly wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  readonly justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  readonly alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  readonly alignContent?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  readonly width?: string;
  readonly height?: string;
}

export interface ItemProps {
  readonly flex?: string;
  readonly grow?: string;
  readonly shrink?: string;
  readonly basis?: 'auto' | string;
  readonly order?: string;
  readonly alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

export type HybridProps = ContainerProps & ItemProps;

export type FlexType = {
  Container: FlattenInterpolation<ThemedStyledProps<ContainerProps, any>>,
  Item: FlattenInterpolation<ThemedStyledProps<ItemProps, any>>,
  Hybrid: FlattenInterpolation<ThemedStyledProps<HybridProps, any>>,
};
