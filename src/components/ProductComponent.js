import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

import ProductDetail from './ProductDetailComponent';


class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedProduct: null 
                };
                console.log( 'Product Constructor Component is Invoked');
            }

            componentDidMount(){
                console.log( '3- Product Component componentDidMount is Invoked');
            }
            onProductSelect(product) {
                this.setState({selectedProduct: product})
            }


        // Page view
            render() {
                // render list of product
                const product = this.props.products.map( (product) => {
                    return (
                        <div key={product.id} className="col-12 col-md-5 mt-1">
                            <Card key={ product.id } onClick={() => this.onProductSelect(product)}>
                                <CardImg object src={ product.image } alt={product.name} />
                                
                                <CardImgOverlay>
                                    <CardTitle>{product.name}</CardTitle>
                                    
                                </CardImgOverlay>
                            </Card>
                        </div>
                    );
                });
                console.log( 'Product Render Component is Invoked');

                return (
                    <div className="container">
                        <div className="row">
                            { product }
                        </div>
                        <div className="row">
                            
                               <ProductDetail product={this.state.selectedProduct} />
                       
                        </div>
                    </div>
                );
            }
        }

        //
export default Product;