import React, { FunctionComponent } from 'react';
import Link from 'types/Link';
import Navbar from 'components/Navbar';

const Home: FunctionComponent = () => {
  const links: Link[] = [
    { to: '/', label: 'Home', active: false },
    { to: '/sobre', label: 'Sobre', active: false },
    { to: '/contato', label: 'Contato', active: false },
  ];

  return (
    <>
      <Navbar title="Logo" links={links} />
    </>
  );
};

export default Home;
