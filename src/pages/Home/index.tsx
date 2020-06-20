import React, { FunctionComponent } from 'react';
import Link from 'types/Link';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import * as Flex from 'styles/flex/components';
import * as S from './styles';

const Home: FunctionComponent = () => {
  const links: Link[] = [
    { to: '/', label: 'Home', active: false },
    { to: '/sobre', label: 'Sobre', active: false },
    { to: '/contato', label: 'Contato', active: false },
  ];

  return (
    <S.ContainerFluid>
      <Navbar title="Logo" links={links} />

      <Footer>
        <Flex.Item grow="1">
          © 2020 Company, Inc. Todos os direitos reservados.
        </Flex.Item>
      </Footer>
    </S.ContainerFluid>
  );
};

export default Home;
