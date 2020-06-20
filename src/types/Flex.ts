import { ThemedStyledProps, FlattenInterpolation, StyledComponent } from 'styled-components';

export interface FlexContainerProps {
  readonly direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  readonly wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  readonly justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  readonly alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  readonly alignContent?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  readonly width?: string;
  readonly height?: string;
}

export interface FlexItemProps {
  readonly flex?: string;
  readonly grow?: string;
  readonly shrink?: string;
  readonly basis?: 'auto' | string;
  readonly order?: string;
  readonly alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

export type FlexHybridProps = FlexContainerProps & FlexItemProps;

export type FlexType = {
  Container: FlattenInterpolation<ThemedStyledProps<FlexContainerProps, any>>,
  Item: FlattenInterpolation<ThemedStyledProps<FlexItemProps, any>>,
  Hybrid: FlattenInterpolation<ThemedStyledProps<FlexHybridProps, any>>,
};

export type FlexContainer<
  C extends keyof JSX.IntrinsicElements | React.ComponentType<any>
  > = StyledComponent<C, any, FlexContainerProps, never>;

export type FlexHybrid<
  C extends keyof JSX.IntrinsicElements | React.ComponentType<any>
  > = StyledComponent<C, any, FlexHybridProps, never>;

export type FlexItem<
  C extends keyof JSX.IntrinsicElements | React.ComponentType<any>
  > = StyledComponent<C, any, FlexItemProps, never>;
