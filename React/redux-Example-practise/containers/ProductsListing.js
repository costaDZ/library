import React from 'react';
import ProductComponent from './ProductComponent';


import { connect } from 'react-redux';


const ProductsListing = ({ products }) => {

    console.log(products);

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.allProducts,
})

export default connect(mapStateToProps)(ProductsListing);
