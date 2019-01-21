import React from 'react';
import { Card, CardImg, CardImgOverlay,  CardTitle,  Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// function when props constructor no needed and pros  and no setState
// methode 1 :  (props) = {product, onClick} 
// template?
function RenderProductItem({product, onClick}) {
    //
    return (
        <Card >
            <Link to={`/product/${product.id}`}>
            <CardImg src={ product.image } alt={product.name} />
            <CardImgOverlay>
                <CardTitle>{product.name}</CardTitle>
            </CardImgOverlay>
            </Link>
        </Card>        
    );
}
// methode 2
const Product = (props) =>{
        // render list of product
        const product = props.products.map( (product) => {
            return (
                <div key={product.id} className="col-12 col-md-5 mt-1">
                    <RenderProductItem product={product} onClick={props.onClick} />
                </div>
            );
        });
        console.log( 'Product Render Component is Invoked');


        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Product</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    { product }
                </div>
            </div>
        );
}  
// function system
export default Product;