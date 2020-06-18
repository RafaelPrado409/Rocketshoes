import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import Cart from './pages/Cart/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />{' '}
      <Route path="/cart" component={Cart} />{' '}
    </Switch>
  );
}
