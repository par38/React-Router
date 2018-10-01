import React, { Component } from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Home from './Home';
import History from './History';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="nav">
            <NavLink exact to="/" activeClassName="selected"> Accueil </NavLink>
            <NavLink to="/History" activeClassName="selected"> History </NavLink>
          </div>
          <Switch>
            <Route exact path='/' className="texte" component={Home} />
            <Route path='/History' className="texte" component={History} />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
