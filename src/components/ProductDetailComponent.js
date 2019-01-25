import React, { Component } from 'react';
import { Button, Row, Col, Label, Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading} from './LoadingComponent';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component{

    constructor(props){
        super(props);
    
        this.state = {
          isOpen: false
        };
    
        this.toggleCommentModal = this.toggleCommentModal.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
      }

      //
      toggleCommentModal(){
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      handleCommentSubmit(values){ // send to comments
        this.toggleCommentModal();
        this.props.addComment(this.props.productId, values.rating, values.author, values.comment);
        console.log("Current state is : " + JSON.stringify(values));
        //alert("Current state is : " + JSON.stringify(values));
      }

      render(){
          return(
            <div>         
            <Button outline onClick={this.toggleCommentModal} >
                        <span className="fa fa-pencil fa-lg"></span> Submit Comment
            </Button>
          
            <Modal isOpen={ this.state.isOpen } toggle={this.toggleCommentModal}>
              <ModalHeader toggle={this.toggleCommentModal}>Comments </ModalHeader>
              <ModalBody>
              <LocalForm onSubmit={ (values) => this.handleCommentSubmit(values) } >
                  
                  <Row className="form-group" >
                      <Label htmlFor="rating" md={2}>Rating</Label>
                        <Col md={10}>
                            <Control.select model=".rating" id="rating" name="rating"
                            className="form-control">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </Control.select>
                        </Col>
                  </Row>
  
                  <Row className="form-group">
                    <Label htmlFor="author" md={2}>Your Name</Label>
                      <Col md={10}>
                          <Control.text model=".author" id="author" name="author"
                            placeholder="Your Name"
                            className="form-control"
                            validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }}
                          />
                          <Errors
                            className="text-danger"
                            model=".author"
                            show="touched"
                            messages={{
                            required: 'The Name field is required',
                            minLength:'The Name field should at least be 3 characters long',
                            maxLength:'The Name field should be less than or equal to 15 characters'                        
                            }}
                          />   
                       </Col>
                  </Row>
  
                  <Row className="form-group">
                    <Label htmlFor="comment" md={2}>Your Comment</Label>
                      <Col md={10}>
                        <Control.textarea model=".comment" id="comment" name="comment"
                          rows="6"
                          className="form-control">
                        </Control.textarea>
                      </Col>
                  </Row>
                  <Row className="form-group">
                    <Col md={{size: 10, offset: 2}}>
                      <Button type="submit" color="primary">Send Comments
                      </Button>
                    </Col>
                  </Row> 
                </LocalForm>
              </ModalBody>
            </Modal>
          </div>    
          )
      }



} // end Class
// Use function when no constructor needed
// page props only 
function RenderProduct( {product} ) {
    if (product != null){
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top width="100%" src={product.image} alt={product.name}/>
                    <CardBody>
                    <CardTitle>{product.name}</CardTitle>
                    <CardText>{product.description}</CardText>
                    <CardText>{product.price}</CardText>
                    </CardBody>
                </Card>
            </div>
        );    
    }else {
        return (
            <div>-- Product Error -- </div>
        )
    }        
}

function RenderComments({ comments, addComment, productId }) {
    if(comments != null){
        return (
            <div className="col-12 col-md-5 m-1">           
                <h4>Comments</h4>
                <ul className="list-unstyled">
                { comments.map( comment => (
                    <li key={comment.id} className="mt-3" >
                    <p>{ comment.comment}</p>
                    <p>-- {comment.author} , 
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                )
                )}
                </ul>
                <CommentForm productId={ productId} addComment={addComment} />        
            </div>
        );   
    }else {
        return (
            <div>-- Comment Error -- </div>
        )
    }
}

// creation de la view
const ProductDetail = (props)=> {    
     
    console.log( 'Detail - Product Component Render is Invoked');  
    if(props.isLoading) {
        return (
        <div className="container">
            <div className="row">
                <Loading />
            </div>
        </div>
        );
    }
    else if (props.errMess){
        return (
            <div className="container">
                <div className="row">
                    <h4>{ props.errMess}</h4>
                </div>
            </div>
            );
    }
    else if(props.product != null ){
        return (
            <div className="container">
            <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/product">Product</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.product.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.product.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">                   
                        <RenderProduct product={props.product} /> 
                        <RenderComments comments={props.comments} 
                            addComment ={props.addComment}
                            productId={props.product.id}
                        />                   
                </div>
            </div>
        );
    }else{
        return (<div></div>);
    }
}


// end Class
export default ProductDetail;