import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Game from '../components/Game';
import Info from '../components/Info';
import NotFoundPage from '../components/NotFound';
import Footer from '../components/Footer';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Game} exact={true} />
        <Route path="/info" component={Info} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;