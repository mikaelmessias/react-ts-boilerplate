import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import Router from 'router';
import GlobalStyle from 'styles/global';

const Root: FunctionComponent = () => (
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>
);

ReactDOM.render(<Root />, document.getElementById('root'));
