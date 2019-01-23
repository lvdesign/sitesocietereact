import { PRODUCTS } from '../shared/products';
import { COMMENTS } from '../shared/comments';

export const initialState ={
    products: PRODUCTS,
    comments: COMMENTS
};


export const Reducer = (state = initialState, action) => {
    return state;
};