import React, { FunctionComponent } from 'react';
import Link from 'types/Link';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { Box, Flex, Text } from 'components/Styled';
import * as S from './styles';

const Home: FunctionComponent = () => {
  const links: Link[] = [
    { to: '/', label: 'Home', active: true },
    { to: '/contato', label: 'Contato' },
    { to: '/sobre', label: 'Sobre' },
  ];

  const { Heading, Paragraph } = Text;

  return (
    <S.ContainerFluid>
      <Navbar title="Logo" links={links} />

      <S.Container>
        <S.Header>
          <Heading.H1>
            Homepage
          </Heading.H1>

          <Heading.H3 as="h2">
            Welcome to my our site!
          </Heading.H3>
        </S.Header>

        <Box.Section
          direction="column"
          marginTop="24px"
        >
          <Heading.H4
            as="h3"
            marginBottom="8px"
            bold
          >
            Section 1 - Text Big
          </Heading.H4>

          <Paragraph.Big>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil atque
            distinctio nostrum dolore rem quidem accusantium nobis nesciunt
            voluptatum earum! Velit vel mollitia eum et ea accusamus iure at ipsum?
          </Paragraph.Big>
        </Box.Section>

        <Box.Section
          direction="column"
          marginTop="24px"
        >
          <Heading.H4
            as="h3"
            marginBottom="8px"
            bold
          >
            Section 2 - Text Medium
          </Heading.H4>

          <Paragraph.Medium>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil atque
            distinctio nostrum dolore rem quidem accusantium nobis nesciunt
            voluptatum earum! Velit vel mollitia eum et ea accusamus iure at ipsum?
          </Paragraph.Medium>
        </Box.Section>

        <Box.Section
          direction="column"
          marginTop="24px"
        >
          <Heading.H4
            as="h3"
            marginBottom="8px"
            bold
          >
            Section 3 - Text Small
          </Heading.H4>

          <Paragraph.Small>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil atque
            distinctio nostrum dolore rem quidem accusantium nobis nesciunt
            voluptatum earum! Velit vel mollitia eum et ea accusamus iure at ipsum?
          </Paragraph.Small>
        </Box.Section>

        <Box.Section
          marginTop="40px"
        >
          <Heading.H2>
            Galeria
          </Heading.H2>
        </Box.Section>
      </S.Container>

      <Footer>
        <Flex.Item grow="1">
          © 2020 Company, Inc. Todos os direitos reservados.
        </Flex.Item>
      </Footer>
    </S.ContainerFluid>
  );
};

export default Home;
