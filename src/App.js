import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/home';
import { Button } from './pages/button';
import { Input } from './pages/input';
import { Menu } from './ui/menu/menu';

import './App.css';


import { AmberHeader } from './ui/header/header';

import logo from './assets/images/amber_logo.png';

/* ICONS */

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

/* Too add new icons from the Fontawesome solid free package, copy the name of the selected icon from the FA website and place the name 
with a coma afte the faHeart on the 11th line. Don't forget to place each added icon under the 16th line, 
as the same format at the 16th line. */

library.add(faHeart);

class App extends Component {
	render() {
		return (
			<Router>
				<div className="page-container">
					<AmberHeader>
						<div className="amber-logo">
							<img src={logo} alt="logo"/>
						</div>
					</AmberHeader>

					<div className="body-container">
						<div className="left-col">
							<Menu/>
						</div>
						<div className="content-col">
							<Switch>
								<Route path="/" exact component={Home} />
								<Route path="/button" component={Button} />
								<Route path="/input" component={Input} />
							</Switch>
						</div>
					</div>
				</div>
			</Router>
		);
	}
}



export default App;
