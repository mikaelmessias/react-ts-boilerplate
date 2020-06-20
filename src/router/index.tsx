import React, { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router: FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact />
    </Switch>
  </BrowserRouter>
);

export default Router;
