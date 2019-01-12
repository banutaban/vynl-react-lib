import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Menu } from './ui/menu/menu';
import { AmberHeader } from './ui/header/header';
import { Button } from './pages/button';
import { Input } from './pages/input';
import { Toggle } from './pages/toggle';
import amberLogo from './assets/images/amber_logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='page-container'>
          <AmberHeader>
            <div className='amber-logo'>
              <img src={amberLogo} alt='amber-logo' />
            </div>
          </AmberHeader>

          <div className='body-container'>
            <div className='left-col'>
              <Menu />
            </div>
            <div className='content-col'>
              <Switch>
                <Route path='/' exact redirect='/button' />
                <Route path='/button' component={Button} />
                <Route path='/input' component={Input} />
                <Route path='/toggle' component={Toggle} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
