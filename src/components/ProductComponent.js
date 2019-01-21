import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,  CardTitle } from 'reactstrap';




class Product extends Component {

    // constructor(props) {
    //     super(props);
    // }

            componentDidMount(){
                console.log( '3- Product Component componentDidMount is Invoked');
            }
           


        // Page view
            render() {
                // render list of product
                const product = this.props.products.map( (product) => {
                    return (
                        <div key={product.id} className="col-12 col-md-5 mt-1">
                            <Card key={ product.id } onClick={() => this.props.onClick(product.id)}>
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
                            
                               
                       
                        </div>
                    </div>
                );
            }
        }

        //
export default Product;