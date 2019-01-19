import React, { Component } from 'react';
import { Card, CardImg,  CardText,CardBody,CardTitle } from 'reactstrap';

class ProductDetail extends Component {

//
constructor(props){
    super(props);
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
                    <p>-- {comment.author} , <span>{comment.date}</span></p>
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
    
    if(this.props.product){
        return (
            <div class="row">
                <div className="col-12 col-md-5 m-1">
                { this.renderProduct(this.props.product)}
                </div>
                <div className="col-12 col-md-5 m-1">
                { this.renderComments(this.props.product.comments)}
                </div>
            </div>
        );
    }else{
        return (<div></div>);
    }
}


}
export default ProductDetail;