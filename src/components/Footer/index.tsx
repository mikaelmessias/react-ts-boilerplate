import React, { FunctionComponent } from 'react';
import * as S from './styles';

const Footer: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <S.ContainerFluid>
      <S.Row>
        <S.Column>
          {children}
        </S.Column>
      </S.Row>
    </S.ContainerFluid>
  );
};

export default Footer;
