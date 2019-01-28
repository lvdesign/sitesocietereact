import * as ActionTypes from './ActionTypes';
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

export const postProduct = (name, image, category, slug, price,sku,summary,description, featured) => (dispatch) => {
    const newProduct= {
        name: name, 
        image:image, 
        category:category, 
        slug: slug, 
        price:price,
        sku:sku,
        summary:summary,
        description:description, 
        featured: featured
    }
    //newComment.date = new Date().toISOString();
        return fetch(baseUrl + 'products', {
            method: 'POST',
            body: JSON.stringify(newProduct),
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
        .then(response => dispatch(addProduct(response)))
            .catch(error => {console.log('Post ADD Product ', error.message) ;
            alert('Your product could not be posted\nError: '+error.message); });

}

export const addProduct = (product) => ({
    type: ActionTypes.ADD_PRODUCT,
    payload: product
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



// feedback

export const postFeedback = (firstname,lastname, telnum, email,agree,contactType, message) => (dispatch) => {
    
    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message
    };

        return fetch(baseUrl + 'feedback', {
            method: 'POST',
            body: JSON.stringify(newFeedback),
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
            throw errmess;
        })
        .then(response => response.json())
        .then(response => alert('Thanks for feedback ::' + JSON.stringify(response)))
            .then(response => dispatch(addFeedback(response)))
                .catch(error => {console.log('Feedback ', error.message) ;
                    alert('Your feedback could not be posted\nError: '+error.message); });
};

export const addFeedback = (feedback) => ({
    type: ActionTypes.ADD_FEEDBACK, 
    payload: feedback
});


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