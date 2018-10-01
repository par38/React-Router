import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/page-de-contact" component={Contact} />
          <Route path="/produit-:productNumber(\d+)" component={Product} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routing;
