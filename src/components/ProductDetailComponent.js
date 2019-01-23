import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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

function RenderComments({ comments }) {
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
    
    if(props.product != null ){
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
                        <RenderComments comments={props.comments} />                   
                </div>
            </div>
        );
    }else{
        return (<div></div>);
    }
}


// end Class
export default ProductDetail;