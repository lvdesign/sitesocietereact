import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import Home from './HomeComponent';
import Contact from './ContactComponent';
import Product from './ProductComponent';
import ProductDetail from './ProductDetailComponent';

import { PRODUCTS } from '../shared/products';
import { COMMENTS } from '../shared/comments';
import { Switch, Route, Redirect} from 'react-router-dom';


class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      products: PRODUCTS,
      comments: COMMENTS
      //selectedProduct: null
    };
  }

//   onProductSelect(productId) {
//     this.setState({selectedProduct: productId})
// }

  render() {

    const HomePage = () => {
      return(
          <Home product={ this.state.products.filter((product) => product.featured)[0]} />
      );
    }

    const ProductWithId = ({match}) => {
      return(
          <ProductDetail product={this.state.products.filter((product) => product.id === parseInt(match.params.productId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.productId === parseInt(match.params.productId,10))} />
      );
    };



    return (
      <div className="App">
        <Header />
       <Switch>
          <Route path="/home" component={ HomePage } />
          <Route exact path="/product" component={() => <Product products={this.state.products} />} />
          <Route path='/product/:productId' component={ProductWithId} />
          <Route exact path="/contactus" component={ Contact} />
          <Redirect to="/home" />
       </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;