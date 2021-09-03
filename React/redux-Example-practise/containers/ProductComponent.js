import React, { useEffect } from 'react'

import { connect } from 'react-redux';

import { fetchProductsfromApi, fetchProductsByIdFromApi } from '../redux/thunk/Thunk';

import { Link } from 'react-router-dom';





const ProductComponent = ({ products, getProducts, getProductById }) => {


    useEffect(() => {
        getProducts();
    }, []);


    const mycard = products.map(product => {
        const { id, title, image, price } = product;

        return (
            <div className="four wide column" key={id} >
                <Link to={`/product/${id}`} onClick={() => getProductById(id)}>
                    <div className="ui link cards" >
                        <div className="card" style={{ minHeight: '100%' }} >
                            <div className="image">
                                <img src={image} alt={title} />
                            </div>


                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta">{price}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

        )
    })
    return products.length ?
        mycard
        :
        <h1>Loading ...</h1>
}

const mapStateToProps = state => ({
    products: state.allProducts,
});

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(fetchProductsfromApi()),
    getProductById: (id) => dispatch(fetchProductsByIdFromApi(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);

