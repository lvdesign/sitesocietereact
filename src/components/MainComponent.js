import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import Home from './HomeComponent';
import Contact from './ContactComponent';
import Product from './ProductComponent';
import ProductDetail from './ProductDetailComponent';


import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      products: state.products,
      comments: state.comments
    }
}


class Main extends Component {

  // constructor(props){
  //   super(props);
  // }



  render() {

    const HomePage = () => {
      return(
          <Home product={ this.props.products.filter((product) => product.featured)[0]} />
      );
    }

    const ProductWithId = ({match}) => {
      return(
          <ProductDetail product={this.props.products.filter((product) => product.id === parseInt(match.params.productId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.productId === parseInt(match.params.productId,10))} />
      );
    };



    return (
      <div className="App">
        <Header />
       <Switch>
          <Route path="/home" component={ HomePage } />
          <Route exact path="/product" component={() => <Product products={this.props.products} />} />
          <Route path='/product/:productId' component={ProductWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
       </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));