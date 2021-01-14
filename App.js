import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './platzi-badges/src/components/Layout';
import Home from './platzi-badges/src/pages/Home';
import Badges from './platzi-badges/src/pages/Badges';
import BadgeNew from './platzi-badges/src/pages/BadgeNew';
import NotFound from './platzi-badges/src/pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
