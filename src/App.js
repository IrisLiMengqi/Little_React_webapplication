import React, { Component } from 'react';
import './Assents/css/default.min.css';
import{
	BrowserRouter as Router,
	Route,
	Link
}from 'react-router-dom';

import Header from './components/headercomponents/header'
import Footer from './components/footercomponents/footer'
import Homepage from './components/pages/homePage'
import Products from './components/pages/productsPage'
class App extends Component {
  render() {
    return (
    	<Router>
        <div className="App">
      	<Header />

      		<Route exact path = '/' component={Homepage} />
      		<Route exact path = '/Products' component={Products} />

      	<Footer/>
        </div>
        </Router>
    );
  }
}

export default App;
