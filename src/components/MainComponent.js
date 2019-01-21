import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import ProductDetail from './ProductDetailComponent';
import Product from './ProductComponent';
import { PRODUCTS } from '../shared/products';


class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      products: PRODUCTS,
      selectedProduct: null
    };
  }

  onProductSelect(productId) {
    this.setState({selectedProduct: productId})
}

  render() {
    return (
      <div className="App">
         <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Site Société</NavbarBrand>
          </div>
        </Navbar>
        <Product products={this.state.products} 
        onClick={ (productId ) => this.onProductSelect(productId) }/>
        <ProductDetail product={ this.state.products.filter( 
            (product) => product.id === this.state.selectedProduct )[0]} 
            />
      </div>
    );
  }
}

export default Main;