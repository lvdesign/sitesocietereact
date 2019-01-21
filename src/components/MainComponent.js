import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import Home from './HomeComponent'
import Product from './ProductComponent';
import { PRODUCTS } from '../shared/products';

import { Switch, Route, Redirect} from 'react-router-dom'


class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      products: PRODUCTS,
      //selectedProduct: null
    };
  }

//   onProductSelect(productId) {
//     this.setState({selectedProduct: productId})
// }

  render() {

    const HomePage = () => {
      return(
          <Home />
      );
    }

    return (
      <div className="App">
        <Header />
       <Switch>
          <Route path="/home" component={ HomePage } />
          <Route exact path="/product" component={() => <Product products={this.state.products} />} />
          <Redirect to="/home" />
       </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;