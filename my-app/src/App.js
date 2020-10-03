import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Home} from './components/Home'
import {Products} from './components/Products'
//import {Employee} from './components/Employee'
import {Navigation} from './components/Navigation'
//import Button from 'react-bootstrap/Button'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { ProductDetails } from './components/ProductDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">

        {/* <h3 className="m-3 d-flex justify-content-center">React JS with web api Demo</h3>
        <h5 className="m-3 d-flex justify-content-center">Employee Management Portal</h5> */}
        <Navigation />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/product' component={Products} />
          {/* <Route path='/employee' component={Employee} /> */}
          <Route path='/productdetails' component={ProductDetails} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
