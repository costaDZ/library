import {
    SET_PRODUCTS,
    FETCH_PRODUCTS,
    FETCH_PRODUCT_BY_ID,
    REMOVER_SELECTED_PRODUCT
} from '../actions/actions.js';


export const productReducer = (state = [], action) => {

    const { type, payload } = action;

    switch (type) {
        case SET_PRODUCTS:
            return state;
        case FETCH_PRODUCTS:
            return payload;

        default:
            return state;
    }
}


export const selectedProductReducer = (state = [], action) => {

    const { type, payload } = action;

    switch (type) {
        case FETCH_PRODUCT_BY_ID:
            return payload;
        case REMOVER_SELECTED_PRODUCT:
            return [];
        default:
            return state;
    }

}