import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import Home from './HomeComponent';
import Contact from './ContactComponent';
import Product from './ProductComponent';
import ProductDetail from './ProductDetailComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { addComment, fetchProducts, productsLoading } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
      products: state.products,
      comments: state.comments
    }
}

// action
const mapDispatchToProps = (dispatch) => ({
  addComment: ( productId, rating, author, comment) => dispatch( addComment( productId, rating, author, comment) ),
  fetchProducts: () => { dispatch(fetchProducts() )},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
})

class Main extends Component {
  // no constructor

  // active fetch
  componentDidMount(){
    this.props.fetchProducts();
  }


  render() {

    const HomePage = () => {
      return(
          <Home product={ this.props.products.products.filter((product) => product.featured)[0]}
          productsLoading = {this.props.products.isLoading}
          productsErrMess = {this.props.products.errMess}
         
          />
      );
    }

    const ProductWithId = ({match}) => {
      return(
          <ProductDetail 
            product={this.props.products.products.filter((product) => product.id === parseInt(match.params.productId,10))[0]} 
            isLoading = {this.props.products.isLoading}
            errMess = {this.props.products.errMess}            
            comments={this.props.comments.filter((comment) => comment.productId === parseInt(match.params.productId,10))} 
            addComment ={this.props.addComment}
          />
          );
    };



    return (
      <div className="App">
        <Header />
       <Switch>
          <Route path="/home" component={ HomePage } />
          <Route exact path="/product" component={() => <Product products={this.props.products} />} />
          <Route path='/product/:productId' component={ProductWithId} />
          <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
          <Redirect to="/home" />
       </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps )(Main));