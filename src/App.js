import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Menu } from './ui/menu/menu';
import { VynlHeader } from './ui/header/header';
import { Button } from './pages/button';
import { Input } from './pages/input';
import { Toggle } from './pages/toggle';
import vynlLogo from './assets/images/vynl_logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='page-container'>
          <VynlHeader>
            <div className='vynl-logo'>
              <img src={vynlLogo} alt='vynl-logo' />
            </div>
          </VynlHeader>

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
