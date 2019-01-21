import React, { Component } from 'react';
import { Card, CardImg,  CardText,CardBody,CardTitle } from 'reactstrap';


class ProductDetail extends Component {
    componentDidMount(){
        console.log( 'Detail - Product Component componentDidMount is Invoked');
    }
    componentDidUpdate(){
        console.log( 'Detail - Product Component componentDidUpdate is Invoked');
    }
// page
renderProduct(product) {
    if (product != null){
        return (
            <Card>
                <CardImg top src={product.image} alt={product.name} />
                <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                  <CardText>{product.description}</CardText>
                  <CardText>{product.price}</CardText>
                </CardBody>
            </Card>
        );    
    }else {
        return (
            <div>-- Product Error -- </div>
        )
    }        
}

renderComments(comments) {
    if(comments != null){
        return (
            <div>
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
            </div>
        );   
    }else {
        return (
            <div>-- Comment Error -- </div>
        )
    }
}

render() {    
        console.log( 'Detail - Product Component Render is Invoked');  
    
    if(this.props.product){
        return (
            <div className="container">
                <div class="row">
                    <div className="col-12 col-md-5 m-1">
                    { this.renderProduct(this.props.product)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    { this.renderComments(this.props.product.comments)}
                    </div>
                </div>
            </div>
        );
    }else{
        return (<div></div>);
    }
}


} // end Class
export default ProductDetail;