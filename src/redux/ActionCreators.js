import * as ActionTypes from './ActionTypes';
//import { PRODUCTS } from '../shared/products';
import { baseUrl } from '../shared/baseUrl';





// Products 
export const fetchProducts = () => (dispatch) => {
    dispatch(productsLoading(true));

    return fetch(baseUrl + 'products')
    .then( response => { 
        if(response.ok){
            return response;
        }else{ // error server
            var error = new Error(' Error '+ response.status + ' : ' + response.statusText);
            error.response =response;
            throw error;
        }
    },
    error => { 
        var errmess = new Error(error.message);
        throw errmess
    })
    .then(response => response.json())
    .then( products => dispatch(addProducts(products)))
        .catch(error => dispatch(productsFailed(error.message) ))
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
        .then( response => { 
            if(response.ok){
                return response;
            }else{ // error server
                var error = new Error(' Error '+ response.status + ' : ' + response.statusText);
                error.response =response;
                throw error;
            }
        },
        error => { 
            var errmess = new Error(error.message);
            throw errmess
        })
        .then(response => response.json())
        .then( comments => dispatch(addComments(comments)))
            .catch(error => dispatch(commentsFailed(error.message) ))
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});



export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT, 
    payload: comment
});

export const postComment = (productId, rating, author, comment) => (dispatch) => {
    
    const newComment= {
        productId: productId,
        rating: rating,
        author: author,
        comment: comment
    }

    newComment.date = new Date().toISOString();
        return fetch(baseUrl + 'comments', {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then( response => { 
            if(response.ok){
                return response;
            }else{ // error server
                var error = new Error(' Error '+ response.status + ' : ' + response.statusText);
                error.response =response;
                throw error;
            }
        },
        error => { 
            var errmess = new Error(error.message);
            throw errmess
        })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
            .catch(error => {console.log('Post Comments ', error.message) ;
            alert('Your comment could not be posted\nError: '+error.message); });
};

// Comment
// export const addComment = (productId, rating, author, comment) => ({
//     type: ActionTypes.ADD_COMMENT, 
//     payload: {
//         productId: productId,
//         rating: rating,
//         author: author,
//         comment: comment
//     }
// });

// Products 
// export const fetchProducts = () => (dispatch) => {
//     dispatch(productsLoading(true));

//     return fetch(baseUrl + 'products')
//     .then(response => response.json())
//     .then( products => dispatch(addProducts(products)));
// }