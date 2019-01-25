import * as ActionTypes from './ActionTypes';
import { PRODUCTS } from '../shared/products';

// Comments
export const addComment = (productId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT, 
    payload: {
        productId: productId,
        rating: rating,
        author: author,
        comment: comment
    }
});


// Products action creator
export const fetchProducts = () => (dispatch) => {
    dispatch(productsLoading(true));

    setTimeout(() => {
        dispatch(addProducts(PRODUCTS));
    }, 2000);
}

export const productsLoading = () => ({
    type: ActionTypes.PRODUCTS_LOADING
});

export const productsFailed = (errmess) => ({
    type: ActionTypes.PRODUCTS_FAILED,
    payload: errmess
});

export const addProducts = (products) => ({
    type: ActionTypes.ADD_PRODUCTS,
    payload: products
});