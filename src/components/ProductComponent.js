import React from 'react';
import { Card, CardImg, CardImgOverlay,  CardTitle } from 'reactstrap';

// function when props constructor no needed and pros  and no setState
// methode 1 :  (props) = {product, onClick} 
// template?
function RenderProductItem({product, onClick}) {
    //
    return (
        <Card key={ product.id } onClick={() => onClick(product.id)}>
            <CardImg src={ product.image } alt={product.name} />
            <CardImgOverlay>
                <CardTitle>{product.name}</CardTitle>
            </CardImgOverlay>
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
                    { product }
                </div>
            </div>
        );
}  
// function system
export default Product;