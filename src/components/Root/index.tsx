import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GlobalStyle from 'styles';
import 'icons';

const Root: FunctionComponent = () => (
  <React.StrictMode>
    <GlobalStyle />
    <FontAwesomeIcon icon="check" size="lg" />
  </React.StrictMode>
);

export default Root;
