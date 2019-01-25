import * as ActionTypes from './ActionTypes';
//import { PRODUCTS } from '../shared/products';
import { baseUrl } from '../shared/baseUrl';





// Products 
export const fetchProducts = () => (dispatch) => {
    dispatch(productsLoading(true));

    return fetch(baseUrl + 'products')
    .then(response => response.json())
    .then( products => dispatch(addProducts(products)));
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


// Comments
export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then( comments => dispatch(addComments(comments)));
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

// Comment
export const addComment = (productId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT, 
    payload: {
        productId: productId,
        rating: rating,
        author: author,
        comment: comment
    }
});