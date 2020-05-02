import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact />
    </Switch>
  </BrowserRouter>
);

export default Router;
