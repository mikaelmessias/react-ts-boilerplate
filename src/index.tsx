import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from 'styles';
// import Root from './components/Root';

const Root: FunctionComponent = () => (
  <React.StrictMode>
    <GlobalStyle />
  </React.StrictMode>
);

ReactDOM.render(<Root />, document.getElementById('root'));
