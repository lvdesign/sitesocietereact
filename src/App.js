import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

import Product from './components/ProductComponent';
import { PRODUCTS } from './shared/products';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      products: PRODUCTS
    };
  }

  render() {
    return (
      <div className="App">
         <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Site Société</NavbarBrand>
          </div>
        </Navbar>
        <Product products={this.state.products} />
      </div>
    );
  }
}

export default App;
