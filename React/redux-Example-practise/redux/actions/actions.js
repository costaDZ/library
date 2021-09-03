


export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const fetchProducts = (products) => ({
        type: FETCH_PRODUCTS,
        payload: products,
});


export const FETCH_PRODUCT_BY_ID = 'FETCH_PRODUCT_BY_ID';
export const fetchProductById = (id) => ({
        type: FETCH_PRODUCT_BY_ID,
        payload: id,
})

export const REMOVER_SELECTED_PRODUCT = 'REMOVER_SELECTED_PRODUCT';
export const removeSelectedProduct = () => ({
        type: REMOVER_SELECTED_PRODUCT,
})



export const SET_PRODUCTS = 'SET_PRODUCTS';
export const detProducts = (products) => ({
        type: SET_PRODUCTS,
        payload: products,
})


export const SELECTED_PRODUCT = 'SELECTED_PRODUCT';
export const selectedProduct = (products) => ({
        type: SELECTED_PRODUCT,
        payload: products,
})

