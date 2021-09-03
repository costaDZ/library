import { fetchProducts, fetchProductById } from '../actions/actions';




export const fetchProductsfromApi = () => async (dispatch) => {

    try {

        const url = 'https://fakestoreapi.com/products';
        const response = await fetch(url);
        const products = await response.json();
        dispatch(fetchProducts(products));

    } catch (error) {
        alert(error);
    }
}


export const fetchProductsByIdFromApi = (id) => async (dispatch) => {

    try {
        const url = `https://fakestoreapi.com/products/${id}`;
        const response = await fetch(url);
        const product = await response.json();

        dispatch(fetchProductById(product));
    } catch (error) {
        alert(error);
    }

}