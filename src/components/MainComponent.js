import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import Home from './HomeComponent';
import Contact from './ContactComponent';
import Product from './ProductComponent';
import ProductDetail from './ProductDetailComponent';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { postComment, fetchProducts, fetchComments, postFeedback } from '../redux/ActionCreators';
// car addComment deja ds la boucle

const mapStateToProps = state => {
    return {
      products: state.products,
      comments: state.comments
    }
}

// action
const mapDispatchToProps = (dispatch) => ({
  postComment: ( productId, rating, author, comment) => dispatch(postComment( productId, rating, author, comment) ),
  fetchProducts: () => { dispatch(fetchProducts() )},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => { dispatch(fetchComments() )},
  postFeedback: ( firstname, lastname, telnum, email, agree, contactType, message) => dispatch( postFeedback(firstname,lastname,telnum,email,agree,contactType,message)),

})

class Main extends Component {
  // no constructor

  // active fetch
  componentDidMount(){
    this.props.fetchProducts();
    this.props.fetchComments();
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
            comments={this.props.comments.comments.filter((comment) => comment.productId === parseInt(match.params.productId,10))} 
            commentsErrMess = {this.props.comments.errMess}  
            //addComment ={this.props.addComment}
            postComment ={this.props.postComment}
          />
          );
    };

    

    return (
      <div className="App">
        <Header />
            <TransitionGroup>
              <CSSTransition key={ this.props.location.key} classNames="page" timeout={300} >
                  <Switch>
                      <Route path="/home" component={ HomePage } />
                      <Route exact path="/product" component={() => <Product products={this.props.products} />} />
                      <Route path='/product/:productId' component={ProductWithId} />
                      <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>} />
                      <Redirect to="/home" />
                  </Switch>
              </CSSTransition>
            </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps )(Main));