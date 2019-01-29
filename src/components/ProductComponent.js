import React from 'react';
import { Col,Card, CardImg, CardImgOverlay,  CardTitle,  Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading} from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

// function when props constructor no needed and pros  and no setState
// methode 1 :  (props) = {product, onClick} 
// template?
function RenderProductItem({product, onClick}) {
    //
    return (
        <Col xs={12} >
        <Card className="mt-4">
            <Link to={`/product/${product.id}`}>
                <CardImg src={baseUrl + product.image} alt={product.name} />
                <CardImgOverlay>
                    <CardTitle>{product.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>  
        </Col>
    );
}
// methode 2
const Product = (props) =>{
        // render list of product
        const product = props.products.products.map( (product) => {
            return (
                <div key={product.id} className="col-12 col-md-5 mt-1">
                    <RenderProductItem product={product} onClick={props.onClick} />
                </div>
            );
        });
        console.log( 'Product Render Component is Invoked');

        if (props.products.isLoading) {
            return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
            );
        }
        else if (props.products.errMess){
            return (
                <div className="container">
                    <div className="row">
                        <h4>{ props.products.errMess}</h4>
                    </div>
                </div>
                );
        }
        else {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Produits</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row ">
                        { product }
                    </div>
                </div>
            );

        }
       
}  
// function system
export default Product;