import React from 'react';
import 'icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GlobalStyle from 'styles';

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <FontAwesomeIcon icon="user" size="lg" />
    </React.StrictMode>
  );
}

export default App;
